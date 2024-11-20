import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SavedModal({ show }) {
  const [activeCategory, setActiveCategory] = useState(null);

  if (!show) return null;

  const categoriesColumn1 = [
    { name: "Adds" },
    { name: "Collections" },
    { name: "Searches" },
  ];

  const adds = [
    "No ads have been saved yet.",
    "Your last viewed and saved ads will appear here",
  ];

  const collections = [
    "No collections have been saved yet.",
    "Your last viewed and saved collections will appear here",
  ];

  const searches = [
    "No searches have been saved yet.",
    "Your last viewed and saved searches will appear here",
  ];

  const handleMouseEnter = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div
      className="fixed top-[4.5rem] left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg p-6"
      style={{ width: "100%", display: "block" }}
    >
      <div className="container mx-auto grid grid-cols-4 gap-6">
        <ul className="text-lg text-gray-700">
          {categoriesColumn1.map((category, index) => (
            <li
              key={index}
              className="flex items-center cursor-pointer py-1 hover:text-green-600 group relative"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onClick={() => handleClick(category.name)}
            >
              <span className="text-lg text-gray-700 group-hover:text-green-600">
                {category.name}
              </span>
              <FaArrowRight className="absolute right-24 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-gray-500" />
            </li>
          ))}
        </ul>

        <div className="col-span-3">
          {activeCategory === "Adds" && (
            <div>
              {adds.map((item, index) => (
                <p key={index} className="text-sm text-gray-700 py-1">
                  {item}
                </p>
              ))}
            </div>
          )}

          {activeCategory === "Collections" && (
            <div>
              {collections.map((item, index) => (
                <p key={index} className="text-sm text-gray-700 py-1">
                  {item}
                </p>
              ))}
            </div>
          )}

          {activeCategory === "Searches" && (
            <div>
              {searches.map((item, index) => (
                <p key={index} className="text-sm text-gray-700 py-1">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
