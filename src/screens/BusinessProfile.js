import React from "react";
import CarListings from "./Card";

export default function BusinessProfile() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Car Listings</h1>
          <input
            type="text"
            placeholder="Search cars..."
            className="rounded p-2 text-black"
          />
        </div>
      </header>
      <div className="bg-blue-500 text-white py-8 text-center">
        <h2 className="text-xl font-bold">Over 170 Motorhomes in stock!</h2>
        <p>Explore our collection in West Sussex</p>
      </div>
      <CarListings />
      <div className="flex justify-center space-x-4 my-8">
        <button className="bg-gray-300 text-black px-4 py-2 rounded">
          Prev
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">1</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">
          Next
        </button>
      </div>
    </>
  );
}
