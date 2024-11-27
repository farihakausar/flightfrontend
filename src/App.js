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
import Help from "./screens/Help";
import MediaPack from "./screens/MediaPack";
import PlaceAd from "./screens/PlaceAd";
import Collections from "./screens/Collections";
import Basic from "./screens/Basic";
import WriteForus from "./screens/WriteForus";
import DescrtopnPlaceAd from "./screens/DescrtopnPlaceAd";
import EnhancePlaceAd from "./screens/EnhancePlaceAd";
import ContactPlaceAd from "./screens/ContactPlaceAd";
import PacakagePlaceAd from "./screens/PacakagePlaceAd";
import Register from "./screens/Register";
import Advertise from "./screens/Advertise";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/placeAd" element={<PlaceAd />} />
          <Route path="/descriptionPlaceAd" element={<DescrtopnPlaceAd />} />
          <Route path="/enhnacePlaceAd" element={<EnhancePlaceAd />} />
          <Route path="/contactPlaceAd" element={<ContactPlaceAd />} />
          <Route path="/pacakgePlaceAd" element={<PacakagePlaceAd />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/basic" element={<Basic />} />

          <Route path="/blogAll" element={<Blog />} />
          <Route path="/mediaPack" element={<MediaPack />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/blogcat" element={<BlogCategory />} />
          <Route path="/singleBlog" element={<GetSingleBlog />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/write-for-us" element={<WriteForus />} />
          <Route path="/favads" element={<FavAds />} />
          <Route path="/accounts" element={<ManageAccounts />} />
          <Route path="/savedsearches" element={<SavedSearch />} />
          <Route path="/report" element={<Receipts />} />
          <Route path="/businessprofile" element={<BusinessProfile />} />
          <Route path="/paymentmethods" element={<PaymentMethods />} />
          <Route path="/messages" element={<Messeges />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/manageAds" element={<ManageMyAds />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/registerMain" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
