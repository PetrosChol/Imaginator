import { useContext } from "react";
import PromptsContext from "../../../../store/prompt-components-store.jsx" 
import ArrowPathIcon from "../../../../icons/ArrowPathIcon.jsx";

const ResetButton = () => {

    const {setBrokenPrompt, setSelectedCards, setPromptPreview} = useContext(PromptsContext);

    function handleResetButtonClick() {
        setBrokenPrompt([])
        setSelectedCards([])
        setPromptPreview("")
    }

  return (
    <button 
        className="flex flex-row items-center gap-1 py-1 px-3 rounded-md dark:bg-[#06080B] bg-gray-200 hover:bg-gray-300 dark:hover:text-white hover:text-black"
        onClick={handleResetButtonClick}
    >
        <ArrowPathIcon />
        Reset
    </button>
  )
}

export default ResetButton