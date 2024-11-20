import React, { useState } from "react";
import { FaCar, FaBriefcase, FaHome, FaDog, FaCalendar, FaBan, FaShoppingCart, FaArrowRight } from "react-icons/fa";

export default function CategoriesModal({ show }) {
  const [activeCategory, setActiveCategory] = useState(null);

  if (!show) return null;

  const categoriesColumn1 = [
    { name: "For Sale", icon: <FaShoppingCart /> },
    { name: "Motors", icon: <FaCar /> },
    { name: "Jobs", icon: <FaBriefcase /> },
    { name: "Property", icon: <FaHome /> },
    { name: "Animals", icon: <FaDog /> },
    { name: "Events", icon: <FaCalendar /> },
    { name: "Adult", icon: <FaBan /> },
  ];

  const motorsItems = [
    "Boats",
    "Cars",
    "Cars Wanted",
    "Commercial Vehicles",
    "Farm",
    "Horseboxes & Trailers",
    "Motorbikes, Scooters & Quads",
    "Motorhomes & Caravans",
    "Parts & Accessories",
    "Motoring Servicing & Repairs",
    "Cleaning & Valets",
    "Transport Services",
    "Vehicle Hires",
    "Vehicle Dealers",
  ];

  const jobsItems = [
    "Accountancy & Finance Jobs",
    "Automotive Jobs",
    "Charity & Volunteering Jobs",
    "Childcare Jobs",
    "Computing & IT Jobs",
    "Construction & Tradesmen Jobs",
    "Education Jobs",
    "Engineering Jobs",
    "Farming, Gardening & Pet Jobs",
    "General Jobs",
    "Graduate Jobs & Apprenticeships",
    "Health, Beauty & Fitness Jobs",
    "Healthcare & Medicine Jobs",
    "Home & Social Care Jobs",
    "Hospitality & Catering Jobs",
    "Law Jobs",
    "Marketing, Media & PR Jobs",
    "Office, Admin & PA Jobs",
    "Recruitment & HR Jobs",
    "Sales, Retail & Customer Service Jobs",
    "Seasonal & Overseas Jobs",
  ];
  const propertyItems = [
    { label: "For Sale", imgSrc: "https://clipart-library.com/2023/Cottage-House-Picture-GraphicsFairy.jpg" },
    { label: "Wanted", imgSrc: "https://i.ytimg.com/vi/1kpg9K4mfew/maxresdefault.jpg" },
    { label: "For Rent", imgSrc: "http://www.mchoiceinterior.com/images/services/home-img1.jpg" },
    { label: "Businesses for Sale", imgSrc: "https://d1a9v60rjx2a4v.cloudfront.net/2017/02/06/14_22_55_846_Paper_Houses_ModelKit_07.jpg" },
  ];
  const animals = [
    { label: "Dogs & Puppies", imgSrc: "https://iheartdogs.com/wp-content/uploads/2017/04/Maltese_puppy.jpeg.jpeg" },
    { label: "Accessories & Supplies", imgSrc: "https://pix.avax.news/avaxnews/a7/70/000070a7_big.jpeg" },
    { label: "All Animals for Sale", imgSrc: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" },
    { label: "Cats & Kittens", imgSrc: "https://img.jagranjosh.com/images/2023/January/1712023/ragdoll-top-10-cat-breeds.jpg"},
      {imgSrc:"http://wallpapercave.com/wp/iyXgxue.jpg"},
      {imgSrc:"https://www.theloadout.com/wp-content/sites/theloadout/2023/08/party-animals-characters-nemo.jpg"},
      {imgSrc:"https://www.treehugger.com/thmb/YUCZ19uTJZuBz8xrx0N8GRmZUk0=/2087x1437/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-686642288-54b7b283c33245cf918d7326e58da812.jpg"}
    
  ];
  const events = [
    "Birthdays & Notices",
    "Car Boot Sales & Garage Sales",
    "Car Events & Shows",
    "Charity Runs",
    "Christmas",
    "Classes",
    "Clubs",
    "Entertainment",
    "Event Tickets for Sale",
    "Fairs",
    "Kid's Activities",
    "Music Gigs & Festivals",
    "Nightlife",
    "Pick Your Own",
    "Places To Visit"
  ];
  const adults = [
    "Adult Contacts",
    "Adult Massage",
    "Escorts",
    "Gay Male Escorts",
    "Industry Jobs",
    "Male Escorts",
    "Trans Escorts",
    "Casual Sex",
    "No Strings Hook Ups",
    "Sex Partners Near You",
    "Free Sex Ads (35+)"
  ];
  
  

  const categoriesColumn2 = [
    "Agricultural",
    "Antiques & Collectables",
    "Baby & Kids",
    "Bicycles",
    "Bizarre Bazaar",
    "Businesses for sale",
    "Clothing, Footwear & Accessories",
    "Computers & Electronics",
    "Consoles",
    "Cookware & Dining",
  ];

  const categoriesColumn3 = [
    "DIY",
    "Event Ticket Resales",
    "Free to collect",
    "Furniture",
    "Garden",
    "Heating & Cooling",
    "Hobbies & Leisure",
    "Home Appliances",
    "Home Decor",
    "Lighting",
  ];

  const categoriesColumn4 = [
    "Mobility",
    "Movies, Games, Books & Music",
    "Musical Instruments",
    "Phones & Accessories",
    "Sports Equipment",
    "Travel & Holidays",
    "Tv, Audio & Cameras",
  ];

  // Handle category hover event
  const handleMouseEnter = (categoryName) => {
    setActiveCategory(categoryName);
  };

  // Handle category click event
  const handleClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div
      className="fixed top-[4.5rem] left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg p-6"
      style={{ width: "100%", display: "block" }}
    >
      <div className="container mx-auto grid grid-cols-4 gap-6">
        {/* Column with Icons and larger text/icons */}
        <ul className="text-lg md:text-lg sm:text-xs text-gray-700">
          {categoriesColumn1.map((category, index) => (
            <li
              key={index}
              className="flex items-center cursor-pointer py-1 hover:text-green-600 group relative"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onClick={() => handleClick(category.name)}
            >
              <span className="mr-3 md:text-xl sm:text-xs text-xl text-gray-700 group-hover:text-green-600">
                {category.icon}
              </span>
              <span className="text-lg md:text-lg sm:text-xs text-gray-700 group-hover:text-green-600">{category.name}</span>
              {/* Arrow on hover */}
              <FaArrowRight className="absolute right-40 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-gray-500" />
            </li>
          ))}
        </ul>

        {/* Conditionally render motors items in 2 columns when "Motors" is selected */}
        {activeCategory === "Motors" && (
          <div className="col-span-3 grid grid-cols-2 gap-6">
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {motorsItems.slice(0, motorsItems.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {motorsItems.slice(motorsItems.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Conditionally render jobs items in 2 columns when "Jobs" is selected */}
        {activeCategory === "Jobs" && (
          <div className="col-span-3 grid grid-cols-2 gap-6">
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {jobsItems.slice(0, jobsItems.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {jobsItems.slice(jobsItems.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
  {activeCategory === "Property" && (
          <div className="col-span-3 grid grid-cols-4 gap-6">
            {propertyItems.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="w-[200px] h-[100px] object-cover rounded-lg mx-auto"
                />
                <p className="mt-2 md:text-sm text-gray-700 text-lg sm:text-xs font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
         {activeCategory === "Animals" && (
          <div className="col-span-3 grid grid-cols-4 gap-6">
            {animals.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="w-[200px] h-[100px] object-cover rounded-lg mx-auto"
                />
                <p className="mt-2 md:text-sm sm:text-xs text-gray-700 text-lg font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeCategory === "Events" && (
          <div className="col-span-3 grid grid-cols-2 gap-6">
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {events.slice(0, events.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {events.slice(events.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
         {activeCategory === "Adult" && (
          <div className="col-span-3 grid grid-cols-2 gap-6">
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {adults.slice(0, adults.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {adults.slice(adults.length / 2).map((item, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Other columns without icons */}
        {activeCategory !== "Motors" && activeCategory !== "Jobs" && activeCategory !== "Property" && activeCategory !== "Animals" && activeCategory !== "Events" && activeCategory !== "Adult" && (
          <>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {categoriesColumn2.map((category, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {category}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {categoriesColumn3.map((category, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {category}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-sm sm:text-xs text-gray-700">
              {categoriesColumn4.map((category, index) => (
                <li key={index} className="hover:text-green-600 cursor-pointer py-1">
                  {category}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}



