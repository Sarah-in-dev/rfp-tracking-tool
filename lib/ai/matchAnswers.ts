import { createClient } from '@/lib/supabase/client';
import { EmbeddingResponse } from '@/lib/types/ai';

export async function generateQuestionEmbedding(questionText: string): Promise<number[]> {
  try {
    const response = await fetch('/api/ai/embed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: questionText }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate embedding');
    }
    
    const data: EmbeddingResponse = await response.json();
    return data.embedding;
    
  } catch (error) {
    console.error('Error generating question embedding:', error);
    throw error;
  }
}

export async function findSimilarAnswers(questionId: string, embedding: number[], limit = 5) {
  const supabase = createClient();
  
  // Store the embedding for this question
  await supabase
    .from('question_embeddings')
    .upsert({ 
      question_id: questionId,
      embedding,
      created_at: new Date()
    });
  
  // Find similar historical answers using vector similarity
  const { data, error } = await supabase
    .rpc('match_historical_answers', {
      query_embedding: embedding,
      match_threshold: 0.7,
      match_count: limit
    });
  
  if (error) {
    console.error('Error finding similar answers:', error);
    throw error;
  }
  
  return data;
}

export async function generateAIAnswer(
  questionText: string, 
  similarAnswers: any[]
) {
  try {
    const response = await fetch('/api/ai/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        question: questionText,
        similarAnswers
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate AI answer');
    }
    
    return await response.json();
    
  } catch (error) {
    console.error('Error generating AI answer:', error);
    throw error;
  }
}

export async function matchAndGenerateAnswer(questionId: string, questionText: string) {
  // 1. Generate embedding for the question
  const embedding = await generateQuestionEmbedding(questionText);
  
  // 2. Find similar historical answers
  const similarAnswers = await findSimilarAnswers(questionId, embedding);
  
  // 3. Generate AI answer based on similar answers
  const generatedAnswer = await generateAIAnswer(questionText, similarAnswers);
  
  // 4. Create a draft answer in the database
  const supabase = createClient();
  const { data, error } = await supabase
    .from('answers')
    .insert({
      question_id: questionId,
      text: generatedAnswer.text,
      match_score: generatedAnswer.confidence,
      created_by: 'ai', // You might want to use a system user ID
      status: 'draft',
      created_at: new Date(),
      updated_at: new Date()
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error saving generated answer:', error);
    throw error;
  }
  
  return data;
}
