import { useContext } from "react";
import PromptComponents from "./PromptComponents.jsx";
import PromptsContext from "../../../../store/prompt-components-store.jsx"

export default function AdjustmentList() {

    const {brokenPrompt, setPromptPreview } = useContext(PromptsContext)

    function handleSyncButtonClick() {
        const previewText = brokenPrompt.map(item => {
            const epsilon = 0.0001;
            return (Math.abs(item.weight - 1.0) > epsilon) ? `(${item.details}:${item.weight.toFixed(1)})` : item.details;
        }).join(", ");
        setPromptPreview(previewText);
    }

    return (
        <div>
            <div className="pt-3 h-11 pb-3 px-4 text-lg dark:text-gray-400 text-gray-600 flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                </svg>
                <h2 className="flex-1">Adjust & Sync your Prompt</h2>
                {brokenPrompt && brokenPrompt.length > 0 &&
                (<div className="flex">
                    <button 
                    className="flex flex-row border dark:border-gray-800 items-center gap-1 dark:bg-gray-800 rounded-md hover:dark:text-white hover:dark:border-rose-800 p-1
                    border-gray-300 bg-gray-300 text-gray-500 hover:text-gray-700 hover:border-rose-800"
                    onClick={handleSyncButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>)}
            </div>
            <div className="dark:bg-gray-900 bg-[#FFFFFF] px-4 py-0 mb-4 rounded-md border border-gray-300 dark:border-[#131621] break-words text-gray-500 select-none">
                <div className="max-h-96 lg:max-h-[800px] overflow-y-auto">
                    {brokenPrompt.length > 0 ? (
                        <PromptComponents promptComponents={brokenPrompt} />
                    ) : (
                        <div className="py-2">Craft a Prompt to get started...</div>
                    )}
                </div>

            </div>
        </div>
    );
}