import React from 'react';

export function ImportStats({ stats }) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">{stats?.totalQuestions || 0}</p>
            <p className="text-gray-500">Total Questions</p>
          </div>
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            ✓
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">{stats?.sectionsDetected || 0}</p>
            <p className="text-gray-500">Sections Detected</p>
          </div>
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            ✓
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">{stats?.confidence || 0}%</p>
            <p className="text-gray-500">Extraction Confidence</p>
          </div>
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            ✓
          </div>
        </div>
      </div>
    </>
  );
}
