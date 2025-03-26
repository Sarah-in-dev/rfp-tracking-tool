'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
//import { ImportHeader } from '@/components/rfps/ImportHeader';
//import { FileUpload } from '@/components/rfps/FileUpload';
//import { ExtractedQuestions } from '@/components/rfps/ExtractedQuestions';
//import { ImportStats } from '@/components/rfps/ImportStats';

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
      {/* <ImportHeader 
        rfpId={params.id}
        currentStep={currentStep}
      /> */}
      
      <div className="bg-white rounded-lg border p-6">
        {currentStep === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-4">Uploaded Document</h2>
            {/* <FileUpload 
              onFileUpload={handleFileUpload}
              file={file}
              onExtract={handleExtractQuestions}
            /> */}
          </div>
        )}
        
        {currentStep === 2 && (
          <>
            <h2 className="text-lg font-bold mb-4">Extracted Questions</h2>
            {/* <ExtractedQuestions questions={extractedQuestions} />*/}
            
            <div className="grid grid-cols-3 gap-6 mt-6">
             {/* <ImportStats stats={extractionStats} /> */}
            </div>
            
            <div className="flex justify-end space-x-4 mt-8">
              <button 
                className="btn btn-outline"
                onClick={() => setCurrentStep(1)}
              >
                Edit Extracted Questions
              </button>
              <button 
                className="btn btn-primary"
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
