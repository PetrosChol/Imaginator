import PencilSquareIcon from "../../../../icons/PencilSquareIcon";

const EditPromptButton = ({editButtonClick}) => {
  return (
    <div className="flex justify-end mt-2">
        <button
            className="flex items-center gap-1 text-gray-500 hover:text-rose-800 transition-all"
            onClick={editButtonClick}
        >
            <PencilSquareIcon />
            <span>Edit</span>
        </button>
    </div>
  )
}

export default EditPromptButton



