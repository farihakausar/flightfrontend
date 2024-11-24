


import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "antd";

const CarHire = () => {
  const [departFrom, setDepartFrom] = useState("Enter Location");
  const [destination, setDestination] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [pickupTime, setPickupTime] = useState("00:00");
  const [dropoffTime, setDropoffTime] = useState("00:00");
  const [adults, setAdults] = useState(25);
  const [children, setChildren] = useState(0);

  // Validation States
  const [errors, setErrors] = useState({
    departFrom: false,
    destination: false,
    pickupDate: false,
    dropoffDate: false,
  });

  const validateFields = () => {
    const newErrors = {
      departFrom: departFrom === "Enter Location",
      destination: destination.trim() === "",
      pickupDate: !pickupDate,
      dropoffDate: !dropoffDate,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true); // Return true if no errors
  };

  const handleSearch = () => {
    if (validateFields()) {
      alert(
        `Searching for: \nDepart: ${departFrom}\nDestination: ${destination}\nPickup Date: ${pickupDate}\nDropoff Date: ${dropoffDate}\nPickup Time: ${pickupTime}\nDropoff Time: ${dropoffTime}\nAdults: ${adults}\nChildren: ${children}`
      );
    }
  };

  return (
    <>
      {/* Search Fields */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
        {/* Depart From */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-gray-500">Pick up from</label>
          <div className="relative">
            <input
              value={departFrom}
              onChange={(e) => setDepartFrom(e.target.value)}
              className={`text-3xl font-bold w-full border-b py-2 focus:outline-none
         text-black appearance-none pr-8 ${
           errors.departFrom ? "border-red-500" : "border-gray-300"
         }`}
            />
          </div>
          {errors.departFrom && (
            <p className="text-red-500 text-sm mt-1">
              Please select a departure location.
            </p>
          )}
        </div>

        {/* Pickup Date */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-gray-500">Pick up date </label>
          <div className="relative">
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              placeholderText="Start Date"
              className={`custom-dropdown text-3xl font-bold placeholder-black w-full border-b py-2 focus:outline-none text-black ${
                errors.pickupDate ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.pickupDate && (
            <p className="text-red-500 text-xs mt-1">
              Please select a pickup date.
            </p>
          )}
        </div>

        {/* Pickup Time */}
        <div className="col-span-1 md:col-span-1">
          <label className="text-gray-500">Pick up Time</label>
          <select
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="custom-dropdown text-3xl font-bold w-full border-b border-gray-300 py-2 focus:outline-none text-black"
          >
            {Array.from({ length: 24 }).map((_, index) => {
              const hours = String(index).padStart(2, "0");
              const time = `${hours}:00`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </div>

        {/* Dropoff Date */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-gray-500">Drop off date </label>
          <div className="relative">
            <DatePicker
              selected={dropoffDate}
              onChange={(date) => setDropoffDate(date)}
              placeholderText="Enter Date"
              className={`custom-dropdown text-3xl font-bold placeholder-black w-full border-b py-2 focus:outline-none text-black ${
                errors.dropoffDate ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.dropoffDate && (
            <p className="text-red-500 text-xs mt-1">
              Please select a dropoff date.
            </p>
          )}
        </div>

        {/* Dropoff Time */}
        <div className="col-span-1 md:col-span-1">
          <label className="text-gray-500">Drop off time</label>
          <select
            value={dropoffTime}
            onChange={(e) => setDropoffTime(e.target.value)}
            className="custom-dropdown text-3xl font-bold w-full border-b border-gray-300 py-2 focus:outline-none text-black"
          >
            {Array.from({ length: 24 }).map((_, index) => {
              const hours = String(index).padStart(2, "0");
              const time = `${hours}:00`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </div>

        
<div className="col-span-1 md:col-span-1">
  <label className="text-gray-500">Driver's age</label>
  <select
    value={adults}
    onChange={(e) => setAdults(Number(e.target.value))}
    className="custom-dropdown text-3xl font-bold w-full border-b border-gray-300 py-2 focus:outline-none text-black"
  >
    {Array.from({ length: 75 - 21 + 1 }, (_, index) => 21 + index).map((age) => (
      <option key={age} value={age}>
        {age}
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

      <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-4 items-center text-gray-500 text-sm">
        <div className="flex items-center justify-start gap-24">
          {/* Add Another Airport */}
          <div className="text-black text-xl flex items-center">
            <span className="mr-2">
              <Checkbox checked />
            </span>
            Return to Same Location
          </div>
        </div>
      </div>
    </>
  );
};

export default CarHire;
