import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const { question, similarAnswers } = await request.json();
    
    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }
    
    // Create a prompt that includes the question and similar answers
    const prompt = `
      I need to create an answer for the following RFP question:
      
      "${question}"
      
      Here are some similar answers from past RFPs that may be helpful:
      
      ${similarAnswers.map((a: any, i: number) => `
        Answer ${i + 1} (Similarity: ${Math.round(a.similarity * 100)}%):
        "${a.answer_text}"
      `).join('\n')}
      
      Please generate a comprehensive answer for the question above, using the past answers as reference but tailoring it specifically to this question. The answer should be professional, detailed, and highlight our company's strengths.
    `;
    
    const response = await openai.createCompletion({
      model: "gpt-4",
      prompt,
      max_tokens: 1000,
      temperature: 0.7,
    });
    
    const generatedText = response.data.choices[0]?.text?.trim() || '';
    
    // Calculate a confidence score based on the quality of similar answers
    const avgSimilarity = similarAnswers.reduce(
      (acc: number, curr: any) => acc + curr.similarity, 
      0
    ) / (similarAnswers.length || 1);
    
    const confidence = Math.round(avgSimilarity * 100);
    
    return NextResponse.json({
      text: generatedText,
      confidence,
      sourcesUsed: similarAnswers.length
    });
    
  } catch (error) {
    console.error('Error generating answer:', error);
    return NextResponse.json(
      { error: 'Failed to generate answer' },
      { status: 500 }
    );
  }
}
