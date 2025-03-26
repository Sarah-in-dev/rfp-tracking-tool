import React from 'react';

export function RfpHeader({ title, id }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <p className="text-sm text-gray-500">RFP Details</p>
        <h1 className="text-2xl font-bold">{title || 'RFP Title'}</h1>
      </div>
      <div className="space-x-3">
        <button className="border border-gray-300 px-4 py-2 rounded">Export</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit RFP</button>
      </div>
    </div>
  );
}
