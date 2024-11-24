import React, { useState } from "react";
import logo from "../assests/logo.png";
import { FaVideo, FaCamera, FaPlusCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
const EnhancePlaceAd = () => {
  const [videoLink, setVideoLink] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleVideoChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files]);
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <>
    
    <HeaderSecond />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          {/* Step Progress */}
          <div className="flex justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full"> 1 </div>
              <span className="text-lg font-semibold text-green-500">Basic</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center"> 2 </div>
              <span className="text-lg">About</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center"> 3 </div>
              <span className="text-lg">Enhance</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center"> 4 </div>
              <span className="text-lg">Contact</span>
            </div>
          </div>

          {/* Main Form Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Enhance</h2>
            <p className="text-gray-600"> You are posting in: For Sale &gt; Agricultural &gt; Farming </p>
            <button className="text-green-600 hover:underline"> Change category </button>

          


            {/* Video Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-2"> Video (optional) </label>
              <div className="flex items-center space-x-2">
                <FaVideo className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Insert a YouTube link"
                  value={videoLink}
                  onChange={handleVideoChange}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <p className="text-gray-500 text-sm mt-1">Make sure your YouTube video has "public permissions" enabled.</p>
            </div>

            {/* Photos Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-2"> Photos (optional) </label>
              <div className="space-y-4">
                {photos.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`photo-${index}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => handleRemovePhoto(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border-2 border-gray-300 border-dashed p-6 text-center text-gray-500">
                    <FaCamera className="text-2xl mb-2" />
                    <p>Tap to edit</p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer text-blue-600 hover:underline">
                      Tap and drag to reorder
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <a href="/contactPlaceAd">
                <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600">
          <div className="space-y-2">
            <div className="space-x-4">
              <a href="/" className="hover:underline"> Home </a>
              <a href="/" className="hover:underline"> Contact us </a>
              <a href="/" className="hover:underline"> Terms and conditions </a>
            </div>
            <p>&copy; Friday Media Group Ltd, 80 East St, Brighton BN1 INF</p>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default EnhancePlaceAd;
