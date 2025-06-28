import { useState, useContext } from "react";
import axios from 'axios';
import { DotLoader } from 'react-spinners'
import PromptsContext from "../../../../store/prompt-components-store.jsx"


const api = axios.create(
    {
        baseURL: "http://localhost:8000"
    }
)

export default function SubmitThoughts() {

    const { setPrompts, setFastGeneratedPrompts } = useContext(PromptsContext);
    const [userIdea, setUserIdea] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    async function handleSubmit(e) {
        setIsLoading(true);
        setPrompts("");
        e.preventDefault();
        
        const endpoint = isChecked ? '/imagine-fast' : '/imagine';
        if (isChecked) {
            setFastGeneratedPrompts(true)
        } else {
            setFastGeneratedPrompts(false)
        }
    
        try {
            const response = await api.post(endpoint, { message: userIdea });
            if (response.status === 200) {
                setPrompts(response.data.answer);
            } else {
                setErrorMessage("Failed to generate prompts. Please try again.");
            }
        } catch (error) {
            console.error('Error posting idea:', error);
            if (error.response) {
                setErrorMessage(`Error: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                setErrorMessage("No response from the server. Please check your network.");
            } else {
                setErrorMessage("Error sending request.");
            }
        } finally {
            setIsLoading(false);
        }
    }
    
    function handleCheckBoxClick() {
        setIsChecked(prev => !prev);
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


    return (
        <div>
            <div className="flex items-center mb-2">
                
                <button 
                    className={`text-gray-500 transition-all ${isChecked ? "text-rose-800 hover:text-rose-600" : "hover:text-gray-700 hover:dark:text-gray-200"}`}
                    onClick={handleCheckBoxClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="text-gray-500 ml-2">Your Thoughts...</div>
            </div>
            <div
                className={`border ${
                    isFocused ? 'border-rose-800' : 'border-gray-300 dark:border-gray-600'
                } rounded-md h-32 flex flex-rows bg-white dark:bg-gray-800 overflow-hidden mb-4 transition-all`}
            >
                <textarea
                    className={`p-2 border-0 border-r text-gray-700 dark:text-gray-200 ${
                        isFocused ? 'border-rose-800 focus:outline-none' : 'border-gray-300 dark:border-gray-600 focus:ring-0'
                    } bg-[#F5F8FE] dark:bg-[#06080B] w-full resize-none dark:placeholder-gray-700 placeholder-gray-400`}
                    value={userIdea}
                    placeholder="Type your thoughts here..."
                    onChange={(e) => setUserIdea(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                ></textarea>

                <button
                    className={`px-2 ${
                        userIdea.trim()
                            ? 'text-rose-800 hover:text-white hover:bg-rose-800 cursor-pointer'  
                            : 'dark:text-gray-600 text-gray-400 dark:bg-gray-700 cursor-default'
                    } transition-none`}
                    type="button"
                    onClick={handleSubmit}
                    disabled={!userIdea.trim()} 
                >
                    Submit
                </button>
            </div>
            {isLoading && (
                <div className="mt-5 flex space-x-3">
                    <div className="text-gray-700 dark:text-gray-400 text-balance">Generating Prompts...</div>
                    <DotLoader color="#881337" size={20} />
                </div>
            )}
            {errorMessage && (
                <div className="text-rose-700 text-sm mt-2">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}