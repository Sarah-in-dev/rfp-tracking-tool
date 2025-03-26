import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get('projectId');
  
  const rfps = [
    { 
      id: '1', 
      title: 'State of New York IT Services',
      project_id: 'project1',
      description: 'RFP for IT modernization services',
      status: 'active',
      due_date: '2025-03-30',
      created_at: '2024-03-01T00:00:00Z',
      updated_at: '2024-03-15T00:00:00Z'
    },
    { 
      id: '2', 
      title: 'Acme Corp Software Solution',
      project_id: 'project2',
      description: 'Custom software development RFP',
      status: 'active',
      due_date: '2025-04-15',
      created_at: '2024-03-05T00:00:00Z',
      updated_at: '2024-03-10T00:00:00Z'
    }
  ];
  
  // Filter by project if provided
  const filteredRfps = projectId 
    ? rfps.filter(rfp => rfp.project_id === projectId)
    : rfps;
    
  return NextResponse.json({ rfps: filteredRfps });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      message: 'RFP created successfully',
      rfp: {
        id: '3',
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create RFP' },
      { status: 400 }
    );
  }
}
