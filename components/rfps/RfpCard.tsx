import React from 'react';

export function RfpCard({ 
  id, 
  title, 
  client, 
  progress, 
  dueDate, 
  status, 
  questionCount 
}) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    draft: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    lost: 'bg-gray-100 text-gray-800'
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 space-y-4">
        <h3 className="font-bold text-lg truncate">{title}</h3>
        <p className="text-gray-500">Client: {client}</p>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-gray-500">{progress}% Complete</p>
        
        <p className="text-gray-500">Due: {dueDate}</p>
        
        <span className={`inline-block px-3 py-1 rounded-full text-sm ${statusColors[status] || statusColors.active}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
        <span className="text-gray-500">{questionCount} Questions</span>
        <a href={`/rfps/${id}`} className="text-blue-600">View →</a>
      </div>
    </div>
  );
}
