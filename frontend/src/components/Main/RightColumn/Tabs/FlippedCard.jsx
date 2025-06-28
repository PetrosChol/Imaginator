import { useState } from "react";
import WeighAdjustmentButton from "./WeightAdjustmentButton";

const FlippedCard = ({ cardInfo, isSelected, onClick, onWeightChange, onDetailsChange, showEditControls }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDetails, setEditedDetails] = useState(cardInfo.details);

  const handleSaveClick = (e) => {
    e.stopPropagation();
    onDetailsChange(editedDetails);
    setIsEditing(false);
  };

  const handleCancelClick = (e) => {
    e.stopPropagation();
    setEditedDetails(cardInfo.details);
    setIsEditing(false);
  };

  return (
    <div 
      className={`group w-48 h-56 overflow-hidden cursor-pointer rounded-md relative ${isSelected ? "border-2 border-rose-800" : "border border-zinc-400 dark:border-zinc-700"} shadow-md`} 
      onClick={onClick}
    >
      <div 
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isSelected ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
      >
        <div className="absolute bg-zinc-400/30 dark:bg-zinc-800/30 inset-0 backdrop-blur-xl">
          <div className={`absolute bottom-0 py-1 px-2 ${!isSelected ? "group-hover:text-transparent text-gray-400 transition-all" : "text-transparent"}`}>{cardInfo.name}</div>
        </div>
        <div className="absolute inset-0 h-full w-full bg-black/10 dark:bg-black/80 text-center text-gray-600 dark:text-gray-400 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center p-2">
            {isEditing ? (
              <>
                <textarea
                  className="w-full h-40 p-1 text-sm bg-zinc-400/0 dark:bg-black/0 text-gray-600 dark:text-gray-200 resize-none focus:outline-none"
                  value={editedDetails}
                  onChange={(e) => setEditedDetails(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="flex w-full mt-2 justify-between">
                    <button     
                        className="px-2 py-1 text-xs text-gray-400 hover:text-white"
                        onClick={handleCancelClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <button 
                        className="px-2 py-1 text-xs text-gray-400 hover:text-white"
                        onClick={handleSaveClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
              </>
            ) : (
              <p className="text-sm">{cardInfo.details}</p>
            )}
            {isSelected && showEditControls && !isEditing && (
              <>
                <div className="absolute top-2 left-2" onClick={(e) => { e.stopPropagation(); onWeightChange(cardInfo.weight); }}>
                  <WeighAdjustmentButton
                    weight={cardInfo.weight ?? 1}
                    onWeightChange={(newWeight) => onWeightChange(cardInfo.id, newWeight)}
                  />
                </div>
                <button className="absolute bottom-2 right-2 ..." onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                    <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippedCard;
