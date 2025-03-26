import React from 'react';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-medium">Profile Settings</h2>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="John Smith"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input 
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="john.smith@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="RFP Manager"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="Acme Corporation"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Save Changes</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mt-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-medium">Account Settings</h2>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium mb-2">Change Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input 
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <hr className="my-4 md:hidden" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input 
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input 
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Update Password</button>
            </div>
          </div>
          
          <hr />
          
          <div>
            <h3 className="font-medium mb-2">Email Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  id="notify-rfp-updates"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="notify-rfp-updates">
                  RFP updates and activity
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  id="notify-assignments"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="notify-assignments">
                  Question assignments
                </label>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  id="notify-deadlines"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="notify-deadlines">
                  Upcoming deadlines
                </label>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Save Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
