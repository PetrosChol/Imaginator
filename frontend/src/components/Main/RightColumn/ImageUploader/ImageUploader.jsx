import axios from 'axios';
import { useState, useContext } from 'react';
import PromptsContext from "../../../../store/prompt-components-store.jsx"
import { DotLoader } from 'react-spinners'
import UploadedImage from './UploadedImage';

const api = axios.create({
  baseURL: "http://localhost:8000"
});

const ImageUploader = () => {

  const { setPrompts, setFastGeneratedPrompts } = useContext(PromptsContext);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);  
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();  
    
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      setIsLoading(true);
      setPrompts("");
      setErrorMessage("");

      const endpoint = isChecked ? '/mini-imager' : '/imager';
        if (isChecked) {
            setFastGeneratedPrompts(true)
        } else {
            setFastGeneratedPrompts(false)
        }

      try {
        const response = await api.post(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        });
        if (response.status === 200) {
          console.log('File uploaded successfully:', response.data);
          setPrompts(response.data.answer)
        }
      } catch (error) {
        if (error.response) {
          console.error('Error uploading file:', error.response.data);
          setErrorMessage(`Error: ${error.response.status} - ${error.response.data.message}`);
        } else if (error.request) {
          console.error('Error uploading file:', error.request);
          setErrorMessage('No response from the server. Please check your network.');
        } else {
          console.error('Error setting up the request:', error.message);
          setErrorMessage('Error sending request.');
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("No file selected! Please choose an image to upload.");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));  
    }
  };

  const handleFileDelete = (e) => {
    e.stopPropagation(); 
    setFile(null);
  };

  function handleCheckBoxClick() {
      setIsChecked(prev => !prev);
  }



  return (

    <div>
      <div className="flex items-center mb-2">
        <button 
            className={`text-gray-500 transition-all ${isChecked ? "text-rose-800 hover:text-rose-600" : "hover:text-gray-700 hover:dark:text-gray-200"}`}
            onClick={handleCheckBoxClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z" clipRule="evenodd" />
            </svg>
        </button>
        <div className="text-gray-500 ml-2">Upload your Image...</div>
      </div>
      
      <div
        className={`border ${file ? 'border-rose-800' : 'border-gray-300 dark:border-gray-600'} 
        rounded-md h-32 flex bg-[#F5F8FE] dark:bg-[#06080B] overflow-hidden mb-4 cursor-pointer transition-all`}
        onClick={() => document.getElementById('file-input').click()}
      >
        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
        {file ? (
          <UploadedImage file={file} previewUrl={previewUrl} handleFileDelete={handleFileDelete}/>
        ) : (
          <div className='w-full h-full flex flex-col'>
            <div className='m-auto py-4 text-gray-300 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-300 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
            </div>
          </div>
        )}
        <button
          className={`ml-auto px-2 border-l dark:border-l-0 ${
            file
              ? 'bg-white dark:bg-gray-800 text-rose-800 hover:text-white hover:bg-rose-800 dark:hover:bg-rose-800 hover:border-l-rose-800 cursor-pointer'
              : 'dark:text-gray-600 text-gray-400 dark:bg-gray-700 bg-white cursor-default'
          } transition-none`}
          type="button"
          onClick={handleSubmit}
          disabled={!file}
        >
          Submit
        </button>
      </div>
      {isLoading && (
          <div className="mt-5 flex space-x-3">
              <div className="text-gray-400 text-balance">Generating Prompts...</div>
              <DotLoader color="#881337" size={20} />
          </div>
      )}
      {errorMessage && (
        <div className="text-rose-700 text-sm mt-2">
          {errorMessage}
        </div>
      )}
    </div>

    );
};

export default ImageUploader;
