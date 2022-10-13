import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Ads.css";
import swal from "sweetalert";
//import product from "./img/add-product.png";

const AddOrderForm = () => {
  const [ItemList, setItemList] = useState([{"item":"","quantity":0, "price":0}]);
  const [OrderID, setOrderID] = useState("");
  const [OrderDate, setOrderDate] = useState("");
  const [DespatchDate, setDespatedDate] = useState("");
  const [DeliveryMethod, setDeliveryMethod] = useState("");
  const [Remarks, setRemarks] = useState("");
  // const [image, setImg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };
  const validate = () => {
    /*form validations*/
    const errors = {};
    const ne = /^[0-9\b]+$/;
    var re = /\S+@\S+\.\S+/;

    if (!OrderID) {
      errors.OrderID = "Order ID is required!";
    }

    if (!OrderDate) {
      errors.OrderDate = "Order Date is required!";
    }

    if (!DespatchDate) {
      errors.DespatchDate = "Despatch Date is required!";
    }

    if (!DeliveryMethod) {
      errors.DeliveryMethod = "Delivery Method is required!";
    }

    if (!Remarks) {
      errors.Remarks = "Remarks is required!";
    }

    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      sendData();
    }
  };
  const sendData = () =>{
        
   
    
    const newOrder ={
        OrderID,
        OrderDate,
        DespatchDate,
        DeliveryMethod,
        Remarks
    }
    console.log(newOrder);
    console.log(newOrder);
    axios.post("http://localhost:8000/api/order/save", newOrder).then((response) => {
     console.log(response.data);
  });
    
  swal({
    title: "Order Details Added Successfuly!",
    icon: "success",
    confirmButtonText: "OK",
  }).then(function () {
    // Redirect the user
    window.location.href = "/order/viewdeleteorder";
  }).catch((err)=>{
        alert(err);
    })

}

const demo = () => {
  setOrderID("Samsung S20");
  setOrderDate("2022-09-15");
  setDespatedDate("2022-09-18");
  setDeliveryMethod("Local");
  setRemarks("-");
  setItemList([
    {"item":"Samsung A52","quantity":20, "price":200000},
    {"item":"Iphone 13 pro","quantity":3, "price":400000000},
    {"item":"Huawei HandFree", "quantity":14,"price":28000}
  ]);
  
}

  return (
   
<div
         className="col-md-10 mt-6 mx-auto"
         style={{
           marginBottom: "40px",
           marginTop: "100px",
           border: "2px solid #078282",
         }}
        >
        <div class="row">
            <div class="col-md-6 mt-2">
        <div class="col md-10">
      
        <h5
                style={{
                  color: "#111",
                  fontFamily: "Helavetica Neue",
                  fontSize: "60px",
                  fontWeight: "bold",
                  letterSpacing: "-1px",
                  marginBottom: "50px",
                  lineHeight: "1",
                  textAlign: "center",
                }}
              >
                <span
                  className="p-1 px-4 rounded text-white"
                  style={{ backgroundColor: "#078282", marginLeft: "4px" }}
                >
                  Add Order Details
                </span>
              </h5>
              <div class="justify-content-md-center">
                <div class="row">
                <div class="col-1"></div>
                
        <div class="col-9">
       
              <div className="form-group" style={{ marginBottom: "15px" }}>
            <div class="d-flex justify-content-start"><label >Order ID</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
                required
                value={OrderID}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setOrderID(e.target.value);
                }}
              />
              <br/>
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.OrderID}
              </p>
            </div>

            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Order Date  :</label></div>

              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Brand"
                required
                value={OrderDate}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setOrderDate(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.OrderDate}
              </p>
            </div>

            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Despatch Date  :</label></div>

              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Despated Date"
                required
                value={DespatchDate}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setDespatedDate(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.DespatchDate}
              </p>
            </div>

            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Delivery Method :</label></div>
              
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Delevey Method"
                requiredS
                value={DeliveryMethod}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setDeliveryMethod(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.DeliveryMethod}
              </p>
            </div>
            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Remarks :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Remarks"
                required
                value={Remarks}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setRemarks(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Remarks}
              </p>
            </div>
            <div>
              <Link to="/product">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn btn-success"
                  style={{ backgroundColor: "#078282" }}
                >
                  Submit
                </button>
              </Link>{" "}
              <button
                type="button"
                onClick={demo}
                class="btn store-order-form-button my-4"
              >
                Demo
              </button>
              
            </div>
            
            <div class="col-2"></div>
         
            </div>
           </div>
           </div>
        </div>
    </div>

    {/* start 2nd column */}
    <div class="col-md-6">
    <div class="table-responsive ">  
    <div class="col-9 ">
      <table class="table">
        <thead>
          <tr>
            
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
        {ItemList.map((item) =>(
                            <tr>
                                <td>{item.item}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
        </tbody>
      </table>
      </div> 
           
  </div>
    </div>
  </div>
 
  </div>

  );
};

export default AddOrderForm;