import React from 'react';

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">+ New RFP</button>
    </div>
  );
}
