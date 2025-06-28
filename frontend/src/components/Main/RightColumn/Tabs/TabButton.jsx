export default function TabButton({ isSelected, onClick, children }) {
    return (
      <button
        className={`border flex items-center gap-1 
            ${isSelected ? 'border-rose-800 bg-rose-800 text-slate-100 hover:bg-rose-600' : 
                'border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#131624] text-gray-500 dark:text-gray-400 hover:text-[#DB0B36] dark:hover:text-[#DB0B36]'} 
                px-2 py-1 rounded-md min-w-fit cursor-pointer drop-shadow transition-all`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  