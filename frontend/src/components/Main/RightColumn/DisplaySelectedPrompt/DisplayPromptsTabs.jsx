export default function DisplayPromptsTabs({ children, tabs }) {
    return(
        <>
            <ul className="flex text-sm space-x-3">
                {tabs}
            </ul>
            <div className="border mt-3 border-rose-800 bg-[#F5F8FE] dark:bg-[#06080B] p-2 pb-3 rounded-md">
                {children}
            </div>
        </>
    );
}
