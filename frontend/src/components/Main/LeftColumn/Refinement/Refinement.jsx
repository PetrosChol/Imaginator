import React, { useContext, useState } from 'react';
import axios from 'axios';
import PromptsContext from "../../../../store/prompt-components-store.jsx";
import PromptsCarousel from './PromptsCarousel.jsx';
import PromptCard from './PromptCard.jsx';
import DotLoader from "react-spinners/DotLoader";

const api = axios.create({
    baseURL: "http://localhost:8000"
});

export default function Refinement() {
    const { promptPreview } = useContext(PromptsContext);
    const [refinedPrompts, setRefinedPrompts] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);  
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    async function handlePromptRefinement(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await api.post('/refine', { message: promptPreview });
            setRefinedPrompts(response.data.prompts_dict); 
        } catch (error) {
            console.error("Error refining the prompt:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const copyTextToClipboard = async () => {
        const currentPrompt = refinedPrompts[Object.keys(refinedPrompts)[currentIndex]];
        try {
            await navigator.clipboard.writeText(currentPrompt);
            alert('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const updatePrompt = (newPrompt) => {
        const keys = Object.keys(refinedPrompts);
        const updatedPrompts = { ...refinedPrompts, [keys[currentIndex]]: newPrompt };
        setRefinedPrompts(updatedPrompts);
        setIsEditing(false);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const returnedContent = Object.keys(refinedPrompts).length > 0 ? (
        <div className="dark:bg-gray-900 bg-[#FFFFFF] p-4 mb-4 rounded-md border border-gray-300 dark:border-[#131621] break-words text-gray-500">
            <div className='flex gap-2 justify-between ml-2 mb-1 mr-2'>
                <button 
                    className='dark:bg-[#06080B] bg-gray-200 dark:hover:text-white p-1 rounded-full text-gray-500 hover:text-gray-900' 
                    onClick={toggleEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                    </svg>
                </button>
                <button 
                className='bg-rose-800 hover:bg-rose-700 text-gray-100 p-1 rounded-full hover:text-white transition-colors'
                onClick={copyTextToClipboard}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M10.986 3H12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.014A2.25 2.25 0 0 1 7.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM9.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <PromptsCarousel 
                currentIndex={currentIndex} 
                setCurrentIndex={setCurrentIndex}
            >
                {Object.keys(refinedPrompts).map((key) => (
                    <PromptCard 
                        key={key} 
                        content={refinedPrompts[key]}
                        isEditing={isEditing}
                        onSave={updatePrompt}
                        onCancel={() => setIsEditing(false)}
                    />
                ))}
            </PromptsCarousel>
        </div>
    ) : (
        <div className="dark:bg-gray-900 bg-[#FFFFFF] p-4 mb-4 rounded-md border border-gray-300 dark:border-[#131621] break-words text-gray-500">
            <p className="text-gray-600 dark:text-gray-400 text-center">
                No prompts refined yet. Please refine a prompt to see results.
            </p>
        </div>
    );

    return (
        <div>
            {/* Refine Button */}
            <div className="pt-3 h-11 pb-3 px-4 text-lg text-gray-600 dark:text-gray-400 flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                <h2 className="flex-1">Refine your Prompt</h2>
                {isLoading && <DotLoader color="#881337" size={20}/>}
                {promptPreview && (
                    <button 
                        className='flex flex-row border dark:border-gray-800 items-center gap-1 dark:bg-gray-800 rounded-md hover:dark:text-white hover:dark:border-rose-800 p-1 border-gray-300 bg-gray-300 text-gray-500 hover:text-gray-700 hover:border-rose-800' 
                        onClick={handlePromptRefinement}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M1.75 2a.75.75 0 0 0 0 1.5H2V9a2 2 0 0 0 2 2h.043l-1.005 3.013a.75.75 0 0 0 1.423.474L4.624 14h6.752l.163.487a.75.75 0 0 0 1.423-.474L11.957 11H12a2 2 0 0 0 2-2V3.5h.25a.75.75 0 0 0 0-1.5H1.75Zm8.626 9 .5 1.5H5.124l.5-1.5h4.752Zm1.317-5.833a.75.75 0 0 0-.892-1.206 8.789 8.789 0 0 0-2.465 2.814L7.28 5.72a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l1.47-1.47L8.028 8.59a.75.75 0 0 0 1.228-.255 7.275 7.275 0 0 1 2.437-3.167Z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Conditional Rendering */}
            {returnedContent}
        </div>
    );
}