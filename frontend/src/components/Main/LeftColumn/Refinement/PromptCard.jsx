import React, { useState, useEffect } from 'react';

const PromptCard = ({ content, isEditing, onSave, onCancel }) => {
  const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    setEditedContent(content);
  }, [content]);

  const handleSave = () => {
    onSave(editedContent);
  };

  const handleCancel = () => {
    setEditedContent(content);
    onCancel();
  };

  return (
    <div className="h-56 overflow-y-auto p-4 m-1 bg-[#F5F8FE] dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700">
      {isEditing ? (
        <div className="flex flex-col h-full">
          <textarea
            className="flex-grow h-56 p-2 mb-2 bg-[#F5F8FE] dark:bg-gray-800 text-gray-600 dark:text-gray-300 focus:outline-none"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              className="text-gray-700 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-200"
              onClick={handleCancel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <button
              className="text-gray-700 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-200"
              onClick={handleSave}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-600 dark:text-gray-400">
          {content}
        </div>
      )}
    </div>
  );
};

export default PromptCard;