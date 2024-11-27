import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import axios from "axios"; // Import axios for HTTP requests

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading indicator

  const navigate = useNavigate(); // Used to navigate after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading state
    setError(""); // Clear previous error messages

    // Collect login data
    const loginData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      // Make the API call to the backend
      const response = await axios.post(
        "http://your-backend-api-url/login",
        loginData
      );

      if (response.data.success) {
        // Store the token in local storage (or in state)
        localStorage.setItem("token", response.data.user.token);

        // Optionally, redirect the user to another page (e.g., dashboard)
        navigate("/dashboard"); // Replace with the actual route to redirect after login

        // Optionally, store the user details (for display or other usage)
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        // Handle failed login (incorrect credentials or other issues)
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-lg focus:outline-none hover:bg-blue-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Display Error Message */}
          {error && (
            <div className="mt-4 text-center text-sm text-red-600">{error}</div>
          )}

          {/* Sign-up Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/registerMain"
              className="text-blue-500 hover:text-blue-700"
            >
              Sign Up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
