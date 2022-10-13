import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Ads.css";
import swal from "sweetalert";
//import { set } from "mongoose";




const AdddeliveryForm = () => {
  const [driver_Name, setdriver_Name] = useState("");
  const [Receviver_Name, setReceviver_Name] = useState("");
  const [delivery_date, setdelivery_date] = useState("");
  const [delivery_time, setdelivery_time] = useState("");
  const [delivery_status, setdelivery_status] = useState("");
  const [Receviver_phoneNo, setReceviver_phoneNo] = useState("");
  const [delivery_details, setdelivery_details] = useState("");
  const [special_Notices, setspecial_Notice] = useState("");
  const [Date, setDate] = useState("");
  const [signature, setsignature] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };



  //VALIDATION//
  const validate = () => {
    /*form validations*/
    const errors = {};
    const ne = /^[0-9\b]+$/;
    var re = /\S+@\S+\.\S+/;

    if (!driver_Name) {
      errors.driver_Name = "Driver Nameis required!";
    }

    if (!Receviver_Name) {
      errors.Receviver_Name = "Receviver Name is required!";
    }

    if (!delivery_date) {
      errors.delivery_date = "Delivery date is required!";
    }

    if (!delivery_time) {
      errors.delivery_time = "Delivery Time is required!";
    }

    if (!delivery_status) {
      errors.delivery_status = "Delivery status is required!";
    }

    if (!Receviver_phoneNo) {
        errors.Receviver_phoneNo = "Receviver phoneNo is required!";
    }

    if (!delivery_details) {
        errors.delivery_details = "Delivery Details is required!";
    }

    if (!special_Notices) {
        errors.special_Notices = "Special Notice is required!";
    }

    if (!Date) {
        errors.Date = "Date is required!";
    }

    if (!signature) {
        errors.signature = "Signature is required!";
    }

    return errors;
  };



//ISSUBMIT//
  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      sendData();
    }
  };
  const sendData = () =>{
        
   

    
    const newdelivery ={
        driver_Name,
        Receviver_Name,
        delivery_date,
        delivery_time,
        delivery_status,
        Receviver_phoneNo,
        delivery_details,
        special_Notices,
        Date,
        signature,
        
    }
    console.log(newdelivery);
    console.log(newdelivery);
    axios.post("http://localhost:8000/api/delivery/save", newdelivery).then((response) => {
     console.log(response.data);
  });
    
  swal({
    title: "DeliveryDetails Added Successfuly!",
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
  setdriver_Name ("Kumara Pathirana");
  setReceviver_Name ("Ananda");
  setdelivery_date ("13/10/2022")
  setdelivery_time ("04.50 p.m");
  setdelivery_status ("Dilivery done");
  setReceviver_phoneNo ("0715643891");
  setdelivery_details ("");
  setspecial_Notice ("");
  setDate ("12/10/2022");
  setsignature ("");

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
                  Add Delivery Report Details
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
                placeholder="Driver Name"
                required
                value={driver_Name}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdriver_Name(e.target.value);
                }}
              />
              <br/>
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.driver_Name}
              </p>
            </div>




            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Receviver Name  :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Receviver Name"
                required
                value={Receviver_Name}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setReceviver_Name(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Receviver_Name}
              </p>
            </div>




            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Delivery Date :</label></div>

              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Delivery Date"
                required
                value={delivery_date}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdelivery_date(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.delivery_date}
              </p>
            </div>



            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Delivery Time :</label></div>
              
              <input
                type="time"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Delivery Time"
                required
                value={delivery_time}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdelivery_time(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.delivery_time}
              </p>
            </div>



            <div class="form-group">
            <div class="d-flex justify-content-start"><label > Delivery Status :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Mention your Delivery Status in here"
                required
                value={delivery_status}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdelivery_status(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.delivery_status}
              </p>
            </div>

            

            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Receviver Pphone Number :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="07--------"
                required
                value={Receviver_phoneNo}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setReceviver_phoneNo(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Receviver_phoneNo}
              </p>
            </div>




            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Delivery Details :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Your delivery Details type in here"
                required
                value={delivery_details}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdelivery_details(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.delivery_details}
              </p>
            </div>




            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Special Notices :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Special Notices "
                required
                value={special_Notices}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setspecial_Notice(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.special_Notices}
              </p>
            </div>




            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Date :</label></div>

              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Date"
                required
                value={Date}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Date}
              </p>
            </div>




            <div class="form-group">
            <div class="d-flex justify-content-start"><label >Signature :</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Attache image of your signature "
                required
                value={signature}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setsignature(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.signature}
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
  </div>
  </div>

  );
};

export default AdddeliveryForm;