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
