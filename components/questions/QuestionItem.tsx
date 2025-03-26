'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MatchScore } from '@/components/questions/MatchScore';

interface QuestionItemProps {
  id: string;
  text: string;
  status: 'answered' | 'draft' | 'needs-answer';
  tags: string[];
  matchScore: number;
  answerText?: string;
  answerSource?: string;
}

export function QuestionItem({
  id,
  text,
  status,
  tags,
  matchScore,
  answerText,
  answerSource
}: QuestionItemProps) {
  const [currentStatus, setCurrentStatus] = useState(status);
  
  const statusColors = {
    'answered': 'bg-emerald-50 text-emerald-600',
    'draft': 'bg-amber-50 text-amber-600',
    'needs-answer': 'bg-red-50 text-red-600'
  };
  
  const handleApprove = async () => {
    // In a real implementation, this would call your API
    // const response = await fetch(`/api/questions/${id}/approve`, {
    //   method: 'POST'
    // });
    
    setCurrentStatus('answered');
  };
  
  return (
    <Card className="mb-6 border-l-4 border-l-blue-600">
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <h3 className="font-bold text-base">{text}</h3>
          <div className="flex mt-2 space-x-2">
            <Badge variant="outline" className={statusColors[currentStatus]}>
              {currentStatus === 'answered' ? 'Answered' : 
               currentStatus === 'draft' ? 'Draft' : 'Needs Answer'}
            </Badge>
            
            {tags.map(tag => (
              <Badge key={tag} variant="outline" className="bg-gray-50 text-gray-600">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <MatchScore score={matchScore} />
      </CardHeader>
      
      <CardContent>
        {(currentStatus === 'answered' || currentStatus === 'draft') && (
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm">{answerText}</p>
            
            {answerSource && (
              <p className="text-xs text-gray-500 mt-4">
                Based on answer from {answerSource}
              </p>
            )}
            
            <div className="flex justify-end space-x-3 mt-4">
              <Button variant="outline" size="sm">Edit</Button>
              
              {currentStatus === 'draft' ? (
                <Button onClick={handleApprove} size="sm">Approve</Button>
              ) : null}
              
              <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                Request Revision
              </Button>
            </div>
          </div>
        )}
        
        {currentStatus === 'needs-answer' && (
          <div className="bg-red-50 p-4 rounded-md border border-red-100 flex flex-col items-center text-center">
            <p className="text-red-600 mb-4">No answer provided yet. Click "Generate Answer" to use AI to create a draft based on historical responses.</p>
            
            <div className="flex space-x-3">
              <Button className="bg-red-600 hover:bg-red-700">Generate Answer</Button>
              <Button variant="outline">Write Answer Manually</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
