import React from 'react';

export function RfpTabs({ rfpId, activeTab }) {
  return (
    <div className="border-b mb-6">
      <div className="flex">
        <div className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
          Overview
        </div>
        <div className={`px-6 py-3 font-medium ${activeTab === 'questions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
          Questions
        </div>
        <div className={`px-6 py-3 font-medium ${activeTab === 'files' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
          Files
        </div>
        <div className={`px-6 py-3 font-medium ${activeTab === 'team' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
          Team
        </div>
        <div className={`px-6 py-3 font-medium ${activeTab === 'timeline' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
          Timeline
        </div>
      </div>
    </div>
  );
}
