import { useEffect, useState } from "react";
import ArchiveBoxXMarkIcon from "../../../../icons/ArchiveBoxXMarkIcon.jsx";
import BookmarkSquare from "../../../../icons/BookmarkSquare.jsx";

export default function EditRefinedPromptModal({ isOpen, onClose, currentPrompt, onSave, onCancel }) {
    const [editedPrompt, setEditedPrompt] = useState(currentPrompt); 

    useEffect(() => {
        setEditedPrompt(currentPrompt); 
    }, [currentPrompt]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave(editedPrompt);
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            
            {/* Modal Content */}
            <div className="relative bg-gray-900 p-4 rounded-lg shadow-lg w-5/12 z-60">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl text-gray-300">Edit Prompt</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-100 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Textarea for Editing Prompt */}
                <textarea
                    className="w-full h-32 p-2 bg-[#06080B] text-gray-200 rounded-md focus:outline-none"
                    value={editedPrompt}
                    onChange={(e) => setEditedPrompt(e.target.value)}
                ></textarea>
                <div className="mt-2 flex">
                        <div className="flex flex-1 justify-end gap-2 mt-2">
                            <button className="flex flex-row items-center gap-1 py-1 px-3 rounded-md bg-[#06080B] text-gray-500 hover:text-white transition-all" 
                            onClick={onCancel}>
                                <ArchiveBoxXMarkIcon /> 
                                Cancel
                            </button>
                            <button className="flex flex-row items-center gap-1 rounded-md py-1 px-3 bg-rose-800 hover:bg-rose-700 text-white transition-all" onClick={handleSave}>
                                <BookmarkSquare /> 
                                Save
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}
