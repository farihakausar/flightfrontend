import React from "react";
import logo from "../assests/logo.png";
import { FiPlus } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
          <a
            href="/descriptionPlaceAd"
            className="inline-flex items-center bg-red-500 border-0 py-3 px-8 focus:outline-none hover:bg-red-600 rounded  mb-10 text-base text-white"
          >
            Place Your Ad
            <FiPlus className="w-4 h-4 ml-1" />
          </a>
          <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <div className="md:w-2/3 flex flex-col items-start">
              <h2 className="text-lg mb-2">Subscribe to our FREE newsletter</h2>
              <p className="text-sm text-gray-400 mb-4">
                Sign up to receive the latest news, advice, and ads, straight to
                your inbox. You can unsubscribe at any time.
              </p>
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded px-3 py-2 mb-2 w-full"
              />
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Alos send me trusted promotions from 3rd party.
              </label>
              <button className="bg-red-600 text-white px-4 py-2 rounded mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              For Sale
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="hover:text-white">Bicycles</a>
              </li>
              <li>
                <a className="hover:text-white">Computers & Electronics</a>
              </li>
              <li>
                <a className="hover:text-white">Furniture</a>
              </li>
              <li>
                <a className="hover:text-white">Home Appliances</a>
              </li>
              <li>
                <a className="hover:text-white">Musical Instruments</a>
              </li>
              <li>
                <a className="hover:text-white">Prams & Pushchairs</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Motors
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a className="hover:text-white">Cars</a>
              </li>
              <li>
                <a className="hover:text-white">RIBs & Inflatable Boats</a>
              </li>
              <li>
                <a className="hover:text-white">Motorhomes</a>
              </li>
              <li>
                <a className="hover:text-white">Caravans</a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Jobs
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="hover:text-white"> Childcare Jobs</a>
              </li>
              <li>
                <a class="hover:text-white">Education Jobs</a>
              </li>
              <li>
                <a class="hover:text-white">Healthcare & Medicine Jobs</a>
              </li>
              <li>
                <a class="hover:text-white">Health, Beauty & Fitness Jobs</a>
              </li>
              <li>
                <a class="hover:text-white">Home & Social Care Jobs</a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Services
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="hover:text-white"> Languages</a>
              </li>
              <li>
                <a class="hover:text-white">Garden Services</a>
              </li>
              <li>
                <a class="hover:text-white">Transport</a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Property{" "}
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="hover:text-white"> Houses & Bungalows</a>
              </li>
              <li>
                <a class="hover:text-white">Flats & Bedsits</a>
              </li>
              <li>
                <a class="hover:text-white">Rooms</a>
              </li>
              <li>
                <a class="hover:text-white">Commercial</a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Animals
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="hover:text-white">Cats & Kittens</a>
              </li>
              <li>
                <a class="hover:text-white">Dogs & Puppies</a>
              </li>
              <li>
                <a class="hover:text-white">Horses</a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Events
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="hover:text-white"> Car Boot Sales & Garage Sales</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Adult
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Can we Help?
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a href="/" class="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact-us" class="hover:text-white">
                  Contact us{" "}
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" class="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </nav>
          </div>

          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav class="list-none mb-10">
              <li>
                <a href="/" class="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" class="hover:text-white">
                  Account{" "}
                </a>
              </li>
              <li>
                <a href="/collections" class="hover:text-white">
                  Collections
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4 mt-8">
            <nav class="list-none mb-10">
              <li>
                <a href="/about-us" class="hover:text-white ">
                  About us{" "}
                </a>
              </li>
              <li>
                <a href="/testimonials" class="hover:text-white">
                  Testimonials{" "}
                </a>
              </li>
              <li>
                <a href="/mediaPack" class="hover:text-white">
                  Media Pack
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4 mt-8">
            <nav class="list-none mb-10">
              <li>
                <a href="/blogAll" class="hover:text-white ">
                  Blog{" "}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" class="hover:text-white">
                  Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a href="/help" class="hover:text-white">
                  Help
                </a>
              </li>
            </nav>
          </div>
          <br></br>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              Suggested links
            </h2>
            <nav class="list-none ">
              <li>
                <a href="/" class="hover:text-white">
                  Free to collect
                </a>
              </li>
            </nav>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <nav class="list-none mb-10">
                <li>
                  <a href="/blogAll" class="hover:text-white ">
                    Collections{" "}
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav class="list-none">
              <li>
                <a href="/login" class="hover:text-white">
                  Login
                </a>
              </li>
            </nav>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none">
                <li>
                  <a href="/registerMain" class="hover:text-white">
                    Register
                  </a>
                </li>
              </nav>
            </div>

            <div class="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                class="text-blue-600 hover:text-white"
              >
                <i class="fab fa-facebook-f fa-2x"></i>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                class="text-pink-600 hover:text-white"
              >
                <i class="fab fa-instagram fa-2x"></i>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                class="text-blue-400 hover:text-white"
              >
                <i class="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto flex flex-wrap justify-center">
          <img src={logo} alt="Company Logo" className="h-10 mb-2" />
          <p className="text-gray-400 text-sm text-center">
            Friday Media Group Ltd, 80 East St, Brighton BN1 1NF - Copyright
            2024 | dev [:] Memória Visual
          </p>
        </div>
      </div>
    </footer>
  );
}
