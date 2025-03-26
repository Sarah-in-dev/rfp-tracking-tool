import React from 'react';

export function QuestionsFilter() {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full p-2 bg-gray-50 border border-gray-300 rounded"
        />
      </div>
      
      <div>
        <select className="p-2 bg-white border border-gray-300 rounded">
          <option>Status: All</option>
          <option>Status: Answered</option>
          <option>Status: Draft</option>
          <option>Status: Needs Answer</option>
        </select>
      </div>
      
      <div>
        <select className="p-2 bg-white border border-gray-300 rounded">
          <option>Tags: All</option>
          <option>Tags: Technical</option>
          <option>Tags: Security</option>
          <option>Tags: Compliance</option>
        </select>
      </div>
      
      <div>
        <select className="p-2 bg-white border border-gray-300 rounded">
          <option>Sort: Match Score (High to Low)</option>
          <option>Sort: Match Score (Low to High)</option>
          <option>Sort: Recently Updated</option>
        </select>
      </div>
    </div>
  );
}
