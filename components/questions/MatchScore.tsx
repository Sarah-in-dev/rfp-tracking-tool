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
