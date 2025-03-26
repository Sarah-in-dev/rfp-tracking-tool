import React from 'react';

interface RfpDetailPageProps {
  params: {
    id: string;
  };
}

export default function RfpDetailPage({ params }: RfpDetailPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">RFP Details</h1>
      <p className="mt-2">RFP ID: {params.id}</p>
    </div>
  );
}
