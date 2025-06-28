export default function TabContentButton({ subTab, icon, onClick, isSelected }) {
  return (
    <button
      className={`${isSelected ? 
        'dark:text-white text-black' : 'text-gray-500 hover:text-rose-800'} 
        px-1 py-1 flex items-center gap-1 rounded-md min-w-fit cursor-pointer`}
      onClick={onClick} 
    >
      {icon}
      {subTab}
    </button>
  );
}
