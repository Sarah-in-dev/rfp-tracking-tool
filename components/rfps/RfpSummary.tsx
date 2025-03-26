import React from 'react';

export function RfpSummary({ status, dueDate, client, industry, progress }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="grid grid-cols-4 gap-6 mb-4">
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <div className="mt-1 inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full">
            {status || 'Active'}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Due Date</p>
          <p className="font-semibold">{dueDate || 'March 30, 2025'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-semibold">{client || 'Client Name'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Industry</p>
          <p className="font-semibold">{industry || 'Industry'}</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress || 75}%` }}></div>
      </div>
      <p className="text-right text-sm mt-1">{progress || 75}% Complete</p>
    </div>
  );
}
