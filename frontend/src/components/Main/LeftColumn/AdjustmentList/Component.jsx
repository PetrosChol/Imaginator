import { useState } from 'react'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import WeighAdjustmentButton from "../../RightColumn/Tabs/WeightAdjustmentButton";

export default function Component({ id, cardName, cardWeight, deleteComponent, onWeightChange }) {

    const {attributes, listeners, transform, transition, setNodeRef} = useSortable({id});
    const [ mouseIsOver, setMouseIsOver ] = useState(false)

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    const handleWeightChange = (newWeight) => {
        onWeightChange(id, newWeight);
    };

    return(
        <li 
            className="p-2 dark:bg-gray-800 border dark:border-gray-900 border-gray-300 bg-gray-100 mt-4 rounded-md 
            flex items-center gap-2 mb-4 hover:border-rose-800 hover:dark:border-rose-800 transition-colors" 
            ref={setNodeRef} {...attributes} {...listeners} style={style} 
            onMouseEnter={() => {setMouseIsOver(true)}} onMouseLeave={() => {setMouseIsOver(false)}}>
                <div className="flex-1 p-1.5">{cardName}</div>
            {mouseIsOver && (
            <div className="flex items-center gap-2">
                <div className="relative inline-block text-left select-none">
                    <div>
                        <WeighAdjustmentButton
                            weight={cardWeight} 
                            onWeightChange={handleWeightChange}
                        />
                    </div>
                </div>
                <div className="relative inline-block text-left select-none">
                    <div>
                        <button className="w-full cursor-pointer" onClick={() => {deleteComponent(id)}}>
                            <div className="h-7 w-7 flex items-center justify-center text-gray-500 rounded text-sm hover:text-gray-700 hover:dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            )}
        </li>
    );
}