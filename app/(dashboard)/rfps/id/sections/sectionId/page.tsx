import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { QuestionHeader } from '@/components/questions/QuestionHeader';
import { QuestionsList } from '@/components/questions/QuestionsList';
import { QuestionsFilter } from '@/components/questions/QuestionsFilter';
import { QuestionsSkeleton } from '@/components/ui/skeletons';
import { getSectionById } from '@/lib/supabase/sections';
import { getRfpById } from '@/lib/supabase/rfps';

export default async function QuestionsPage({ 
  params 
}: { 
  params: { id: string; sectionId: string } 
}) {
  const [rfp, section] = await Promise.all([
    getRfpById(params.id),
    getSectionById(params.sectionId)
  ]);
  
  if (!rfp || !section) {
    return notFound();
  }
  
  return (
    <div className="space-y-6">
      <QuestionHeader 
        rfpTitle={rfp.title}
        sectionName={section.name}
        rfpId={rfp.id}
      />
      
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Questions & Answers</h1>
        <div className="space-x-4">
          <button className="btn btn-outline">Import Questions</button>
          <button className="btn btn-primary">AI Match Answers</button>
        </div>
      </div>
      
      <QuestionsFilter />
      
      <Suspense fallback={<QuestionsSkeleton />}>
        <QuestionsList sectionId={params.sectionId} />
      </Suspense>
    </div>
  );
}
