import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'AI API is operational',
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      message: 'AI request processed',
      received: data
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 400 }
    );
  }
}
