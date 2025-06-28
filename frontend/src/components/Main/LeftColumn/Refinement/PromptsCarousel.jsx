export default function PromptsCarousel({ children, currentIndex, setCurrentIndex }) {

    const handleNext = () => {
        if (currentIndex < children.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="overflow-hidden relative"> 
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children.map((child, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-1 space-x-4">
                <button
                    onClick={currentIndex > 0 ? handlePrev : null} 
                    className={`rounded-full bg-gray-300 dark:bg-gray-700 text-gray-500 ${currentIndex === 0 ? 'cursor-default opacity-50' : 'hover:text-gray-900 dark:hover:text-gray-100'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </button>

                <button
                    onClick={currentIndex < children.length - 1 ? handleNext : null}
                    className={`rounded-full bg-gray-300 dark:bg-gray-700 text-gray-500 ${currentIndex === children.length - 1 ? 'cursor-default opacity-50' : 'hover:text-gray-900 dark:hover:text-gray-100'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

