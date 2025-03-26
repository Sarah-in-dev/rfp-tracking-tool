import React from 'react';

export default function RfpsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All RFPs</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">+ New RFP</button>
      </div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1">
          <input 
            type="text"
            placeholder="Search RFPs..."
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <select className="px-4 py-2 border border-gray-300 rounded">
          <option>All Status</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Completed</option>
          <option>Lost</option>
        </select>
        
        <select className="px-4 py-2 border border-gray-300 rounded">
          <option>All Industries</option>
          <option>Government</option>
          <option>Healthcare</option>
          <option>Financial</option>
          <option>Technology</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* RFP Cards */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-lg truncate">State of New York IT Services</h3>
            <p className="text-gray-500">Client: NY State Gov</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-gray-500">75% Complete</p>
            
            <p className="text-gray-500">Due: Mar 30, 2025</p>
            
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              Active
            </span>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
            <span className="text-gray-500">127 Questions</span>
            <a href="/dashboard/rfps/123" className="text-blue-600">View →</a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-lg truncate">Acme Corp Software Solution</h3>
            <p className="text-gray-500">Client: Acme Corporation</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-gray-500">50% Complete</p>
            
            <p className="text-gray-500">Due: Apr 15, 2025</p>
            
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              Active
            </span>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
            <span className="text-gray-500">93 Questions</span>
            <a href="/dashboard/rfps/124" className="text-blue-600">View →</a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-lg truncate">TechCorp Cloud Migration</h3>
            <p className="text-gray-500">Client: TechCorp Inc.</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <p className="text-gray-500">25% Complete</p>
            
            <p className="text-gray-500">Due: May 10, 2025</p>
            
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
              Draft
            </span>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
            <span className="text-gray-500">75 Questions</span>
            <a href="/dashboard/rfps/125" className="text-blue-600">View →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
