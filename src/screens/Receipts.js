import React from "react";
import { Tabs } from "antd";
import LeftSection from "../components/LeftSection";
import "../css/Receipts.css"; // Assuming you'll add custom CSS here

const { TabPane } = Tabs;

export default function Receipts() {
  return (
    <>
      <LeftSection />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="h-96 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Messages
          </h2>

          {/* Ant Design Tabs for Adverts and Subscriptions */}
          <Tabs
            defaultActiveKey="1"
            tabBarStyle={{
              textAlign: "center",
            }}
            className="custom-tabs"
          >
            {/* Tab 1: Adverts */}
            <TabPane tab="Adverts" key="1">
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>{" "}
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  You have no payment methods.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create Payment Method
                </button>
              </div>
            </TabPane>

            {/* Tab 2: Subscriptions */}
            <TabPane tab="Subscriptions" key="2">
              <div className="flex flex-col justify-center items-center text-center border border-gray-300 rounded-lg p-6 md:p-12">
                <div className="bg-gray-200 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-info"></i>{" "}
                </div>
                <p className="text-lg text-gray-500 mb-6">
                  You have no active subscriptions.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Create Subscription
                </button>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </main>
    </>
  );
}
