import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { /* RfpHeader */ } from '@/components/rfps//* RfpHeader */';
import { /* RfpSummary */ } from '@/components/rfps//* RfpSummary */';
import { /* RfpTabs */ } from '@/components/rfps//* RfpTabs */';
import { /* RfpSectionList */ } from '@/components/rfps//* RfpSectionList */';
import { /* RfpDetailSkeleton */ } from '@/components/ui/skeletons';
import { getRfpById } from '@/lib/supabase/rfps';

export default async function RfpDetailPage({ params }: { params: { id: string } }) {
  const rfp = await getRfpById(params.id);
  
  if (!rfp) {
    return notFound();
  }
  
  return (
    <div className="space-y-6">
      </* RfpHeader */ 
        title={rfp.title}
        id={rfp.id}
      />
      
      <Suspense fallback={</* RfpDetailSkeleton */ />}>
        </* RfpSummary */
          status={rfp.status}
          dueDate={rfp.due_date}
          client={rfp.client_name}
          industry={rfp.industry}
          progress={75} // This would be calculated based on answers
        />
        
        </* RfpTabs */
          rfpId={rfp.id}
          activeTab="overview"
        />
        
        <h2 className="text-xl font-bold mt-8 mb-4">RFP Sections</h2>
        </* RfpSectionList */ rfpId={rfp.id} />
      </Suspense>
    </div>
  );
}
