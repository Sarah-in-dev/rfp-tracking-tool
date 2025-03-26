import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  // Mock search results
  const results = {
    questions: [
      { 
        id: '1', 
        text: 'Describe your experience with government IT modernization projects.',
        sectionName: 'Technical Capabilities',
        rfpTitle: 'State of New York IT Services',
        score: 0.95
      },
      { 
        id: '2', 
        text: 'Detail your approach to implementing cloud-based solutions in secure government environments.',
        sectionName: 'Technical Capabilities',
        rfpTitle: 'State of New York IT Services',
        score: 0.87
      }
    ],
    answers: [
      {
        id: '101',
        text: 'Our team has successfully completed over 20 government IT modernization projects in the past 5 years.',
        questionText: 'Describe your experience with government IT modernization projects.',
        rfpTitle: 'Federal Reserve RFP',
        score: 0.92
      },
      {
        id: '102',
        text: 'Our approach to implementing cloud-based solutions in secure government environments follows a proven six-phase methodology.',
        questionText: 'Detail your approach to cloud solutions',
        rfpTitle: 'Federal Agency Cloud Migration RFP',
        score: 0.85
      }
    ]
  };
  
  return NextResponse.json({ 
    query,
    results,
    count: results.questions.length + results.answers.length
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // In a real app, this would process a vector search
    return NextResponse.json({
      message: 'Search performed successfully',
      query: data.query,
      results: {
        questions: [],
        answers: []
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 400 }
    );
  }
}
