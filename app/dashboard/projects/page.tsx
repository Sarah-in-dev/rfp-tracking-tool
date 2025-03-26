import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">+ New Project</button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RFPs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">State Government IT Services</td>
              <td className="px-6 py-4 whitespace-nowrap">NY State Government</td>
              <td className="px-6 py-4 whitespace-nowrap">Government</td>
              <td className="px-6 py-4 whitespace-nowrap">3</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">View</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Edit</a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Software Solutions</td>
              <td className="px-6 py-4 whitespace-nowrap">Acme Corporation</td>
              <td className="px-6 py-4 whitespace-nowrap">Technology</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">View</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Edit</a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Cloud Migration</td>
              <td className="px-6 py-4 whitespace-nowrap">TechCorp Inc.</td>
              <td className="px-6 py-4 whitespace-nowrap">Technology</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Draft</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">View</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
