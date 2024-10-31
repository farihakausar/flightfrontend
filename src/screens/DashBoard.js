import React from "react";
import LeftSection from "../components/LeftSection";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
export default function DashBoard() {
  return (
    <>
   
      <LeftSection />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="rounded-lg h-96 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Dashboard
            </h2>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Got Messages
            </button>
          </div>

          {/* Latest Views Section */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl mb-6">
              Latest Views
            </h2>

            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {/* Card 1 */}
              <div className=" rounded-lg p-4">
                <a
                  href="#"
                  className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-row justify-between w-full">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Streetwear
                  </a>
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    66
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className=" rounded-lg p-4">
                <a
                  href="#"
                  className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <img
                    src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Engin Akyurt"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-row justify-between w-full">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Summer Season
                  </a>
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    72
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg p-4">
                <a
                  href="#"
                  className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-row justify-between w-full">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Streetwear
                  </a>
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    66
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
   
    </>
  );
}
