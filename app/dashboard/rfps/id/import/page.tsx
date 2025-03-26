'use client';

import React from 'react';

interface ImportPageProps {
  params: {
    id: string;
  };
}

export default function ImportPage({ params }: ImportPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">RFP Import</h1>
      <p className="mt-2">RFP ID: {params?.id}</p>
    </div>
  );
}
