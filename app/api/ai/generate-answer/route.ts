import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    return NextResponse.json({
      text: "This is a sample AI-generated answer.",
      confidence: 85,
      sourcesUsed: 3
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate answer' },
      { status: 500 }
    );
  }
}
