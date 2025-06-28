import { useContext, useState } from "react";
import PromptsContext from "../../../../store/prompt-components-store.jsx";
import EyeIcon from "../../../../icons/EyeIcon.jsx";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard.jsx";
import ResetButton from "../ResetButton/ResetButton.jsx";
import EditButton from "../EditButton/EditButton.jsx";
import ArchiveBoxXMarkIcon from "../../../../icons/ArchiveBoxXMarkIcon.jsx";
import BookmarkSquare from "../../../../icons/BookmarkSquare.jsx";

export default function Preview() {
    const { promptPreview, setPromptPreview } = useContext(PromptsContext);
    const [isEditing, setIsEditing] = useState(false);
    const [tempPreview, setTempPreview] = useState(promptPreview);

    const handleEditClick = () => {
        setTempPreview(promptPreview);
        setIsEditing(true);
    };

    const handleSave = () => {
        setPromptPreview(tempPreview);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempPreview(promptPreview);
        setIsEditing(false);
    };

    return (
        <div>
            <div className="pt-3 h-11 pb-3 px-4 text-lg text-gray-600 dark:text-gray-400 flex gap-2 items-center">
                <EyeIcon />
                <h2 className="flex-1">Preview</h2>
            </div>
            <div className="dark:bg-gray-900 bg-[#FFFFFF] p-4 mb-4 rounded-md border border-gray-300 dark:border-[#131621] break-words text-gray-500">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">Prompt Elements:</span>
                <div className="max-h-64 lg:max-h-[200px] overflow-y-auto">
                    {isEditing ? (
                        <textarea 
                            value={tempPreview}
                            onChange={(e) => setTempPreview(e.target.value)}
                            className="w-full h-64 p-2 border dark:border-0 rounded dark:bg-[#06080B] dark:text-gray-300 focus:outline-none"
                        />
                    ) : (
                        <div>{promptPreview || "No content to display."}</div>
                    )}
                </div>
                <div className="mt-4 flex">
                    <div className="flex flex-1 gap-2">
                        {isEditing ? (
                            <>
                                <button 
                                    onClick={handleCancel} 
                                    className="flex flex-row items-center gap-1 py-1 px-3 rounded-md dark:bg-[#06080B] 
                                    bg-gray-200 hover:bg-gray-300 dark:hover:text-white hover:text-black">
                                        <ArchiveBoxXMarkIcon />
                                        Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <ResetButton />
                                <EditButton editButtonClick={handleEditClick} />
                            </>
                        )}
                    </div>
                    {isEditing ? (
                        <button 
                            onClick={handleSave} 
                            className="flex flex-row items-center gap-1 rounded-md py-1 px-3 bg-rose-800 hover:bg-rose-700 text-white">
                                <BookmarkSquare />
                                Save
                        </button>   
                    ) : (
                        <CopyToClipboard textToCopy={promptPreview} />
                    )}
                    
                </div>
            </div>
        </div>
    );
}
