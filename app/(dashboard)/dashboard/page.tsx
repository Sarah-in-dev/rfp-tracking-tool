import { Suspense } from 'react';
import { RfpCard } from '@/components/rfps/RfpCard';
//import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSkeleton } from '@/components/ui/skeletons';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      
      <Suspense fallback={<DashboardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* RFP Cards would be fetched and rendered here */}
          <RfpCard 
            title="State of New York IT Services"
            client="NY State Gov"
            progress={75}
            dueDate="Mar 30, 2025"
            status="active"
            questionCount={127}
            id="123"
          />
          <RfpCard 
            title="Acme Corp Software Solution"
            client="Acme Corporation"
            progress={50}
            dueDate="Apr 15, 2025"
            status="active"
            questionCount={93}
            id="124"
          />
          <RfpCard 
            title="TechCorp Cloud Migration"
            client="TechCorp Inc."
            progress={25}
            dueDate="May 10, 2025"
            status="draft"
            questionCount={75}
            id="125"
          />
        </div>
        
       {/* <ActivityFeed /> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCards />
        </div>
      </Suspense>
    </div>
  );
}
