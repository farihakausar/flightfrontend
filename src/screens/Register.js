import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios"; // Import axios

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [newsletter, setNewsletter] = useState(false); // For newsletter subscription
  const [business, setBusiness] = useState(false); // For business account
  const [error, setError] = useState(""); // To store error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading state
    setError(""); // Clear previous errors

    // Collect the data to send in the request
    const userData = {
      firstName,
      lastName,
      email,
      password,
      business,
      newsletter,
    };

    try {
      // Make the API call to the backend
      const response = await axios.post(
        "http://your-backend-api-url/signup",
        userData
      );

      if (response.data.success) {
        // Handle successful registration
        console.log("Registration successful:", response.data);
        // Optionally, redirect to another page, e.g., login page
      } else {
        // Handle failure (if any)
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={business}
                onChange={() => setBusiness(!business)}
                className="form-checkbox"
              />
              <span className="text-sm bg-green-100 text-green-600 p-1 rounded">
                Are you a business? Tick for a trade account today
              </span>
            </label>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={() => setNewsletter(!newsletter)}
                className="form-checkbox"
              />
              <span className="text-sm">
                I would like to receive the newsletter for savings opportunities
                and suggestions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-lg focus:outline-none hover:bg-blue-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Display Error Message */}
        {error && (
          <div className="mt-4 text-center text-sm text-red-600">{error}</div>
        )}

        {/* Sign-in Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
