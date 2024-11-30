import React from "react";
import { Tabs } from "antd";
import LeftSection from "../components/LeftSection";
import HeaderSecond from "../components/HeaderSecond";
const { TabPane } = Tabs;
export default function ManageMyAds() {
  return (
    <>
      <div>
        <HeaderSecond />
      </div>
      <LeftSection />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="h-96 mb-4">
          <h2 className="text-2xl  text-gray-800 lg:text-3xl">My Ads</h2>

          <Tabs
            defaultActiveKey="1"
            className="w-full"
            tabBarStyle={{ textAlign: "center" }}
            style={{ display: "block" }} // Ensures the tabs and content are stacked vertically
          >
            {/* Tab 1: Adverts */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Adverts{" "}
                  <span className="ml-1 text-xs text-gray-500">(1)</span>
                </span>
              }
              key="1"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
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
            </TabPane>

            {/* Tab 2: Active */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Active <span className="ml-1 text-xs text-gray-500">(2)</span>
                </span>
              }
              key="2"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  You have no active subscriptions.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create Subscription
                </button>
              </div>
            </TabPane>

            {/* Tab 3: Unactive */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Unactive{" "}
                  <span className="ml-1 text-xs text-gray-500">(3)</span>
                </span>
              }
              key="3"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  No unactive items found.
                </p>
              </div>
            </TabPane>

            {/* Tab 4: Expired */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Expired{" "}
                  <span className="ml-1 text-xs text-gray-500">(4)</span>
                </span>
              }
              key="4"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  No expired subscriptions.
                </p>
              </div>
            </TabPane>

            {/* Tab 5: Sold */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Sold <span className="ml-1 text-xs text-gray-500">(5)</span>
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

            {/* Tab 6: Draft */}
            <TabPane
              tab={
                <span className="text-center font-bold text-green-500">
                  Draft <span className="ml-1 text-xs text-gray-500">(6)</span>
                </span>
              }
              key="6"
            >
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12 mb-4">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  No draft items found.
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  );
}
