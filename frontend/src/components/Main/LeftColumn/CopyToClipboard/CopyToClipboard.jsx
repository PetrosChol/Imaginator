import ClipBoardIcon from "../../../../icons/ClipBoardIcon.jsx";

const CopyToClipboard = ({ textToCopy }) => {
  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      className="flex flex-row items-center gap-1 rounded-md py-1 px-3 bg-rose-800 hover:bg-rose-700 text-white"
      onClick={() => copyTextToClipboard(textToCopy)}  
    >
      <ClipBoardIcon />
      COPY
    </button>
  );
};

export default CopyToClipboard;




