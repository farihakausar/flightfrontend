import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MainPage from "./screens/MainPage";
import Sale from "./screens/Sale";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsAndConditions from "./screens/TermsAndConditions";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Testimonials from "./screens/Testimonials";
import Blog from "./screens/Blog";
import BlogCategory from "./screens/BlogCategory";
import GetSingleBlog from "./screens/GetSingleBlog";
import MyAccount from "./screens/MyAccount";
import DashBoard from "./screens/DashBoard";
import FavAds from "./screens/FavAds";
import ManageAccounts from "./screens/ManageAccounts";
import SavedSearch from "./screens/SavedSearch";
import Receipts from "./screens/Receipts";
import BusinessProfile from "./screens/BusinessProfile";
import PaymentMethods from "./screens/PaymentMethods";
import ManageMyAds from "./screens/ManageMyAds";
import Messeges from "./screens/Messeges";
import Logout from "./screens/Logout";
import Login from "./screens/Login";
import Regsiter from "./screens/Regsiter";

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
          <Route path="/blogAll" element={<Blog />} />
          <Route path="/blogcat" element={<BlogCategory />} />
          <Route path="/singleBlog/:id" element={<GetSingleBlog />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/favads" element={<FavAds />} />
          <Route path="/accounts" element={<ManageAccounts />} />
          <Route path="/savedsearches" element={<SavedSearch />} />
          <Route path="/report" element={<Receipts />} />
          <Route path="/businessprofile" element={<BusinessProfile />} />
          <Route path="/paymentmethods" element={<PaymentMethods />} />

          <Route path="/messages" element={<Messeges />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/manageAds" element={<ManageMyAds />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regsiter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
