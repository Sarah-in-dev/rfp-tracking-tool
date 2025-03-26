import React from 'react';

export function RfpSectionList({ rfpId }) {
  const sections = [
    { id: '1', name: 'Company Background', questionCount: 15, progress: 100 },
    { id: '2', name: 'Technical Capabilities', questionCount: 42, progress: 80 },
    { id: '3', name: 'Security & Compliance', questionCount: 35, progress: 70 },
    { id: '4', name: 'Pricing & Terms', questionCount: 20, progress: 50 },
    { id: '5', name: 'Implementation Plan', questionCount: 15, progress: 15 }
  ];
  
  return (
    <div className="space-y-4">
      {sections.map(section => (
        <div key={section.id} className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">{section.name}</h3>
            <p className="text-gray-500">{section.questionCount} Questions</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-48 flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                <div 
                  className={`h-2 rounded-full ${
                    section.progress === 100 
                      ? 'bg-green-500' 
                      : section.progress < 25 
                        ? 'bg-red-500' 
                        : 'bg-blue-600'
                  }`} 
                  style={{ width: `${section.progress}%` }}
                ></div>
              </div>
              <span className="font-bold">{section.progress}%</span>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded">View</button>
          </div>
        </div>
      ))}
    </div>
  );
}
