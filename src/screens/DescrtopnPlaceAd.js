import React from "react";
import logo from "../assests/logo.png";
const DescrtopnPlaceAd = () => {
  return (
   <>
   <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Step Progress */}
        <div className="flex justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
              1
            </div>
            <span className="text-lg font-semibold text-green-500">Basic</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
              2
            </div>
            <span className="text-lg">About</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
              3
            </div>
            <span className="text-lg">Enhance</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
              4
            </div>
            <span className="text-lg">Contact</span>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">About</h2>
          <p className="text-gray-600">
          summary 
          </p>
         

          {/* Advert Title */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
           Description
            </label>
            <input
              type="text"
              id="title"
              placeholder="Please include a title"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          {/* Next Button */}
          <div className="flex justify-end">
          <a href="/enhnacePlaceAd">
      <button
        className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Next
      </button>
    </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-600">
        <div className="space-y-2">
          <div className="space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/" className="hover:underline">
              Contact us
            </a>
            <a href="/" className="hover:underline">
              Terms and conditions
            </a>
            {/* Add more footer links as needed */}
          </div>
          <p>&copy; Friday Media Group Ltd, 80 East St, Brighton BN1 INF</p>
        </div>
      </footer>
    </div>
   
   </>
  );
};

export default DescrtopnPlaceAd;
