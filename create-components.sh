#!/bin/bash

# Create necessary directories
mkdir -p components/dashboard
mkdir -p components/rfps
mkdir -p components/ui

# Create components/dashboard/StatsCards.tsx
cat > components/dashboard/StatsCards.tsx << 'EOL'
import React from 'react';

export function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold">Active RFPs</h2>
        <p className="text-2xl font-bold">3</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold">Open Questions</h2>
        <p className="text-2xl font-bold">295</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold">Historical Answers</h2>
        <p className="text-2xl font-bold">1,482</p>
      </div>
    </div>
  );
}
EOL

# Create components/dashboard/DashboardHeader.tsx
cat > components/dashboard/DashboardHeader.tsx << 'EOL'
import React from 'react';

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">+ New RFP</button>
    </div>
  );
}
EOL

# Create components/dashboard/ActivityFeed.tsx
cat > components/dashboard/ActivityFeed.tsx << 'EOL'
import React from 'react';

export function ActivityFeed() {
  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-3">
        <li className="p-3 border-b">
          <p className="font-medium">Imported 127 questions</p>
          <p className="text-sm text-gray-500">10 minutes ago</p>
        </li>
        <li className="p-3 border-b">
          <p className="font-medium">Matched 89 historical answers</p>
          <p className="text-sm text-gray-500">8 minutes ago</p>
        </li>
        <li className="p-3">
          <p className="font-medium">Added new RFP</p>
          <p className="text-sm text-gray-500">1 hour ago</p>
        </li>
      </ul>
    </div>
  );
}
EOL

# Create components/ui/skeletons.tsx
cat > components/ui/skeletons.tsx << 'EOL'
import React from 'react';

export function DashboardSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export function RfpDetailSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      <div className="h-24 bg-gray-200 rounded"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
      <div className="space-y-2">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export function QuestionsSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
    </div>
  );
}

export function AnalyticsSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-4 gap-4">
        <div className="h-24 bg-gray-200 rounded"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
      </div>
      <div className="h-64 bg-gray-200 rounded"></div>
    </div>
  );
}
EOL

# Create components/rfps/RfpHeader.tsx
cat > components/rfps/RfpHeader.tsx << 'EOL'
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
EOL

# Create components/rfps/RfpSummary.tsx
cat > components/rfps/RfpSummary.tsx << 'EOL'
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
EOL

# Create components/rfps/RfpTabs.tsx
cat > components/rfps/RfpTabs.tsx << 'EOL'
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
EOL

# Create components/rfps/RfpSectionList.tsx
cat > components/rfps/RfpSectionList.tsx << 'EOL'
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
EOL

# Create components/rfps/RfpCard.tsx
cat > components/rfps/RfpCard.tsx << 'EOL'
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
EOL

# Create components/rfps/ImportHeader.tsx
cat > components/rfps/ImportHeader.tsx << 'EOL'
import React from 'react';

