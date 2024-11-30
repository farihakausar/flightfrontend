import React from "react";

export default function BusinessAside() {
  return (
    <>
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
          className="fixed top-30 left-0 z-40 w-80 h-screen pt-14 transition-transform -translate-x-full bg-white border border-gray-300 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
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
              lkjhgfdsswertyuios
            </span>
            {/* Icons Row (Heart and Download) */}
            <div className="flex justify-between items-center w-full mt-4">
              <i className="text-xl text-red-500 hover:text-red-700 cursor-pointer">
                <i className="fas fa-heart"></i>
              </i>
              <i className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer">
                <i className="fas fa-download"></i>
              </i>
            </div>
          </div>

          {/* Chat Button */}
          <div className="fixed bottom-8 left-8 p-3 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300">
            <i className="fas fa-comment-dots"></i> {/* Chat icon */}
          </div>
        </aside>
      </div>
    </>
  );
}
