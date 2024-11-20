import React, { useState } from "react";
import SearchBar from "./Holidays";
import CarHire from "./CarHire";

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState("Holidays");

  const getHeadingText = () => {
    switch (activeTab) {
      case "Holidays":
        return "Get travel packages to save money";
      case "Car hire":
        return "Find the perfect car for your journey";
      case "Travel insurance":
        return "Protect your travels with comprehensive insurance";
      default:
        return "";
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center p-6 relative"
      style={{
        backgroundImage:
          "url(http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-23.jpg)",
      }}
    >
      {/* Heading */}
      <div className="absolute top-6 left-6 text-black text-[60px] lg:text-[60px] md:text-[50px] sm:text-[18px] font-bold bg-opacity-70 p-4 rounded-lg max-w-full">
        {getHeadingText()}
      </div>

      {/* Tabs and Content */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:mt-20 w-full">
        {/* Tabs */}
        <div className="flex space-x-4 border-b pb-2">
          {["Holidays", "Car hire", "Travel insurance"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium pb-2 px-4 rounded-t-md transition-all ${
                activeTab === tab
                  ? "bg-white text-black border-b-2 border-black"
                  : "bg-opacity-10 text-gray-500 hover:bg-opacity-70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Render Active Component */}
        <div className="mt-4">
          {activeTab === "Holidays" && <SearchBar />}
          {activeTab === "Car hire" && <CarHire />}
          {activeTab === "Travel insurance" && <div>Travel Insurance Content</div>}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
