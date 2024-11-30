import React from "react";
import LeftSection from "../components/LeftSection";
import HeaderSecond from "../components/HeaderSecond";
export default function PaymentMethods() {
  return (
    <>
      <div>
        <HeaderSecond />
      </div>
      <LeftSection />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="h-96 mb-4 flex flex-col ">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl mb-4">
            Your payment methods
          </h2>

          <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12">
            <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-info"></i>{" "}
              {/* Assuming you're using Font Awesome */}
            </div>
            <p className="text-lg text-gray-500 mb-6">
              You have no payment methods.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Create Payment Method
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
