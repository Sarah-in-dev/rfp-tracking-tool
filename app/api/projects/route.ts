import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    projects: [
      { id: '1', name: 'State of New York IT Services', client: 'NY State Gov', status: 'active' },
      { id: '2', name: 'Acme Corp Software Solution', client: 'Acme Corporation', status: 'active' },
      { id: '3', name: 'TechCorp Cloud Migration', client: 'TechCorp Inc.', status: 'draft' }
    ]
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      message: 'Project created successfully',
      project: {
        id: '4',
        ...data,
        created_at: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 400 }
    );
  }
}
