import React from 'react';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="RFP Manager"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your Company"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Complete Setup
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <Link href="/dashboard/dashboard" className="text-sm text-blue-600 hover:underline">
            Skip for now
          </Link>
        </div>
      </div>
    </div>
  );
}
