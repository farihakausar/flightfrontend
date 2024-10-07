import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MainPage from "./screens/MainPage";
import Sale from "./screens/Sale";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsAndConditions from "./screens/TermsAndConditions";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Testimonials from "./screens/Testimonials";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
