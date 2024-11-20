import React from "react";

export default function ServiceModal({ show }) {
  if (!show) return null; 

  const serviceColumn1 = [
    "All services",
"Business & Office",
"Events & Celebrations",
"Family & Care Services",
"Fitness",
"Health, Beauty & Wellness",
"Holiday & Travel",
"Home & Garden",
"Leisure",
"Lessons & Tuition",
"Local Food & Drink",
  ];

  const servicesColumn2 = [
   "Motoring & Transport",
"Pets & Horses",
"Professional Services",
"Retail"
  ];

  const servicesColumn3 = [
    "Recent Businesses",
   
  ];

  const servicesColumn4 = [
   
    "Hi!",
  ];

  return (
    <div
      className="fixed top-[4.5rem] left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg p-6"
      style={{ width: "100%", display: "block" }} // Ensure it takes the full width
    >
      <div className="container mx-auto grid grid-cols-4 gap-6">
        <ul className="text-sm text-gray-700">
          {serviceColumn1.map((category, index) => (
            <li key={index} className="hover:text-gray-900 cursor-pointer py-1">
              {category}
            </li>
          ))}
        </ul>
        <ul className="text-sm text-gray-700">
          {servicesColumn2.map((category, index) => (
            <li key={index} className="hover:text-gray-900 cursor-pointer py-1">
              {category}
            </li>
          ))}
        </ul>
        <ul className="text-sm text-gray-700">
          {servicesColumn3.map((category, index) => (
            <li key={index} className="hover:text-gray-900 cursor-pointer py-1">
              {category}
            </li>
          ))}
        </ul>
        <ul className="text-sm text-gray-700">
          {servicesColumn4.map((category, index) => (
            <li key={index} className="hover:text-gray-900 cursor-pointer py-1">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
