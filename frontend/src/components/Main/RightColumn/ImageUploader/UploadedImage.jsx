function UploadedImage({ file, previewUrl, handleFileDelete }) {
  return (
    <div className="flex p-2 border-0 border-r border-rose-800 focus:ring-0 bg-[#F5F8FE] dark:bg-[#06080B] w-full resize-none placeholder-gray-700">
      <div className="w-full flex items-center gap-2">
        {/* Image Preview */}
        <img
          className="object-contain h-16 w-16 rounded-md"
          src={previewUrl}
          alt="Preview"
        />
        
        {/* File Name */}
        <div className="flex-grow text-sm hover:text-gray-600 text-gray-400 dark:hover:text-gray-200 transition-all">
          {file.name}
        </div>
        
        {/* Delete Button */}
        <button
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          onClick={handleFileDelete}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default UploadedImage;
