import RightColumn from "./RightColumn/RightColumn";
import LeftColumn from "./LeftColumn/LeftColumn.jsx";
import { PromptsProvider } from "../../store/prompt-components-store.jsx"


export default function Main() {

    return(
        <PromptsProvider>
            <main className="dark:bg-stone-950 bg-stone-200 flex-1">
                <div className="p-4 max-w-7xl mx-auto">
                    <div className="lg:flex gap-4">
                        <LeftColumn />
                        <RightColumn />
                    </div>
                </div>
            </main>
        </PromptsProvider>
        
    );
}