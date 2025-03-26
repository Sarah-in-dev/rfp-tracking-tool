import React from 'react';

export default function QuestionsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Question Library</h1>
        <div className="space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded">Import Questions</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">+ Add Question</button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1">
          <input 
            type="text"
            placeholder="Search questions..."
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <select className="px-4 py-2 border border-gray-300 rounded">
          <option>All Categories</option>
          <option>Technical</option>
          <option>Security</option>
          <option>Compliance</option>
          <option>Experience</option>
        </select>
        
        <select className="px-4 py-2 border border-gray-300 rounded">
          <option>All Tags</option>
          <option>Government</option>
          <option>Healthcare</option>
          <option>Financial</option>
          <option>Technology</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {/* Question Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold">Describe your experience with government IT modernization projects.</h2>
          <div className="flex mt-2 space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Technical</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Government</span>
          </div>
          <p className="mt-3 text-gray-600">
            Used in 5 RFPs • Last used 2 months ago
          </p>
          <div className="flex justify-end mt-3">
            <button className="text-blue-600 hover:underline">View Answers</button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold">Detail your approach to implementing cloud-based solutions in secure government environments.</h2>
          <div className="flex mt-2 space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Technical</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Cloud</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Security</span>
          </div>
          <p className="mt-3 text-gray-600">
            Used in 3 RFPs • Last used 1 month ago
          </p>
          <div className="flex justify-end mt-3">
            <button className="text-blue-600 hover:underline">View Answers</button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold">Explain your organization's approach to data migration and system integration.</h2>
          <div className="flex mt-2 space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Technical</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Data</span>
          </div>
          <p className="mt-3 text-gray-600">
            Used in 7 RFPs • Last used 2 weeks ago
          </p>
          <div className="flex justify-end mt-3">
            <button className="text-blue-600 hover:underline">View Answers</button>
          </div>
        </div>
      </div>
    </div>
  );
}
