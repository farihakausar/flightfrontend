import React from "react";
import { Link } from "react-router-dom";

export default function LeftSection() {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
          </div>
        </div>
      </nav>

      <aside
        className="fixed top-30 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border border-gray-300 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        {/* User Section */}
        <div className="flex flex-col items-center p-4 border-b border-gray-200 dark:border-gray-700 mt-50">
          <img
            src="https://via.placeholder.com/80"
            alt="User"
            className="w-20 h-20 rounded-full"
          />
          <span className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
            Username
          </span>
        </div>

        <div className="overflow-y-auto py-4 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Dashboard</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/messages"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Messages</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/manageAds"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Manage My Ads</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/paymentmethods"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Payment Methods</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/businessPage"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Create Business Profile</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/favads"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Favourite Ads</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                to="/savedsearches"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Saved Searches</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/accounts"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Manage Accounts</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
            <li>
              <Link
                to="/report"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Report</span>
              </Link>
              <hr className="border-gray-300 my-1" />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
