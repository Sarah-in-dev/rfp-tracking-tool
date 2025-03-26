export async function getRfpById(id: string) {
  return {
    id,
    title: 'RFP Title',
    client_name: 'Client Name',
    industry: 'Technology',
    due_date: '2025-03-30',
    status: 'active'
  };
}
