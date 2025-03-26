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
