import { createContext, useState } from 'react';

const ModeContext = createContext();

export function ModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ModeContext.Provider value={{ 
            darkMode, setDarkMode
        }}>
            {children}
        </ModeContext.Provider>
    );
}

export default ModeContext;