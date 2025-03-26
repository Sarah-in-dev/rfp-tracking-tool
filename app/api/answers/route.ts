import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'Answers API is operational',
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      message: 'Answer saved successfully',
      received: data
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 400 }
    );
  }
}
