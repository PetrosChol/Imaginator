import { useContext, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import PromptsContext from "../../../../store/prompt-components-store.jsx"
import DotLoader from "react-spinners/DotLoader";

const api = axios.create(
    {
        baseURL: "http://localhost:8000"
    }
)

function BreakPromptButton() {

    const { prompts, selectedPrompt, setBrokenPrompt } = useContext(PromptsContext);
    const [isLoading, setIsLoading] = useState(false);

    async function handleBreakPrompt(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const breakResponse = await api.post('/breakdown', { message: prompts[selectedPrompt] });
            const transformedComponents = breakResponse.data.components.map((component) => ({
                id: uuidv4(),
                name: component,
                details: component,  
                weight: 1  
            }));
            setBrokenPrompt(prevComponents => [...prevComponents, ...transformedComponents]);
        } catch (error) {
            console.error("Error breaking down the prompt:", error);
        } finally {
            setIsLoading(false);
        }
    }


  return (
    <div className="flex justify-end mt-2">
        <button
            className="flex items-center gap-1 text-gray-500 hover:text-rose-800 transition-all"
            onClick={handleBreakPrompt}
        >
            {/* <BeakerIcon /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M7.628 1.349a.75.75 0 0 1 .744 0l1.247.712a.75.75 0 1 1-.744 1.303L8 2.864l-.875.5a.75.75 0 0 1-.744-1.303l1.247-.712ZM4.65 3.914a.75.75 0 0 1-.279 1.023L4.262 5l.11.063a.75.75 0 0 1-.744 1.302l-.13-.073A.75.75 0 0 1 2 6.25V5a.75.75 0 0 1 .378-.651l1.25-.714a.75.75 0 0 1 1.023.279Zm6.698 0a.75.75 0 0 1 1.023-.28l1.25.715A.75.75 0 0 1 14 5v1.25a.75.75 0 0 1-1.499.042l-.129.073a.75.75 0 0 1-.744-1.302l.11-.063-.11-.063a.75.75 0 0 1-.28-1.023ZM6.102 6.915a.75.75 0 0 1 1.023-.279l.875.5.875-.5a.75.75 0 0 1 .744 1.303l-.869.496v.815a.75.75 0 0 1-1.5 0v-.815l-.869-.496a.75.75 0 0 1-.28-1.024ZM2.75 9a.75.75 0 0 1 .75.75v.815l.872.498a.75.75 0 0 1-.744 1.303l-1.25-.715A.75.75 0 0 1 2 11V9.75A.75.75 0 0 1 2.75 9Zm10.5 0a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.378.651l-1.25.715a.75.75 0 0 1-.744-1.303l.872-.498V9.75a.75.75 0 0 1 .75-.75Zm-4.501 3.708.126-.072a.75.75 0 0 1 .744 1.303l-1.247.712a.75.75 0 0 1-.744 0L6.38 13.94a.75.75 0 0 1 .744-1.303l.126.072a.75.75 0 0 1 1.498 0Z" clipRule="evenodd" />
            </svg>
            <span className="mr-2">Break</span>
            {isLoading && <DotLoader color="#881337" size={20}/>}
        </button>
    </div>
  )
}

export default BreakPromptButton