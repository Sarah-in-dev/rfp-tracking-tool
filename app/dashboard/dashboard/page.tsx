import React from 'react';

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">RFP Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold">Active RFPs</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold">Open Questions</h2>
          <p className="text-3xl font-bold mt-2">127</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold">Historical Answers</h2>
          <p className="text-3xl font-bold mt-2">1,482</p>
        </div>
      </div>
    </div>
  );
}
