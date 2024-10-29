import React from "react";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";

export default function Help() {
  return (
    <>
      <HeaderSecond />
      <div className="p-5 ">
        <h2 className="text-2xl border-b-2 border-grey-900 pb-2 mb-5">Help</h2>
        <nav>
          <ul className="list-none p-0">
            <li className="mb-3">
              <a
                href="#placing-advert"
                className="text-green-500 font-bold hover:underline"
              >
                Placing an Advert
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#managing-advert"
                className="text-green-500 font-bold hover:underline"
              >
                Managing an Advert
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#staying-safe"
                className="text-green-500 font-bold hover:underline"
              >
                Staying Safe Online - Buying & Selling
              </a>
            </li>
            <li>
              <a
                href="#general-queries"
                className="text-green-500 font-bold hover:underline"
              >
                General Queries
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
}
