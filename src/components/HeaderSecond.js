// import React from 'react';
// import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon
// import { FiMapPin } from 'react-icons/fi'; // Location Icon
// import { FaRegBell } from 'react-icons/fa'; // Notification Icon
// import { BsMusicNote } from 'react-icons/bs'; // Music Icon
// import { MdOutlineMessage } from 'react-icons/md'; // Message Icon
// import logo from "../assests/logo.png";
// import { AiOutlinePlus } from 'react-icons/ai'; // Importing the plus icon
// const HeaderSecond = () => {
//     return (
//         <header className="flex flex-col bg-white shadow-lg">
//             <div className="flex items-center justify-between p-4">
//                 <div className="flex items-center">
//                     <img src={logo} alt="Logo" className="h-8" />
//                 </div>
//                 <div className="flex items-center w-1/2 mx-4">
//                     <input 
//                         type="text" 
//                         placeholder="whata you are looking for....."
//                         className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     />
//                     <div className="flex items-center ml-2">
//                         <FiMapPin className="text-gray-500" />
//                         <span className="ml-1 text-green-400">Uk<br></br><span className="text-black">Change</span></span>
//                     </div>
//                 </div>
//                 <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md">
//             Place Your Ad
//             <div className="flex items-center justify-center border border-white rounded-md p-1 ml-2">
//                 <AiOutlinePlus className="text-white" />
//             </div>
//         </button>
//             </div>
//             <nav className="flex justify-between bg-gray-100 p-4">
//                 <div className="flex space-x-4">
//                 <a href="#" className="text-gray-700">Cateegories</a>
//                     <a href="#" className="text-gray-700">Services</a>

//                     <a href="#" className="text-gray-700">Blog</a>
//                     <a href="#" className="text-gray-700">Saved</a>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <div className="relative">
//                         <MdOutlineMessage className="text-gray-700" />
//                         <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</div>
//                     </div>
//                     <BsMusicNote className="text-gray-700" />
//                     <div className="w-8 h-8 rounded-full bg-gray-300"></div> {/* Placeholder for Avatar */}
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default HeaderSecond;
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'; // Search Icon and Plus Icon
import { FiMapPin } from 'react-icons/fi'; // Location Icon
import { FaRegBell } from 'react-icons/fa'; // Notification Icon
import { BsMusicNote } from 'react-icons/bs'; // Music Icon
import { MdOutlineMessage } from 'react-icons/md'; // Message Icon
import logo from "../assests/logo.png"; // Adjusted import for logo path

const HeaderSecond = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="flex flex-col bg-white shadow-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center w-1/2 mx-4">
          <input 
            type="text" 
            placeholder="What are you looking for..."
            className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex items-center ml-2 cursor-pointer" onClick={toggleModal}>
            <FiMapPin className="text-gray-500" />
            <span className="ml-1 text-green-400">UK<br /><span className="text-black">Change</span></span>
          </div>
        </div>
        <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md">
          Place Your Ad
          <div className="flex items-center justify-center border border-white rounded-md p-1 ml-2">
            <AiOutlinePlus className="text-white" />
          </div>
        </button>
      </div>
      
      <nav className="flex justify-between bg-gray-100 p-4">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700">Categories</a>
          <a href="#" className="text-gray-700">Services</a>
          <a href="#" className="text-gray-700">Blog</a>
          <a href="#" className="text-gray-700">Saved</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <MdOutlineMessage className="text-gray-700" />
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</div>
          </div>
          <BsMusicNote className="text-gray-700" />
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </nav>

      {/* Modal Structure */}
      {isModalOpen && (
        <div
          data-dialog-backdrop="sign-in-modal"
          data-dialog-backdrop-close="true"
          className="inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        >
          <div
            data-dialog="sign-in-modal"
            className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative flex flex-col bg-white">
              <div className="relative m-2 items-center flex justify-center h-24 rounded-md ">
                <h3 className="text-2xl">Change location</h3>
              </div>
              <div className="flex flex-col gap-4 p-6">
              <div className="max-w-sm mx-auto mt-10">
              <h5 className="text-2xl">Input Town</h5>
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

          
                
              </div>
              <div className="p-6 pt-0">
                <button
                  className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={toggleModal}
                >
                  Apply
                </button>
               
             
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSecond;
