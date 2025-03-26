import React from 'react';

export function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
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
  );
}
