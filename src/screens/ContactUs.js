import React from "react";
import HeaderSecond from "../components/HeaderSecond";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
    <HeaderSecond/>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2 border border-gray-300 p-6 rounded-lg shadow-md">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  Your email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="advert-id"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  Advert ID (optional)
                </label>
                <input
                  type="text"
                  id="advert-id"
                  name="advert-id"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  Leave your message here
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600 font-bold">
                  Add any extra helpful information about your requirements
                </label>
              </div>
            </div>

            <div className="p-2 w-full flex items-center">
              <input
                type="checkbox"
                id="subscribe-newsletter"
                name="subscribe-newsletter"
                className="mr-2"
              />
              <label
                htmlFor="subscribe-newsletter"
                className="text-sm text-gray-600"
              >
                Subscribe to Friday-Ad newsletter
              </label>
            </div>
            <div className="p-2 w-full flex justify-center">
              <button className="w-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg text-center">
                Send
              </button>
            </div>

            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                Please see our{" "}
                <a href="/privacy-policy" className="text-indigo-500">
                  Privacy Policy
                </a>{" "}
                for how we use and store your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
