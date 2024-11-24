import React, { useState, useEffect, useRef } from "react";
import logo from "../assests/LOGOOO.jpg";
import { FaEnvelope, FaMusic } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import SavedModal from "../screens/SavedModal";
import ServiceModal from "../screens/ServicsModal";
import CategoriesModal from "../screens/CategoriesModal";

export default function Header() {
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false)

  const categoriesTimeout = useRef(null);
  const servicesTimeout = useRef(null);
  const savedTimeout = useRef(null);

  const openCategoriesModal = () => {
    clearTimeout(categoriesTimeout.current);
    setShowCategoriesModal(true);
  };

  const closeCategoriesModal = () => {
    categoriesTimeout.current = setTimeout(() => setShowCategoriesModal(false), 200);
  };

  const openServiceModal = () => {
    clearTimeout(servicesTimeout.current);
    setShowServiceModal(true);
  };

  const closeServiceModal = () => {
    servicesTimeout.current = setTimeout(() => setShowServiceModal(false), 200);
  };
  const openSavedModal = () => {
    clearTimeout(savedTimeout.current);
    setShowSavedModal(true);
    };
const closeSavedModal = () => {
  savedTimeout.current = setTimeout(() => setShowSavedModal(false), 200);}
  // Clear timeouts on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(categoriesTimeout.current);
      clearTimeout(servicesTimeout.current);
      clearTimeout(savedTimeout.current);
    };
  }, []);

  const isModalOpen = showCategoriesModal || showServiceModal || showSavedModal;

  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex items-center mr-5">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          <nav className="flex lg:w-2/5 flex-wrap items-center text-base">
            <div
              className="relative"
              onMouseEnter={openCategoriesModal}
              onMouseLeave={closeCategoriesModal}
            >
              <a className="nav-item mr-5 cursor-pointer">Categories</a>
              {showCategoriesModal && (
                <div
                  onMouseEnter={openCategoriesModal}
                  onMouseLeave={closeCategoriesModal}
                >
                  <CategoriesModal show={showCategoriesModal} />
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={openServiceModal}
              onMouseLeave={closeServiceModal}
            >
              <a className="nav-item mr-5 cursor-pointer">Services</a>
              {showServiceModal && (
                <div
                  onMouseEnter={openServiceModal}
                  onMouseLeave={closeServiceModal}
                >
                  <ServiceModal show={showServiceModal} />
                </div>
              )}
            </div>

            <a className="nav-item mr-5 cursor-pointer">Blog</a>
            <div
              className="relative"
              onMouseEnter={openSavedModal}
              onMouseLeave={closeSavedModal}
            >
              <a className="nav-item cursor-pointer">Saved</a>
              {showSavedModal && (
                <div
                  onMouseEnter={openSavedModal}
                  onMouseLeave={closeSavedModal}
                >
                  <SavedModal show={showSavedModal} />
                </div>
              )}
            </div>
            
           
          </nav>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <div className="flex items-center">
              <a href="#" className="mr-5 hover:text-gray-900">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="#" className="mr-5 hover:text-gray-900">
                <FaMusic className="text-2xl" />
              </a>
              {/* <button href="/placeAd" className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base text-white">
                Place adddd
                <FiPlus className="w-4 h-4 ml-1" />
              </button> */}
              <a
  href="/descriptionPlaceAd"
  className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base text-white"
>
  Place Your Ad 
  <FiPlus className="w-4 h-4 ml-1" />
</a>

            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      <style jsx>{`
        .nav-item {
          position: relative;
          padding-bottom: 4px;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -87%;
          width: 100%;
          height: 4px;
          background-color: green;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: bottom right;
        }

        .nav-item:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </>
  );
}
