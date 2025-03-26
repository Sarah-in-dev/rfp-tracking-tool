import React from 'react';

interface SectionPageProps {
  params: {
    id: string;
    sectionId: string;
  };
}

export default function SectionPage({ params }: SectionPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">RFP Section</h1>
      <p className="mt-2">RFP ID: {params.id}</p>
      <p className="mt-2">Section ID: {params.sectionId}</p>
    </div>
  );
}
