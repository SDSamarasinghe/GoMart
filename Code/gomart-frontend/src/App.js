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

//loglist
import OrdLogin from "./components/Loglist/OrdLogin";
import PayLogin from "./components/Loglist/PayLogin";
import ProdLogin from "./components/Loglist/ProdLogin";

//Store Components
import StorePaymentScreen from "./components/Store/StorePaymentScreen";
import StoreAdminProductsEdit from "./components/Store/StoreAdminProductsEdit";
import StoreAdminProducts from "./components/Store/StoreAdminProducts";
import StoreAdminOrders from "./components/Store/StoreAdminOrders";
import StoreEditOrder from "./components/Store/StoreAdminOrders";
import StoreAdminPayments from "./components/Store/StoreAdminPayments";
import StoreHome from "./components/Store/StoreHome";
import StoreProducts from "./components/Store/StoreProducts";
import StoreProductsDetails from "./components/Store/StoreProductsDetails";
import StoreOrderForm from "./components/Store/StoreOrderForm";
import StoreAddProductForm from "./components/Store/StoreAddProductForm";
// import StoreOrderForm from "./components/Store/StoreOrderForm";

import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";

import ReportGenPage from "./components/Products/ReportGenPage";


/*Order*/
import Addorder from "./components/order/addorder";
import Viewdeleteorder from "./components/order/viewdeleteorder";
import EditOrder from "./components/order/editorder";
import EditOrder1 from "./components/order/editorder1";

/*shipping*/
import Addshipping from "./components/shipping/addshipping";
import Editshipping from "./components/shipping/editshipping";
import Viewdeleteshipping from "./components/shipping/viewdeleteshipping";
//import Shipping from "./components/shipping/addshipping1";

/* delivery */
import Adddelivery from "./components/delivery/adddelivery";         
import Editdelivery from "./components/delivery/editdelivery"; 
import Viewdeletedelivery from "./components/delivery/viewdeletedelivery"; 

import Adddelivery1 from "./components/delivery/Adddel";   
import ViewDelivery from "./components/delivery/viewdel";   



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator/>
          <Routes>
            <Route path="/prod" element={<ProductCatelog />} />
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
            <Route path="/profile" element={<Profile />} />

            {/* Loglist */}
            <Route path="/Prodlogin" element={<ProdLogin />} />
            <Route path="/Paylogin" element={<PayLogin />} />
            <Route path="/Orderlogin" element={<OrdLogin />} />

             {/* Store Routes */}
        <Route path="/" element={<StoreHome />} />
        <Route path="/edit" element={<StoreEditOrder />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route
          path="/store/products/product/:id"
          element={<StoreProductsDetails />}
        />
        <Route
          path="/store/order/store-order-create/:product/:quantity/:price"
          element={<StoreOrderForm />}
        />
        <Route
          path="/store/order/payment/:orderId"
          element={<StorePaymentScreen />}
        />
        <Route
          path="/store/product/add-product"
          element={<StoreAddProductForm />}
        />
        <Route
          path="/store/store-admin-products"
          element={<StoreAdminProducts />}
        />
        <Route
          path="/store/store-admin-orders"
          element={<StoreAdminOrders />}
        />
        <Route
          path="/store/store-admin-payments"
          element={<StoreAdminPayments />}
        />
        <Route
          path="/store/store-admin-products/edit/:pid"
          element={<StoreAdminProductsEdit />}
        />


            <Route path="/Product/report" element={<ReportGenPage />} />

            {/* Order */}
           <Route path="/order/addorder" element={<Addorder />} />
          <Route path="/order/viewdeleteorder" element={< Viewdeleteorder />}/>
          <Route path="/order/editorder/:id" element={<EditOrder />} />
          <Route path="/order/editorder" element={<EditOrder />} />
          <Route path="/order/editorder1" element={<EditOrder1 />} />

          {/* Shipping */}
          <Route path="/shipping/addshipping" element={<Addshipping />}></Route> 
          <Route path="/shipping/editshipping" element={<Editshipping />}/>
          <Route path="/shipping/viewdeleteshipping" element={< Viewdeleteshipping />}/>

          {/* delivery */}
          <Route path="/delivery/adddelivery" element={<Adddelivery />}></Route>           
          <Route path="/delivery/editdelivery" element={<Editdelivery />}></Route> 
          <Route path="/delivery/viewdeletedelivery" element={<Viewdeletedelivery />}></Route> /

          <Route path="/delivery/Adddel" element={<Adddelivery1 />}></Route>
          <Route path="/delivery/viewdel" element={<ViewDelivery />}></Route>


          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
