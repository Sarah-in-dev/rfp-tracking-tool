import React from 'react';

export default function RfpDetailPage({ params }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">RFP Details</h1>
      <p className="mt-2">RFP ID: {params?.id}</p>
    </div>
  );
}
