import { Suspense } from 'react';
import { RfpCard } from '@/components/rfps/RfpCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">+ New RFP</button>
      </div>
      
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
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
        
        <div className="bg-white p-4 rounded shadow mt-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="p-3 border-b">
              <p className="font-medium">Imported 127 questions</p>
              <p className="text-sm text-gray-500">10 minutes ago</p>
            </li>
            <li className="p-3 border-b">
              <p className="font-medium">Matched 89 historical answers</p>
              <p className="text-sm text-gray-500">8 minutes ago</p>
            </li>
            <li className="p-3">
              <p className="font-medium">Added new RFP</p>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold">Active RFPs</h2>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold">Open Questions</h2>
            <p className="text-2xl font-bold">295</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold">Historical Answers</h2>
            <p className="text-2xl font-bold">1,482</p>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
