import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosStar } from "react-icons/io";
import StarSelector from "../components/StarSelector/StarSelector";
import AdvancedFilter from "../components/AdvancedFilters";


const SearchBar = () => {
   
  
  const [departFrom, setDepartFrom] = useState("Select Location");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [nights, setNights] = useState(7);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Validation States
  const [errors, setErrors] = useState({
    departFrom: false,
    destination: false,
    departureDate: false,
  });

  const validateFields = () => {
    const newErrors = {
      departFrom: departFrom === "Select Location",
      destination: destination.trim() === "",
      departureDate: !departureDate,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true); // Return true if no errors
  };

  const handleSearch = () => {
    if (validateFields()) {
      alert(
        `Searching for: \nDepart: ${departFrom}\nDestination: ${destination}\nDate: ${departureDate}\nNights: ${nights}\nAdults: ${adults}\nChildren: ${children}`
      );
    }
  };

  return (
    <>
       <div className="mt-4 grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
  {/* Depart From */}
  <div className="col-span-1 md:col-span-2">
    <label className="text-gray-500">Depart from</label>
    <div className="relative">
      <select
        value={departFrom}
        onChange={(e) => setDepartFrom(e.target.value)}
        className={`custom-dropdown text-3xl font-bold w-full border-b py-2 focus:outline-none
          text-black appearance-none pr-8 ${errors.departFrom ? "border-red-500" : "border-gray-300"}`}
      >
        <option className="text-lg">Select Location</option>
        <option className="text-lg">New York</option>
        <option className="text-lg">London</option>
      </select>
    </div>
    {errors.departFrom && (
      <p className="text-red-500 text-sm mt-1">Please select a departure location.</p>
    )}
  </div>

  {/* Destination */}
  <div className="col-span-1 md:col-span-2">
    <label className="text-gray-500">Destination</label>
    <input
      type="text"
      placeholder="Enter Destination"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      className={`w-full border-b text-3xl font-bold py-2 placeholder-black focus:outline-none text-black ${errors.destination ? "border-red-500" : "border-gray-300"}`}
    />
    {errors.destination && (
      <p className="text-red-500 text-sm mt-1">Please enter a destination.</p>
    )}
  </div>

  {/* Departure Date */}
  <div className="col-span-1 md:col-span-2">
    <label className="text-gray-500">Dep. date</label>
    <div className="relative">
      <DatePicker
        selected={departureDate}
        onChange={(date) => setDepartureDate(date)}
        placeholderText="Enter Date"
        className={`custom-dropdown text-3xl font-bold placeholder-black w-full border-b py-2 focus:outline-none text-black ${errors.departureDate ? "border-red-500" : "border-gray-300"}`}
      />
    </div>
    {errors.departureDate && (
      <p className="text-red-500 text-xs mt-1">Please select a departure date.</p>
    )}
  </div>

  {/* Nights */}
  <div className="col-span-1 md:col-span-1">
    <label className="text-gray-500">Nights</label>
    <select
      value={nights}
      onChange={(e) => setNights(Number(e.target.value))}
      className="custom-dropdown text-3xl font-bold w-full border-b border-gray-300 py-2 focus:outline-none text-black"
    >
      {[...Array(10).keys()].map((night) => (
        <option key={night + 1} value={night + 1}>
          {night + 1}
        </option>
      ))}
    </select>
  </div>

  {/* Adults */}
  <div className="col-span-1 md:col-span-1">
    <label className="text-gray-500">Adult</label>
    <select
      value={adults}
      onChange={(e) => setAdults(Number(e.target.value))}
      className="custom-dropdown text-3xl font-bold w-full border-b border-gray-300 py-2 focus:outline-none text-black"
    >
      {[1, 2, 3, 4, 5].map((adult) => (
        <option key={adult} value={adult}>
          {adult}
        </option>
      ))}
    </select>
  </div>

  {/* Children */}
  <div className="col-span-1 md:col-span-1">
    <label className="text-gray-500">Child (0-17)</label>
    <select
      value={children}
      onChange={(e) => setChildren(Number(e.target.value))}
      className="custom-dropdown text-3xl font-bold w-full border-b border-gray-300 py-2 focus:outline-none text-black"
    >
      {[0, 1, 2, 3, 4].map((child) => (
        <option key={child} value={child}>
          {child}
        </option>
      ))}
    </select>
  </div>

  {/* Search Button */}
  <div className="col-span-1 md:col-span-1 flex justify-end">
    <button
      onClick={handleSearch}
      className="bg-blue-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-600"
    >
      Search
    </button>
  </div>
</div>

{/* Additional components at the bottom */}
<div className="mt-4 grid grid-cols-1 md:grid-cols-5 sm:grid-cols-1 items-center text-gray-500 text-sm">
  
    {/* Add Another Airport */}
    <div className="text-black text-xl flex items-center">
      <span className="text-2xl  font-bold mr-2">+</span> Add another airport
    </div>
  

  {/* Advanced Filters and Star Selector */}
  <div className="col-span-1 md:col-span-2 flex gap-8">
    <AdvancedFilter />
    <StarSelector />
  </div>
</div>


</>    
  );
};

export default SearchBar;
