// import React from "react";
import { FaUtensils } from "react-icons/fa";
import React, { useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";
import { Checkbox } from "antd";

const StarSelector = () => {

  const [selectedOption, setSelectedOption] = useState({
    label: "Any",
    stars: 5, 
    
  });

  const [isOpen, setIsOpen] = useState(false); 

 
   const options = [
     
        { value: "vegetarian", label: "Vegetarian" },
        { value: "vegan", label: "Vegan" },
        { value: "kosher", label: "Kosher" }
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
        className="flex items-center gap-6 bg-transparent border-b border-gray-500 text-black text-sm px-3 py-2"
      >
   
        <div className="flex items-center ml-4 gap-2 text-xl"> <span><FaUtensils className="mr-2 text-blue-500" /></span>{selectedOption.label}</div>
    
        <RiArrowDownSLine className="ml-2 text-[2rem] text-black" />
      </button>

   
      {isOpen && (
        <ul className="absolute bg-white shadow-md border rounded mt-1 text-left w-40 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelection(option)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
             
             <div className=""> <Checkbox/> </div>
              <span className="ml-2">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StarSelector;
