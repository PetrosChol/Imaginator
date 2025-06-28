import DarkModeToggle from "./DarkModeToggle.jsx";

export default function Header({ isDark, toggleTheme }) {
    return(
        <div className="hidden sm:block dark:bg-stone-950 bg-stone-200 select-none">
            <div className="pl-2 pr-4 py-2 max-w-7xl mx-auto my-4 flex">
                <div className="flex flex-1">
                    <div className="flex items-center cursor-pointer">
                        <span className="uppercase mt-1 font-bold font-display text-2xl text-black dark:text-gray-100">IMAGINATOR</span>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex items-center text-xl">
                        <span className="ml-6">
                            <span className="dark:text-gray-100 text-black">Bring your Imagination to life...</span>
                        </span>
                    </div>
                    <DarkModeToggle isDark={isDark} toggleTheme={toggleTheme}/>
                </div>
            </div>
        </div>
    );
}