'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ImportPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [extractedQuestions, setExtractedQuestions] = useState([]);
  const [extractionStats, setExtractionStats] = useState({
    totalQuestions: 0,
    sectionsDetected: 0,
    confidence: 0
  });
  
  const handleFileUpload = (file: File) => {
    setFile(file);
    // In a real implementation, you would send this to your API
    // and process it, then update the state with the results
  };
  
  const handleExtractQuestions = async () => {
    // Simulating the extraction process
    setCurrentStep(2);
    
    // This would call your API endpoint to process the document
    // const response = await fetch(`/api/rfps/${params.id}/extract`, {
    //   method: 'POST',
    //   body: formData
    // });
    
    // For demo purposes, we'll set some mock data
    setExtractedQuestions([
      { id: 1, text: 'Describe your company background and experience...', section: 'Company' },
      { id: 2, text: 'Detail your approach to government IT modernization...', section: 'Technical' },
      { id: 3, text: 'Explain your cloud security measures for government...', section: 'Technical' },
    ]);
    
    setExtractionStats({
      totalQuestions: 127,
      sectionsDetected: 5,
      confidence: 98
    });
  };
  
  const handleContinue = () => {
    // In a real implementation, this would save the extracted questions
    // and redirect to the organization step
    router.push(`/rfps/${params.id}/organize`);
  };
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-1">RFP Import</p>
        <h1 className="text-2xl font-bold">Import Questions</h1>
        
        <div className="flex items-center mt-6">
          <div className="flex items-center text-blue-600">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
              1
            </div>
            <span className="ml-2 font-medium">Upload</span>
          </div>
          
          <div className="w-16 h-1 mx-2 bg-blue-600"></div>
          
          <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="ml-2 font-medium">Extract</span>
          </div>
          
          <div className="w-16 h-1 mx-2 bg-gray-200"></div>
          
          <div className="flex items-center text-gray-400">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
              3
            </div>
            <span className="ml-2 font-medium">Organize</span>
          </div>
          
          <div className="w-16 h-1 mx-2 bg-gray-200"></div>
          
          <div className="flex items-center text-gray-400">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
              4
            </div>
            <span className="ml-2 font-medium">Match</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border p-6">
        {currentStep === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-4">Uploaded Document</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {!file ? (
                <div>
                  <p className="mb-4 text-gray-500">Upload your RFP document</p>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => setFile(new File([], "document.pdf"))}
                  >
                    Select File
                  </button>
                  <p className="mt-2 text-sm text-gray-500">
                    Supports PDF, DOCX, and Excel files
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="text-gray-500">PDF</span>
                    </div>
                    <div className="ml-4 text-left">
                      <p className="font-bold">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        4.2 MB • Uploaded just now
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="border border-gray-300 px-4 py-2 rounded">
                      View File
                    </button>
                    <button className="border border-gray-300 px-4 py-2 rounded">
                      Replace
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                      onClick={handleExtractQuestions}
                    >
                      Extract Questions
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <>
            <h2 className="text-lg font-bold mb-4">Extracted Questions</h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-100 border-b flex">
                <div className="w-16 font-bold">#</div>
                <div className="flex-1 font-bold">Question</div>
                <div className="w-48 font-bold">Section</div>
              </div>
              
              <div className="divide-y">
                {extractedQuestions.map((question: any, index) => (
                  <div key={question.id || index} className="p-4 flex items-center bg-white">
                    <div className="w-16">{question.id || index + 1}</div>
                    <div className="flex-1">{question.text}</div>
                    <div className="w-48">{question.section}</div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 text-center text-gray-500">
                + 124 more questions extracted
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">{extractionStats.totalQuestions}</p>
                    <p className="text-gray-500">Total Questions</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✓
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">{extractionStats.sectionsDetected}</p>
                    <p className="text-gray-500">Sections Detected</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✓
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">{extractionStats.confidence}%</p>
                    <p className="text-gray-500">Extraction Confidence</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✓
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-8">
              <button 
                className="px-4 py-2 border border-gray-300 rounded"
                onClick={() => setCurrentStep(1)}
              >
                Edit Extracted Questions
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleContinue}
              >
                Continue to Organize
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
