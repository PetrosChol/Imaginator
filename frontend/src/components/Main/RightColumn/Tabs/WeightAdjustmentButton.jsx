import { useState, useEffect } from 'react';
import PlusIcon from '../../../../icons/PlusIcon';
import MinusIcon from '../../../../icons/MinusIcon';

const WeighAdjustmentButton = ({ weight, onWeightChange }) => {
    const [count, setCount] = useState(weight);

    useEffect(() => {
        setCount(weight); 
      }, [weight]);

    const handleButtonClick = (e, action) => {
            e.stopPropagation(); 
            action();
        };

    const increment = () => {
        const newWeight = Math.min(count + 0.1, 1.5);
        if (newWeight !== count) {
            setCount(newWeight);
            onWeightChange(newWeight); 
        }
    };


    const decrement = () => {
        const newWeight = Math.max(count - 0.1, 0.5);
        if (newWeight !== count) {
          setCount(newWeight);
          onWeightChange(newWeight); 
        }
    };

  return (
    <div className='bg-gray-300 dark:bg-gray-900 w-18 border rounded-xl border-gray-400 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-600'>
        <div className="flex items-center space-x-0">
            <input
                type="text"
                value={count.toFixed(1)} 
                onChange={(e) => {
                const newVal = parseFloat(e.target.value);
                if (newVal >= 0.5 && newVal <= 1.5) {
                    setCount(newVal);
                }
                }}
                className="text-center w-10 px-2 bg-gray-300 dark:bg-gray-900 rounded-md focus:outline-none text-gray-500"
            />
            <div className="flex flex-col">
                <button
                onClick={(e) => handleButtonClick(e, increment)}
                className="text-gray-500 rounded-md pr-1 focus:outline-none hover:text-gray-700 dark:hover:text-gray-200"
                >
                    <PlusIcon />
                </button>
                <button
                onClick={(e) => handleButtonClick(e, decrement)}
                className="text-gray-500 rounded-md pr-1 focus:outline-none hover:text-gray-700 dark:hover:text-gray-200" 
                >
                    <MinusIcon />
                </button>
            </div>
            </div>
    </div>
    
  );
};

export default WeighAdjustmentButton;
