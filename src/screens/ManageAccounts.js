import React from "react";
import { Tabs } from "antd";
import LeftSection from "../components/LeftSection";
import HeaderSecond from "../components/HeaderSecond";
const { TabPane } = Tabs;
export default function ManageAccounts() {
  return (
    <>
      <div>
        <HeaderSecond />
      </div>
      <LeftSection />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="h-96 mb-4">
          <h2 className="text-2xl  text-gray-800 lg:text-3xl">My account</h2>

          <Tabs
            defaultActiveKey="1"
            className="w-full"
            tabBarStyle={{ textAlign: "center" }}
            style={{ display: "block" }} // Ensures the tabs and content are stacked vertically
          >
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Details
                  <span className="ml-1 text-xs text-gray-500">(1)</span>
                </span>
              }
              key="1"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Edit Profile
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  Edit your personal data
                </p>

                {/* First Name */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name (required)
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    value="lkjhg" // example value, replace with actual state if needed
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Last Name */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name (required)
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    value="puyt" // example value, replace with actual state if needed
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Gender Dropdown */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Birthday */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Birthday
                  </label>
                  <input
                    id="birthday"
                    type="date"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Save Button */}
                <button className="mt-6 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
                  Save Changes
                </button>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Email
                </span>
              }
              key="2"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Change your email
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  You will receive an email with a confirmation link to complete
                  the operation.
                </p>

                {/* Email Input */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email (required)
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your new email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Save Button */}
                <button className="mt-6 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
                  Save Changes
                </button>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Password
                  <span className="ml-1 text-xs text-gray-500">(3)</span>
                </span>
              }
              key="3"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Change Password
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  All fields are required!
                </p>

                {/* Old Password Input */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="old-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Old Password (required)
                  </label>
                  <input
                    id="old-password"
                    type="password"
                    placeholder="Enter your old password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* New Password Input */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password (required)
                  </label>
                  <input
                    id="new-password"
                    type="password"
                    placeholder="Enter your new password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    minLength="6"
                    required
                  />
                  <small className="text-xs text-gray-500 mt-2">
                    New password must have more than 6 characters
                  </small>
                </div>

                {/* Confirm Password Input */}
                <div className="w-full mb-6">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password (required)
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Re-type your new password to confirm"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Save Changes Button */}
                <button className="mt-6 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
                  Save Changes
                </button>
              </div>
            </TabPane>

            {/* Tab 4: Expired */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Ads
                  <span className="ml-1 text-xs text-gray-500">(4)</span>
                </span>
              }
              key="4"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Edit Advert Settings
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  Schedule boost time for your listings. This will apply to all
                  your listings that have the Scheduled Booster Tool applied.
                </p>

                {/* Boost Time Input */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="boost-time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Scheduled Boost Time
                  </label>
                  <input
                    id="boost-time"
                    type="datetime-local"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Apply Button */}
                <button className="mt-6 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
                  Apply Boost
                </button>
              </div>
            </TabPane>

            {/* Tab 5: Sold */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  new letters{" "}
                  <span className="ml-1 text-xs text-gray-500">(5)</span>
                </span>
              }
              key="5"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  No sold items found.
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  );
}