export function ImportHeader({ rfpId, currentStep }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-500 mb-1">RFP Import</p>
      <h1 className="text-2xl font-bold">Import Questions</h1>
      
      <div className="flex items-center mt-6">
        <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            1
          </div>
          <span className="ml-2 font-medium">Upload</span>
        </div>
        
        <div className={`w-16 h-1 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
        
        <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            2
          </div>
          <span className="ml-2 font-medium">Extract</span>
        </div>
        
        <div className={`w-16 h-1 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
        
        <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            3
          </div>
          <span className="ml-2 font-medium">Organize</span>
        </div>
        
        <div className={`w-16 h-1 mx-2 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
        
        <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            4
          </div>
          <span className="ml-2 font-medium">Match</span>
        </div>
      </div>
    </div>
  );
}
EOL

# Create components/rfps/FileUpload.tsx
cat > components/rfps/FileUpload.tsx << 'EOL'
import React from 'react';

export function FileUpload({ onFileUpload, file, onExtract }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      {!file ? (
        <div>
          <p className="mb-4 text-gray-500">Upload your RFP document</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Select File
          </button>
          <p className="mt-2 text-sm text-gray-500">
            Supports PDF, DOCX, and Excel files
          </p>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gray-100 p-3 rounded">
              <span className="text-gray-500">PDF</span>
            </div>
            <div className="ml-4 text-left">
              <p className="font-bold">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / (1024 * 1024)).toFixed(2)} MB • Uploaded just now
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="border border-gray-300 px-4 py-2 rounded">
              View File
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded">
              Replace
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={onExtract}
            >
              Extract Questions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
EOL

# Create components/rfps/ExtractedQuestions.tsx
cat > components/rfps/ExtractedQuestions.tsx << 'EOL'
import React from 'react';

export function ExtractedQuestions({ questions }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-100 border-b flex">
        <div className="w-16 font-bold">#</div>
        <div className="flex-1 font-bold">Question</div>
        <div className="w-48 font-bold">Section</div>
      </div>
      
      <div className="divide-y">
        {questions && questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={question.id || index} className="p-4 flex items-center bg-white">
              <div className="w-16">{question.id || index + 1}</div>
              <div className="flex-1">{question.text}</div>
              <div className="w-48">{question.section}</div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No questions extracted yet</div>
        )}
      </div>
      
      {questions && questions.length > 3 && (
        <div className="p-4 text-center text-gray-500">
          + {questions.length - 3} more questions extracted
        </div>
      )}
    </div>
  );
}
EOL

# Create components/rfps/ImportStats.tsx
cat > components/rfps/ImportStats.tsx << 'EOL'
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
EOL

# Create components/questions/QuestionHeader.tsx
cat > components/questions/QuestionHeader.tsx << 'EOL'
import React from 'react';

export function QuestionHeader({ rfpTitle, sectionName, rfpId }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-500 mb-1">
        {rfpTitle || 'RFP'} &gt; {sectionName || 'Section'}
      </p>
      <h1 className="text-2xl font-bold">Questions & Answers</h1>
    </div>
  );
}
EOL

# Create components/questions/QuestionsList.tsx
cat > components/questions/QuestionsList.tsx << 'EOL'
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
EOL

# Create components/questions/QuestionsFilter.tsx
cat > components/questions/QuestionsFilter.tsx << 'EOL'
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
EOL

# Create components/questions/MatchScore.tsx
cat > components/questions/MatchScore.tsx << 'EOL'
import React from 'react';

export function MatchScore({ score }) {
  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-blue-600';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="bg-gray-50 p-3 rounded">
      <p className="text-xs text-gray-500">Match Score</p>
      <p className="text-xl font-bold">{score}%</p>
      <div className="w-16 h-1 bg-gray-200 rounded mt-1">
        <div 
          className={`h-1 rounded ${getScoreColor(score)}`} 
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
}
EOL

# Create components/analytics/AnalyticsHeader.tsx
cat > components/analytics/AnalyticsHeader.tsx << 'EOL'
import React from 'react';

export function AnalyticsHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      
      <div>
        <select className="p-2 border border-gray-300 rounded">
          <option>Date Range: Last 12 Months</option>
          <option>Date Range: Last 6 Months</option>
          <option>Date Range: Last 3 Months</option>
          <option>Date Range: Custom</option>
        </select>
      </div>
    </div>
  );
}
EOL

# Create components/analytics/MetricCards.tsx
cat > components/analytics/MetricCards.tsx << 'EOL'
import React from 'react';

export function MetricCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-3xl font-bold">23</p>
        <p className="text-gray-500">Total RFPs</p>
        <div className="w-24 h-1 bg-gray-200 rounded mt-2 mb-1">
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </div>
        <p className="text-green-600 text-sm">+15%</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-3xl font-bold">17</p>
        <p className="text-gray-500">Won RFPs</p>
        <div className="w-24 h-1 bg-gray-200 rounded mt-2 mb-1">
          <div className="w-18 h-1 bg-green-600 rounded"></div>
        </div>
        <p className="text-green-600 text-sm">+22%</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-3xl font-bold">74%</p>
        <p className="text-gray-500">Win Rate</p>
        <div className="w-24 h-1 bg-gray-200 rounded mt-2 mb-1">
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </div>
        <p className="text-green-600 text-sm">+8%</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-3xl font-bold">3,482</p>
        <p className="text-gray-500">Library Answers</p>
        <div className="w-24 h-1 bg-gray-200 rounded mt-2 mb-1">
          <div className="w-20 h-1 bg-blue-600 rounded"></div>
        </div>
        <p className="text-green-600 text-sm">+32%</p>
      </div>
    </div>
  );
}
EOL

# Create components/analytics/CompletionTimeChart.tsx
cat > components/analytics/CompletionTimeChart.tsx << 'EOL'
import React from 'react';

export function CompletionTimeChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Average RFP Completion Time</h2>
      
      <div className="h-64 relative">
        <div className="absolute inset-0 flex items-end">
          <div className="w-1/6 h-40% bg-blue-600 mx-1 rounded-t"></div>
          <div className="w-1/6 h-60% bg-blue-600 mx-1 rounded-t"></div>
          <div className="w-1/6 h-35% bg-blue-600 mx-1 rounded-t"></div>
          <div className="w-1/6 h-55% bg-blue-600 mx-1 rounded-t"></div>
          <div className="w-1/6 h-65% bg-blue-600 mx-1 rounded-t"></div>
          <div className="w-1/6 h-75% bg-green-600 mx-1 rounded-t"></div>
        </div>
        
        <div className="absolute bottom-0 w-full border-t border-gray-300"></div>
        
        <div className="absolute bottom-0 w-full flex justify-between mt-2">
          <div className="text-xs text-gray-500">Mar</div>
          <div className="text-xs text-gray-500">Apr</div>
          <div className="text-xs text-gray-500">May</div>
          <div className="text-xs text-gray-500">Jun</div>
          <div className="text-xs text-gray-500">Jul</div>
          <div className="text-xs text-gray-500">Aug</div>
        </div>
      </div>
    </div>
  );
}
EOL

# Create components/analytics/CategoryMatchChart.tsx
cat > components/analytics/CategoryMatchChart.tsx << 'EOL'
import React from 'react';

export function CategoryMatchChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Answer Match Rate by Category</h2>
      
      <div className="flex justify-center mb-6">
        <div className="relative w-56 h-56">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="transparent" stroke="#3b82f6" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="0"></circle>
            <circle cx="50" cy="50" r="45" fill="transparent" stroke="#10b981" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="113.1" strokeDasharray="282.7"></circle>
            <circle cx="50" cy="50" r="45" fill="transparent" stroke="#f59e0b" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="185.7" strokeDasharray="282.7"></circle>
            <circle cx="50" cy="50" r="45" fill="transparent" stroke="#8b5cf6" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="236.6" strokeDasharray="282.7"></circle>
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
          <span>Technical (42%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-600 rounded mr-2"></div>
          <span>Compliance (26%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-600 rounded mr-2"></div>
          <span>Experience (18%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-600 rounded mr-2"></div>
          <span>Pricing (14%)</span>
        </div>
      </div>
    </div>
  );
}
EOL

# Create components/analytics/IndustryPerformanceTable.tsx
cat > components/analytics/IndustryPerformanceTable.tsx << 'EOL'
import React from 'react';

export function IndustryPerformanceTable() {
  const industries = [
    { 
      name: 'Government', 
      total: 8, 
      won: 7, 
      winRate: 88, 
      avgValue: '$1.2M',
      trendUp: true 
    },
    { 
      name: 'Healthcare', 
      total: 6, 
      won: 4, 
      winRate: 67, 
      avgValue: '$950K',
      trendUp: false 
    },
    { 
      name: 'Financial Services', 
      total: 5, 
      won: 3, 
      winRate: 60, 
      avgValue: '$1.5M',
      trendUp: false 
    },
    { 
      name: 'Technology', 
      total: 4, 
      won: 3, 
      winRate: 75, 
      avgValue: '$870K',
      trendUp: true 
    }
  ];
  
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="p-4 text-left">Industry</th>
          <th className="p-4 text-left">Total RFPs</th>
          <th className="p-4 text-left">Won</th>
          <th className="p-4 text-left">Win Rate</th>
          <th className="p-4 text-left">Avg Value</th>
          <th className="p-4 text-left">Trend</th>
        </tr>
      </thead>
      <tbody>
        {industries.map((industry, index) => (
          <tr key={index} className="border-t">
            <td className="p-4">{industry.name}</td>
            <td className="p-4">{industry.total}</td>
            <td className="p-4">{industry.won}</td>
            <td className={`p-4 ${industry.winRate >= 75 ? 'text-green-600' : 'text-yellow-600'}`}>
              {industry.winRate}%
            </td>
            <td className="p-4">{industry.avgValue}</td>
            <td className="p-4">
              <svg 
                width="100" 
                height="30" 
                viewBox="0 0 100 30"
                className="inline-block"
              >
                <polyline
                  points="0,15 20,10 40,13 60,5 80,10 100,0"
                  fill="none"
                  stroke={industry.winRate >= 75 ? '#10b981' : '#f59e0b'}
                  strokeWidth="2"
                />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
EOL

# Rename app/(dashboard) to app/dashboard to avoid folder name issues
if [ -d "app/(dashboard)" ]; then
  mkdir -p app/dashboard
  cp -r app/\(dashboard\)/* app/dashboard/
  rm -rf app/\(dashboard\)
fi

# Rename app/(auth) to app/auth to avoid folder name issues
if [ -d "app/(auth)" ]; then
  mkdir -p app/auth
  cp -r app/\(auth\)/* app/auth/
  rm -rf app/\(auth\)
fi

# Fix the file paths in dashboard page
if [ -f "app/dashboard/dashboard/page.tsx" ]; then
  sed -i '' 's/ActivityFeed/\/\* ActivityFeed \*\//g' app/dashboard/dashboard/page.tsx
  sed -i '' 's/StatsCards/\/\* StatsCards \*\//g' app/dashboard/dashboard/page.tsx
  sed -i '' 's/DashboardHeader/\/\* DashboardHeader \*\//g' app/dashboard/dashboard/page.tsx
  sed -i '' 's/DashboardSkeleton/\/\* DashboardSkeleton \*\//g' app/dashboard/dashboard/page.tsx
fi

# Fix the file paths in RFP detail page
if [ -f "app/dashboard/rfps/id/page.tsx" ]; then
  sed -i '' 's/RfpHeader/\/\* RfpHeader \*\//g' app/dashboard/rfps/id/page.tsx
  sed -i '' 's/RfpSummary/\/\* RfpSummary \*\//g' app/dashboard/rfps/id/page.tsx
  sed -i '' 's/RfpTabs/\/\* RfpTabs \*\//g' app/dashboard/rfps/id/page.tsx
  sed -i '' 's/RfpSectionList/\/\* RfpSectionList \*\//g' app/dashboard/rfps/id/page.tsx
  sed -i '' 's/RfpDetailSkeleton/\/\* RfpDetailSkeleton \*\//g' app/dashboard/rfps/id/page.tsx
fi

# Fix the file paths in RFP import page
if [ -f "app/dashboard/rfps/id/import/page.tsx" ]; then
  sed -i '' 's/ImportHeader/\/\* ImportHeader \*\//g' app/dashboard/rfps/id/import/page.tsx
  sed -i '' 's/FileUpload/\/\* FileUpload \*\//g' app/dashboard/rfps/id/import/page.tsx
  sed -i '' 's/ExtractedQuestions/\/\* ExtractedQuestions \*\//g' app/dashboard/rfps/id/import/page.tsx
  sed -i '' 's/ImportStats/\/\* ImportStats \*\//g' app/dashboard/rfps/id/import/page.tsx
fi

# Create a basic home page if it doesn't exist
if [ ! -f "app/page.tsx" ]; then
  cat > app/page.tsx << 'EOL'
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">RFP Management Tool</h1>
        <p className="text-gray-600 mb-8">
          Track and manage RFP responses with AI-powered matching of historical answers.
        </p>
        <Link 
          href="/dashboard/dashboard" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
EOL
fi

# Create a simple layout if it doesn't exist
if [ ! -f "app/layout.tsx" ]; then
  cat > app/layout.tsx << 'EOL'
import './globals.css';

export const metadata = {
  title: 'RFP Management Tool',
  description: 'Track and manage RFP responses with AI-powered matching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
EOL
fi

# Create a tailwind global CSS file if it doesn't exist
if [ ! -f "app/globals.css" ]; then
  cat > app/globals.css << 'EOL'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL
fi

echo "Component files created successfully!"
