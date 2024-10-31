import React from "react";
import logo from "../assests/logo.png";
import { FaEnvelope, FaMusic } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <header class="text-gray-600 body-font sticky top-0 bg-white shadow-md">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div class="flex items-center mr-5">
            <img src={logo} alt="Logo" class="h-8 w-auto" />
          </div>

          <nav class="flex lg:w-2/5 flex-wrap items-center text-base ">
            <a class="mr-5 hover:text-gray-900">Categories</a>
            <a class="mr-5 hover:text-gray-900">Blog</a>
            <a class="mr-5 hover:text-gray-900">Services</a>
            <a class="hover:text-gray-900">Saved</a>
          </nav>

          <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <div class="flex items-center">
              <a href="#" class="mr-5  hover:text-gray-900">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="#" class="mr-5  hover:text-gray-900">
                <FaMusic className="text-2xl" />
              </a>
              <a href="/placeAd">
  <button class="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base text-white">
    place your ad
    <FiPlus className="w-4 h-4 ml-1" />
  </button>
</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
