

// import React from "react";
// import Footer from "../components/Footer";
// import HeaderSecond from "../components/HeaderSecond";

// export default function PlaceAd() {
//   return <> <HeaderSecond/>
  
//   <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-col text-center w-full mb-20">
//       <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
//       <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
//     </div>
//     <div class="flex flex-wrap -m-4">
//       <div class="p-4 lg:w-1/4 md:w-1/2">
//         <div class="h-full flex flex-col items-center text-center">
//           <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
//           <div class="w-full">
//             <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>

//           </div>
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/4 md:w-1/2">
//         <div class="h-full flex flex-col items-center text-center">
//           <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
//           <div class="w-full">
//             <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>

//           </div>
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/4 md:w-1/2">
//         <div class="h-full flex flex-col items-center text-center">
//           <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
//           <div class="w-full">
//             <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>

//           </div>
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/4 md:w-1/2">
//         <div class="h-full flex flex-col items-center text-center">
//           <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
//           <div class="w-full">
//             <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   <Footer/>
//   </>
// }
import React from "react";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";

export default function PlaceAd() {
  return (
    <>
      <HeaderSecond />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
              Franzen you probably haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown Section */}
          <div className="max-w-sm mx-auto mt-10">
            <select
              className="block w-full border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select option...</option>
              <option value="name">Full Name</option>
              <option value="email">Email Address</option>
              <option value="description">Project Description</option>
              <option value="user_id">User Identification Number</option>
            </select>
          </div>

          {/* Ad Type Question with Options */}
          <div className="mt-10">
            <p className="text-lg font-semibold text-gray-800 text-center">What is your ad type?</p>
            <div className="flex space-x-6 mt-4 p-4  ">
              <button className="px-4 py-2 text-sm  border border-gray-300  rounded-md font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                For Sale
              </button>
              <button className="px-4 py-2 text-sm  border border-gray-300  rounded-md font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                Free to Collector
              </button>
              <button className="px-4 py-2 text-sm   border border-gray-300  rounded-md font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                Wanted
              </button>
            </div>
          </div>

          {/* Text Line */}
          <div className="mt-6 text-center text-gray-500 text-sm">
            Ads in this category are free to place.
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-8">
            <button  className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Next
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
