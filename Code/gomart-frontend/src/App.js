import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

//components
import Footer from "./components/Footer";
import Navigator from "./components/Navigator/Navigator";
import ProductCatelog from "./components/Products/ProductsCatelog";
import AdvertiserForm from "./components/Products/AdvertiserForm";
import AdminRegistration from "./components/Products/AdminRegistration";
import EditAd from "./components/Products/EditAd";
import AdminViewAds from "./components/Products/AdminViewAds";
import DisplayAd from "./components/Products/DisplayAd";


import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";

import ReportGenPage from "./components/Products/ReportGenPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator/>
          <Routes>
            <Route path="/" element={<ProductCatelog />} />
            <Route path="/Product/adform" element={<AdvertiserForm />} />
            <Route path="/Product/adminReg" element={<AdminRegistration />} />
            <Route path="/Product/edit/:id/:name/:brand/:price/:category/:smallDesc/:image" element={<EditAd />}
        />
            <Route path="/Product/admin" element={<AdminViewAds />} />
            <Route path="/Product/Ad/:id/:name/:brand/:price/:category/:smallDesc/:image" element={<DisplayAd />}
        />
        <Route path="/Product/:id" element={<DisplayAd />} />

            {/* Users */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/profile" element={<Profile />} />


            <Route path="/Product/report" element={<ReportGenPage />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
