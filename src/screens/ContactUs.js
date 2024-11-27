import React, { useState } from "react";
import HeaderSecond from "../components/HeaderSecond";
import Footer from "../components/Footer";
import axios from "axios"; // Import axios for HTTP requests

export default function ContactUs() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [advertId, setAdvertId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [success, setSuccess] = useState(""); // For success messages
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set loading state
    setError(""); // Reset any previous error messages
    setSuccess(""); // Reset success message

    // Form data to send to the backend
    const formData = {
      userEmail,
      userName,
      advertId,
      message,
    };

    try {
      const response = await axios.post(
        "http://your-backend-api-url/contactUs", // Replace with the actual backend API URL
        formData
      );

      if (response.data.message) {
        setSuccess(response.data.message); // Display success message
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setError(
        "An error occurred while sending your message. Please try again."
      ); // Display error message
    } finally {
      setIsSubmitting(false); // Stop loading state
    }
  };

  return (
    <>
      <HeaderSecond />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 border border-gray-300 p-6 rounded-lg shadow-md">
              {/* Name Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-bold"
                  >
                    What's your name?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 font-bold"
                  >
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Advert ID Field (Optional) */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="advert-id"
                    className="leading-7 text-sm text-gray-600 font-bold"
                  >
                    Advert ID (optional)
                  </label>
                  <input
                    type="text"
                    id="advert-id"
                    name="advert-id"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={advertId}
                    onChange={(e) => setAdvertId(e.target.value)}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 font-bold"
                  >
                    Leave your message here
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              {/* Newsletter Checkbox */}
              <div className="p-2 w-full flex items-center">
                <input
                  type="checkbox"
                  id="subscribe-newsletter"
                  name="subscribe-newsletter"
                  className="mr-2"
                />
                <label
                  htmlFor="subscribe-newsletter"
                  className="text-sm text-gray-600"
                >
                  Subscribe to Friday-Ad newsletter
                </label>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full flex justify-center">
                <button
                  type="submit"
                  className="w-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none rounded text-lg text-center"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>

              {/* Error or Success Message */}
              {error && (
                <div className="text-center text-sm text-red-600 mt-4">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-center text-sm text-green-600 mt-4">
                  {success}
                </div>
              )}

              {/* Privacy Policy Link */}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  Please see our{" "}
                  <a href="/privacy-policy" className="text-indigo-500">
                    Privacy Policy
                  </a>{" "}
                  for how we use and store your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
