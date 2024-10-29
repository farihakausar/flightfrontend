import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon
import { FiMapPin } from 'react-icons/fi'; // Location Icon
import { FaRegBell } from 'react-icons/fa'; // Notification Icon
import { BsMusicNote } from 'react-icons/bs'; // Music Icon
import { MdOutlineMessage } from 'react-icons/md'; // Message Icon
import logo from "../assests/logo.png";
import { AiOutlinePlus } from 'react-icons/ai'; // Importing the plus icon
const HeaderSecond = () => {
    return (
        <header className="flex flex-col bg-white shadow-lg">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>
                <div className="flex items-center w-1/2 mx-4">
                    <input 
                        type="text" 
                        placeholder="whata you are looking for....."
                        className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="flex items-center ml-2">
                        <FiMapPin className="text-gray-500" />
                        <span className="ml-1 text-green-400">Uk<br></br><span className="text-black">Change</span></span>
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
                <a href="#" className="text-gray-700">Cateegories</a>
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
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div> {/* Placeholder for Avatar */}
                </div>
            </nav>
        </header>
    );
};

export default HeaderSecond;
