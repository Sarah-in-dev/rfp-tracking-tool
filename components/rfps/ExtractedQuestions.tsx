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
