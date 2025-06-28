import SubmitThoughts from "./SubmitThoughts/SubmitThoughts";
import DisplaySelectedPrompt from "./DisplaySelectedPrompt/DisplaySelectedPrompt";
import Tabs from "./Tabs/Tabs";
import ImageUploader from "./ImageUploader/ImageUploader";

export default function RightColumn() {
    return(
        <div className="lg:w-2/3">
            <div className="pt-3 sm:h-11 pb-3 px-4 text-lg dark:text-gray-400 text-gray-600 flex gap-2 items-center">
                <h1 className="flex-1">Prompt Builder</h1>
            </div>
            <div className="dark:bg-gray-900 bg-[#FFFFFF] border border-gray-300 dark:border-[#131621] rounded-md">
                <div className="p-4 border-b border-gray-300 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <SubmitThoughts />
                    <ImageUploader />
                </div>
                <div className="p-4 border-b border-gray-300 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-4">
                        <DisplaySelectedPrompt />
                    </div>
                </div>
                <Tabs />
            </div>
        </div>
    );
}