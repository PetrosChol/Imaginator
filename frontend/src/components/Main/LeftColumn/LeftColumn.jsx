import Preview from "./Preview/Preview";
import AdjustmentList from "./AdjustmentList/AdjustmentList";
import Refinement from "./Refinement/Refinement";

export default function LeftColumn() {
    return(
        <div className="lg:w-1/3">
            <div className="sm:sticky sm:top-2">
                <Refinement />
                <Preview />
                <AdjustmentList />
            </div>

        </div>
    );
}