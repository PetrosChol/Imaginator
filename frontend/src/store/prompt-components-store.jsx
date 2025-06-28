import { createContext, useState } from 'react';

const PromptsContext = createContext();

export function PromptsProvider({ children }) {
    const [prompts, setPrompts] = useState({});
    const [selectedPrompt, setSelectedPrompt] = useState(null);
    const [promptPreview, setPromptPreview] = useState("");
    const [brokenPrompt, setBrokenPrompt] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [fastGeneratedPrompts, setFastGeneratedPrompts] = useState(false);

    const handleFastGeneratedPrompts = (isFast) => {
        setFastGeneratedPrompts(isFast);
        setSelectedPrompt(isFast ? 'positive_prompt' : 'main_prompt');
    };

    return (
        <PromptsContext.Provider value={{ 
            prompts, setPrompts, 
            selectedPrompt, setSelectedPrompt,
            promptPreview, setPromptPreview,
            brokenPrompt, setBrokenPrompt, 
            selectedCards, setSelectedCards,
            fastGeneratedPrompts, setFastGeneratedPrompts: handleFastGeneratedPrompts
        }}>
            {children}
        </PromptsContext.Provider>
    );
}

export default PromptsContext;




// import { createContext, useState } from 'react';

// const PromptsContext = createContext();

// export function PromptsProvider({ children }) {
//     const [prompts, setPrompts] = useState({});
//     const [selectedPrompt, setSelectedPrompt] = useState(null);
//     const [promptPreview, setPromptPreview] = useState("");
//     const [brokenPrompt, setBrokenPrompt] = useState([]);
//     const [selectedCards, setSelectedCards] = useState([]);
//     const [fastGeneratedPrompts, setFastGeneratedPrompts] = useState(false)

//     return (
//         <PromptsContext.Provider value={{ 
//             prompts, setPrompts, 
//             selectedPrompt, setSelectedPrompt,
//             promptPreview, setPromptPreview,
//             brokenPrompt, setBrokenPrompt, 
//             selectedCards, setSelectedCards,
//             fastGeneratedPrompts, setFastGeneratedPrompts
//          }}>
//             {children}
//         </PromptsContext.Provider>
//     );
// }

// export default PromptsContext;
