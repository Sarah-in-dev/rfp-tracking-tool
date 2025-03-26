import React from 'react';

export function QuestionsList({ sectionId }) {
  // This would normally fetch questions based on sectionId
  const questions = [
    {
      id: '1',
      text: 'Describe your experience with government IT modernization projects.',
      status: 'answered',
      tags: ['Technical', 'Government'],
      matchScore: 95,
      answerText: 'Our team has successfully completed over 20 government IT modernization projects in the past 5 years, including the New Jersey DMV Migration (2022-2023), Federal Reserve Legacy System Upgrade (2021-2022), and Pennsylvania Department of Transportation Portal Redesign (2023).',
      answerSource: 'Federal Reserve RFP (2023)'
    },
    {
      id: '2',
      text: 'Detail your approach to implementing cloud-based solutions in secure government environments.',
      status: 'draft',
      tags: ['Technical', 'Cloud', 'Security'],
      matchScore: 87,
      answerText: 'Our approach to implementing cloud-based solutions in secure government environments follows a proven six-phase methodology: 1) Security Assessment and Authorization Planning, 2) Architecture Design with FedRAMP compliance, 3) Implementation with secure CI/CD pipelines, 4) Testing including penetration testing and security validation, 5) Migration with zero-downtime strategies, and 6) Continuous monitoring and compliance management.',
      answerSource: 'Federal Agency Cloud Migration RFP (2022)'
    },
    {
      id: '3',
      text: 'Explain your organization\'s approach to data migration and system integration.',
      status: 'needs-answer',
      tags: ['Technical', 'Data'],
      matchScore: 78
    }
  ];
  
  // Placeholder component that would use real components in a full implementation
  return (
    <div className="space-y-6">
      {questions.map(question => (
        <div key={question.id} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-lg">{question.text}</h3>
              <div className="flex mt-2 space-x-2">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs ${
                  question.status === 'answered' ? 'bg-green-100 text-green-800' :
                  question.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {question.status === 'answered' ? 'Answered' :
                   question.status === 'draft' ? 'Draft' : 'Needs Answer'}
                </span>
                
                {question.tags.map(tag => (
                  <span key={tag} className="inline-flex px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs text-gray-500">Match Score</p>
              <p className="text-xl font-bold">{question.matchScore}%</p>
            </div>
          </div>
          
          {(question.status === 'answered' || question.status === 'draft') && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p>{question.answerText}</p>
              {question.answerSource && (
                <p className="text-xs text-gray-500 mt-2">
                  Based on answer from {question.answerSource}
                </p>
              )}
              <div className="flex justify-end space-x-3 mt-4">
                <button className="px-4 py-1 border border-gray-300 rounded text-sm">Edit</button>
                {question.status === 'draft' && (
                  <button className="px-4 py-1 bg-blue-600 text-white rounded text-sm">Approve</button>
                )}
                <button className="px-4 py-1 border border-red-500 text-red-500 rounded text-sm">
                  Request Revision
                </button>
              </div>
            </div>
          )}
          
          {question.status === 'needs-answer' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded text-center">
              <p className="text-red-600 mb-4">No answer provided yet. Click "Generate Answer" to use AI to create a draft based on historical responses.</p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-red-600 text-white rounded">
                  Generate Answer
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded">
                  Write Answer Manually
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
