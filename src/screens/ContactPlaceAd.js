import React from "react";
import logo from "../assests/logo.png";
const ContactPlaceAd = () => {
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
          <h2 className="text-2xl font-bold text-gray-800">Conatct</h2>
          <p className="text-gray-600">
         
How can people get in touch?
          </p>
          <button className="text-green-600 hover:underline">
            Change category
          </button>

          {/* Advert Title */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
            Phone (optional)
            </label>
            <input
              type="text"
              id="title"
              placeholder="Please include a title"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
       Email (optional)
            </label>
            <input
              type="text"
              id="title"
              placeholder="Please include a email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Item Condition */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
            Contact Preferences
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                <span>Email</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                <span>Phone</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="condition" className="mr-2" />
                <span>Both</span>
              </label>
            </div>
          </div>

       

        
          {/* Next Button */}
          <div className="flex justify-end">
            <a href="/pacakgePlaceAd">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
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

export default ContactPlaceAd;
