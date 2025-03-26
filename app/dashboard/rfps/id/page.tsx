import { Suspense } from 'react';
import { notFound } from 'next/navigation';

export default async function RfpDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch from your API
  const rfp = {
    id: params.id,
    title: 'RFP Title',
    status: 'active',
    due_date: 'Mar 30, 2025',
    client_name: 'Client Name',
    industry: 'Industry'
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">RFP Details</p>
          <h1 className="text-2xl font-bold">{rfp.title}</h1>
        </div>
        <div className="space-x-3">
          <button className="border border-gray-300 px-4 py-2 rounded">Export</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit RFP</button>
        </div>
      </div>
      
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="grid grid-cols-4 gap-6 mb-4">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <div className="mt-1 inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full">
                {rfp.status}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Due Date</p>
              <p className="font-semibold">{rfp.due_date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Client</p>
              <p className="font-semibold">{rfp.client_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Industry</p>
              <p className="font-semibold">{rfp.industry}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-right text-sm mt-1">75% Complete</p>
        </div>
        
        <div className="border-b mb-6">
          <div className="flex">
            <div className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600">
              Overview
            </div>
            <div className="px-6 py-3 font-medium text-gray-500">
              Questions
            </div>
            <div className="px-6 py-3 font-medium text-gray-500">
              Files
            </div>
            <div className="px-6 py-3 font-medium text-gray-500">
              Team
            </div>
            <div className="px-6 py-3 font-medium text-gray-500">
              Timeline
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mt-8 mb-4">RFP Sections</h2>
        <div className="space-y-4">
          {['Company Background', 'Technical Capabilities', 'Security & Compliance', 'Pricing & Terms', 'Implementation Plan'].map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">{section}</h3>
                <p className="text-gray-500">{15 + index * 10} Questions</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-48 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="h-2 rounded-full bg-blue-600" 
                      style={{ width: `${100 - index * 20}%` }}
                    ></div>
                  </div>
                  <span className="font-bold">{100 - index * 20}%</span>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded">View</button>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
