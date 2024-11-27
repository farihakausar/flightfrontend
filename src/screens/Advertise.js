import React from "react";
import Header from "../components/Header";
export default function Advertise() {
  return (
    <>
      <Header />
      <div className="p-8">
        {/* Title Section */}
        <h1 className="text-2xl font-bold text-black mb-8 text-center">
          What are you advertising?
        </h1>

        {/* Image Section */}
        <div className="flex justify-center space-x-8">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 1"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">For Sale</p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 2"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Motors</p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 3"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Services</p>
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 4"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Jobs</p>
          </div>
        </div>
        <div className="flex justify-center space-x-8">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 1"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Property</p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 2"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Animals</p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 3"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Events</p>
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Ad 4"
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-center">Adults</p>
          </div>
        </div>
      </div>
    </>
  );
}
