import { useContext } from "react";
import PromptsContext from "../../../../store/prompt-components-store.jsx";
import DisplayPromptsTabs from "./DisplayPromptsTabs.jsx";
import DisplayPromptsTabButton from "./DisplayPromptsTabButton.jsx";
import BreakPromptButton from "./BreakPromptButton.jsx";
import CopyPromptButton from "./CopyPromptButton.jsx";


export default function DisplaySelectedPrompt() {
    const { prompts, selectedPrompt, setSelectedPrompt, fastGeneratedPrompts } = useContext(PromptsContext);

    const handleClick = (promptType) => {
        setSelectedPrompt(promptType);
    };

    if (!prompts || Object.keys(prompts).length === 0) {
        return (
            <div className="p-4">
                <p className="text-gray-500">No Prompts generated yet...</p>
            </div>
        );
    }

    const tabContent = selectedPrompt && (
        <>
        <div className="border-gray-600 flex px-1 mb-2 gap-3 text-sm flex-nowrap sm:flex-wrap overflow-hidden select-none">
            <CopyPromptButton textToCopy={prompts[selectedPrompt]}/>
            <BreakPromptButton /> 
        </div>
        <div className="h-28 overflow-y-auto p-1 rounded-lg">
            <p className="text-gray-500 dark:text-gray-300">{prompts[selectedPrompt]}</p>
        </div>
        </>

    );

    return (
        <div className="p-0">
            <DisplayPromptsTabs
                tabs={
                    <>
                        {fastGeneratedPrompts ? (
                            <DisplayPromptsTabButton isSelected={selectedPrompt === 'positive_prompt'} onClick={() => handleClick('positive_prompt')}>
                                Positive Prompt
                            </DisplayPromptsTabButton>    
                        ) : (
                            <>
                            <DisplayPromptsTabButton isSelected={selectedPrompt === 'main_prompt'} onClick={() => handleClick('main_prompt')}>
                                Original
                            </DisplayPromptsTabButton>
                            <DisplayPromptsTabButton isSelected={selectedPrompt === 'hyper_detailed_prompt'} onClick={() => handleClick('hyper_detailed_prompt')}>
                                Hyper Detailed
                            </DisplayPromptsTabButton>
                            <DisplayPromptsTabButton isSelected={selectedPrompt === 'composition_and_mood_prompt'} onClick={() => handleClick('composition_and_mood_prompt')}>
                                Composition & Mood
                            </DisplayPromptsTabButton>
                            <DisplayPromptsTabButton isSelected={selectedPrompt === 'technical_quality_prompt'} onClick={() => handleClick('technical_quality_prompt')}>
                                Technical & Quality
                            </DisplayPromptsTabButton>
                            </>
                        )}
                        

                        <DisplayPromptsTabButton isSelected={selectedPrompt === 'negative_prompt'} onClick={() => handleClick('negative_prompt')}>
                            Negative Prompt
                        </DisplayPromptsTabButton>
                    </>
                } 
                >
                {tabContent}
            </DisplayPromptsTabs>
        </div>
    );
}

