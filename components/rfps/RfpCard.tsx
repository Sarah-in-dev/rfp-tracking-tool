import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface RfpCardProps {
  id: string;
  title: string;
  client: string;
  progress: number;
  dueDate: string;
  status: 'active' | 'draft' | 'completed' | 'lost';
  questionCount: number;
}

export function RfpCard({
  id,
  title,
  client,
  progress,
  dueDate,
  status,
  questionCount
}: RfpCardProps) {
  const statusColors = {
    active: 'bg-emerald-50 text-emerald-600',
    draft: 'bg-amber-50 text-amber-600',
    completed: 'bg-blue-50 text-blue-600',
    lost: 'bg-gray-50 text-gray-600'
  };
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-bold text-base truncate">{title}</h3>
        <p className="text-sm text-gray-500">Client: {client}</p>
        
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-500">{progress}% Complete</p>
        
        <p className="text-sm text-gray-500">Due: {dueDate}</p>
        
        <Badge variant="outline" className={statusColors[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t flex justify-between">
        <span className="text-sm text-gray-500">{questionCount} Questions</span>
        <Link href={`/rfps/${id}`} className="text-blue-600 text-sm">
          View →
        </Link>
      </CardFooter>
    </Card>
  );
}
