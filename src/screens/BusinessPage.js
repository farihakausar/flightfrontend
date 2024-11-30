import React from "react";
import HeaderSecond from "../components/HeaderSecond";
import { Link } from "react-router-dom";
import BusinessAside from "./BusinessAside";

export default function BusinessPage() {
  return (
    <>
      <HeaderSecond />
      <BusinessAside />
      <main className="p-4 md:ml-20 h-auto pt-20 ml-12">
        {" "}
        {/* Adjusted left margin */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-8">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              About My Business
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mt-2">
              It’s a bit empty in here. Add information and details about your
              business and let potential clients know all about you.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
              Add Description
              <i className="fas fa-pencil-alt ml-2"></i> {/* Pencil Icon */}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
