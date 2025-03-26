import React from 'react';

export function FileUpload({ onFileUpload, file, onExtract }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      {!file ? (
        <div>
          <p className="mb-4 text-gray-500">Upload your RFP document</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
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
                {(file.size / (1024 * 1024)).toFixed(2)} MB • Uploaded just now
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
              onClick={onExtract}
            >
              Extract Questions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
