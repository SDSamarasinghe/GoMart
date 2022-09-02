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


import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator/>
          <Routes>
            <Route path="/test" element={<ProductCatelog />} />
            <Route path="/Product/adform" element={<AdvertiserForm />} />
            <Route path="/Product/adminReg" element={<AdminRegistration />} />
            <Route
          path="/Product/edit/:id/:name/:brand/:category/:image/:price/:smallDesc"
          element={<EditAd />}
        />
            <Route path="/Product/admin" element={<AdminViewAds />} />

            {/* Users */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
