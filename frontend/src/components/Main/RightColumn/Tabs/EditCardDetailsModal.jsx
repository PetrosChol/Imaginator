import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const EditCardModal = ({ isOpen, onClose, cardInfo, onSave }) => {
    const [tempDetails, setTempDetails] = useState(cardInfo.details);
    const modalRef = useRef(); 

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            if (isOpen) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-gray-900 p-3 rounded-lg w-96"> 
                <h2 className="text-white mb-4">Edit Card Details</h2>
                <textarea
                    className="w-full h-28 p-2 rounded-md bg-[#06080B] text-gray-200 focus:outline-none"
                    value={tempDetails}
                    onChange={(e) => setTempDetails(e.target.value)}
                />
                <div className="mt-4 flex justify-end gap-2">
                    <button
                        className="flex flex-row items-center gap-1 py-1 px-3 rounded-md bg-[#06080B] text-gray-500 hover:text-white transition-all"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="flex flex-row items-center gap-1 rounded-md py-1 px-3 bg-rose-800 hover:bg-rose-700 text-white transition-all"
                        onClick={() => onSave(tempDetails)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>,
        document.body 
    );
};

export default EditCardModal;
