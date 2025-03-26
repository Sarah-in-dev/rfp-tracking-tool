export default function QuestionsPage({ 
  params 
}: { 
  params: { id: string; sectionId: string } 
}) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-1">RFP Title &gt; Section Name</p>
        <h1 className="text-2xl font-bold">Questions & Answers</h1>
      </div>
      
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Questions & Answers</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded">Import Questions</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">AI Match Answers</button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <select className="p-2 bg-white border border-gray-300 rounded">
            <option>Status: All</option>
            <option>Status: Answered</option>
            <option>Status: Draft</option>
            <option>Status: Needs Answer</option>
          </select>
        </div>
        
        <div>
          <select className="p-2 bg-white border border-gray-300 rounded">
            <option>Tags: All</option>
            <option>Tags: Technical</option>
            <option>Tags: Security</option>
            <option>Tags: Compliance</option>
          </select>
        </div>
        
        <div>
          <select className="p-2 bg-white border border-gray-300 rounded">
            <option>Sort: Match Score (High to Low)</option>
            <option>Sort: Match Score (Low to High)</option>
            <option>Sort: Recently Updated</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-lg">Describe your experience with government IT modernization projects.</h3>
              <div className="flex mt-2 space-x-2">
                <span className="inline-flex px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  Answered
                </span>
                <span className="inline-flex px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  Technical
                </span>
                <span className="inline-flex px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                  Government
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs text-gray-500">Match Score</p>
              <p className="text-xl font-bold">95%</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p>Our team has successfully completed over 20 government IT modernization projects in the past 5 years, including the New Jersey DMV Migration (2022-2023), Federal Reserve Legacy System Upgrade (2021-2022), and Pennsylvania Department of Transportation Portal Redesign (2023).</p>
            <p className="text-xs text-gray-500 mt-2">
              Based on answer from Federal Reserve RFP (2023)
            </p>
            <div className="flex justify-end space-x-3 mt-4">
              <button className="px-4 py-1 border border-gray-300 rounded text-sm">Edit</button>
              <button className="px-4 py-1 bg-blue-600 text-white rounded text-sm">Approve</button>
              <button className="px-4 py-1 border border-red-500 text-red-500 rounded text-sm">
                Request Revision
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
