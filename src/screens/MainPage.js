import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaTags,
  FaCar,
  FaBriefcase,
  FaCogs,
  FaHome,
  FaPaw,
  FaCalendar,
  FaUser,
} from "react-icons/fa";
import main1 from "../assests/main1.png";
import { FiSearch, FiMapPin, FiTag, FiHeart } from "react-icons/fi";
import main from "../assests/main.png";

export default function MainPage() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* Location and UK Change */}
            <div className="flex items-center mb-4 space-x-2">
              <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                Find me a local
              </h1>
            </div>

            {/* Search Input */}
            {/* Search Input */}
            <div className="relative w-full mb-8">
              <input
                placeholder="Whate are you loooking fro "
                type="text"
                className="w-full py-3 pl-5 pr-14 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FiSearch
                className="absolute right-2 top-2 text-white bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg"
                size={36} // Adjust size to match the input height
              />
            </div>
            <div className="flex items-center space-x-1 mb-3">
              <FiMapPin className="text-gray-500" size={20} />
              <p className="text-sm text-gray-500">UK change</p>
            </div>

            {/* Small Buttons for Car Options */}
            <div className="flex space-x-2 mb-4">
              {["Cars", "SUVs", "Trucks", "Vans", "Luxury", "Electric"].map(
                (option) => (
                  <button
                    key={option}
                    className="py-2 px-4 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={main}
            />
          </div>
        </div>
      </section>
      {/* nbjnbj */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-6 gap-8">
            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 items-center justify-center mb-2 sm:mb-2 md:h-14 md:w-14 text-black">
                <FaTags className="text-2xl" />
              </div>
              <h3 class="mb-1 text-center text-lg font-semibold md:text-xl text-black">
                Sale
              </h3>
            </div>

            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 items-center justify-center mb-2 sm:mb-2 md:h-14 md:w-14 text-black">
                <FaCar className="text-2xl" />
              </div>
              <h3 class="mb-1 text-center text-lg font-semibold md:text-xl text-black">
                Motors
              </h3>
            </div>

            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 items-center justify-center mb-2 sm:mb-2 md:h-14 md:w-14 text-black">
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 class="mb-1 text-center text-lg font-semibold md:text-xl text-black">
                Jobs
              </h3>
            </div>

            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 items-center justify-center mb-2 sm:mb-2 md:h-14 md:w-14 text-black">
                <FaCogs className="text-2xl" />
              </div>
              <h3 class="mb-1 text-center text-lg font-semibold md:text-xl text-black">
                Service
              </h3>
            </div>

            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 items-center justify-center mb-2 sm:mb-2 md:h-14 md:w-14 text-black">
                <FaPaw className="text-2xl" />
              </div>
              <h3 class="mb-1 text-center text-lg font-semibold md:text-xl text-black">
                Animals
              </h3>
            </div>

            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 items-center justify-center mb-2 sm:mb-2 md:h-14 md:w-14 text-black">
                <FaCalendar className="text-2xl" />
              </div>
              <h3 class="mb-1 text-center text-lg font-semibold md:text-xl text-black">
                Events
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* bnjb */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 w-full border border-gray-300 rounded-lg">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-1 p-4">
                <h2 className="text-gray-900 title-font text-lg font-bold">
                  The Catalyzer - Your Gateway to Innovation
                </h2>

                {/* Location Icon and Text */}
                <div className="flex items-center mt-2">
                  <FiMapPin className="text-gray-500 mr-2" size={16} />
                  <span className="text-sm text-gray-500">uk</span>
                </div>

                {/* Price and Heart Icon */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <FiTag className="text-gray-500 mr-2" size={16} />
                    <span className="text-sm">$16.00</span>
                  </div>
                  <FiHeart className="text-red-500 cursor-pointer" size={20} />
                </div>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/421x261"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/422x262"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/424x264"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/425x265"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/427x267"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/428x268"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* other */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={main1}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Discover businesses in UK!
            </h1>
            <p class="mb-8 leading-relaxed">
              See what your area has to offer...
            </p>
            <p class="mb-8 text-green-700 text-md font-bold leading-relaxed">
              Discover businesses in UK
            </p>
            <p class="text-sm mt-2 text-gray-500  w-full">Not in UK</p>
            <p class="text-md font-bold mt-1 text-green-700 mb-8 w-full">
              Change location
            </p>
            <p class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Are you a businesses
            </p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <button class="inline-flex text-black hover:text-white border border-gray-300 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Create A profile now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* bjmn */}
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
