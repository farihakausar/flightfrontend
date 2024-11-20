import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const StarSelector = () => {
  
  const [selectedOption, setSelectedOption] = useState({
    label: "Any", 
    stars: 5, 
  });

  const [isOpen, setIsOpen] = useState(false); 

  
  const options = [
  
    { value: "1", label: "1 Star", stars: 1 },
    { value: "2", label: "2 Stars", stars: 2 },
    { value: "3", label: "3 Stars", stars: 3 },
    { value: "4", label: "4 Stars", stars: 4 },
    { value: "5", label: "5 Stars", stars: 5 },
  ];


  const handleSelection = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
  
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-transparent border-b border-gray-500 text-black text-sm px-3 py-2"
      >
  
    <div className="flex flex-col ">    <div className="flex ml-2">
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <IoIosStar key={`row1-${index}`} className="text-blue-500" />
            ))}
        </div>
  
        <div className="flex">
          {Array(
            selectedOption.stars - 2 > 0 ? selectedOption.stars - 2 : 0
          )
            .fill(null)
            .map((_, index) => (
              <IoIosStar key={`row2-${index}`} className="text-blue-500" />
            ))}
        </div></div>
  
        <div className="ml-4 text-xl">{selectedOption.label}</div>
  
        <RiArrowDownSLine className="ml-2 text-[2rem] md:text-[2rem] sm:text-sm text-black" />
      </button>

  
      {isOpen && (
        <ul className="absolute bg-white shadow-md border rounded mt-1 text-left w-40 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelection(option)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
  
              <div className="flex">
                {Array(option.stars)
                  .fill(null)
                  .map((_, index) => (
                    <IoIosStar key={`option-${index}`} className="text-blue-500" />
                  ))}
              </div>
              <span className="ml-2 md:text-2xl sm:text-sm">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StarSelector;
