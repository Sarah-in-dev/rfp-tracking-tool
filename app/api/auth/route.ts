import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'Auth API is operational',
    message: 'Please use POST with credentials to authenticate'
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      message: 'Authentication request received',
      // This would normally validate credentials and return a token
      success: true
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid authentication request' },
      { status: 400 }
    );
  }
}
