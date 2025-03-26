import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sectionId = searchParams.get('sectionId');
  
  const questions = [
    { 
      id: '1', 
      text: 'Describe your experience with government IT modernization projects.',
      status: 'answered',
      tags: ['Technical', 'Government'],
      sectionId: 'section1'
    },
    { 
      id: '2', 
      text: 'Detail your approach to implementing cloud-based solutions in secure government environments.',
      status: 'draft',
      tags: ['Technical', 'Cloud', 'Security'],
      sectionId: 'section1'
    },
    { 
      id: '3', 
      text: 'Explain your organization\'s approach to data migration and system integration.',
      status: 'needs-answer',
      tags: ['Technical', 'Data'],
      sectionId: 'section2'
    }
  ];
  
  // Filter by section if provided
  const filteredQuestions = sectionId 
    ? questions.filter(q => q.sectionId === sectionId)
    : questions;
    
  return NextResponse.json({ questions: filteredQuestions });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      message: 'Question created successfully',
      question: {
        id: '4',
        ...data,
        created_at: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create question' },
      { status: 400 }
    );
  }
}
