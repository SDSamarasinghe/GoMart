import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Ads.css";
import swal from "sweetalert";

const Shipping = () => {
  const [Receviver_Name, setReceviver_Name] = useState([]);
  const [Receviver_Address, setReceviver_Address] = useState("");
  const [Receviver_phoneNo, setReceviver_phoneNo] = useState("");
  const [conformation, setconformation] = useState("");
  const [payment_method, setpayment_method] = useState("");
  const [description, setdescription] = useState("");
  const [instruction, setinstruction] = useState("");
  const [ListOfshipping, setListOfshipping] = useState("");
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

    if (!Receviver_Name) {
      errors.Receviver_Name = "Receviver Name is required!";
    }

    if (!Receviver_Address) {
      errors.brand = "Receviver Address is required!";
    }

    if (!Receviver_phoneNo) {
      errors.Receviver_phoneNo = "Receviver phoneNo is required!";
    }

    if (!conformation) {
        errors.conformation = "conformation is required!";
      }


      if (!payment_method) {
        errors.payment_method = "payment method is required!";
      }


    if (!description) {
      errors.description= "description is required!";
    }

    if (!instruction) {
      errors.instruction = "instruction is required!";
    }

    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 ) {
      sendData();
    }
  };

  const demo = () => {
    setReceviver_Name("Randika Batawala");
    setReceviver_Address("317/C Sirilena waththa,Kandana.Western 11320");
    setReceviver_phoneNo("0729864683");
    setconformation("randhika@gmail.com");
    setpayment_method("Cash");
    setdescription("Delivery drivers collect items and transport them to their destinations.");
    setinstruction("Our apartment is located at the back of the building");
    
  };

  function sendData(e){
    
    e.preventDefault();
    
    const newShippment ={
      Receviver_Name,
      Receviver_Address,
      Receviver_phoneNo,
      conformation,
      payment_method,
      description,
      instruction,
    }

    axios.post("http://localhost:8000/api/shipping/save", newShippment).then((response) => {
      setListOfshipping([
        ...ListOfshipping,
        {
          Receviver_Name,
          Receviver_Address,
          Receviver_phoneNo,
          conformation,
          payment_method,
          description,
          instruction,
        },
      ]);
    });
  swal({
    title: "shipping data Added Successfuly!",
    icon: "success",
    confirmButtonText: "OK",
  }).then(function () {
    // Redirect the user
    window.location.href = "/shipping/viewdeleteshipping";
  }).catch((err)=>{
        alert(err);
    })
  
}
  
  const createAd = () => {
    axios
      .post("http://localhost:8000/api/shipping/save", {
        Receviver_Name,
        Receviver_Address,
        Receviver_phoneNo,
        conformation,
        payment_method,
        description,
        instruction,
      })
      .then((response) => {
        setListOfshipping([
          ...ListOfshipping,
          {
            Receviver_Name,
            Receviver_Address,
            Receviver_phoneNo,
            conformation,
            payment_method,
            description,
            instruction,
          },
        ]);
      });
    swal({
      title: "shipping deta Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.href = "/";
    });
  };

  

 return (

  
    <div style =  {{ width: "1150px" }}>
      <div
      
        className="col-md-8 mt-4 mx-auto"
        style=  {{
          marginBottom: "40px",
          marginTop: "200px",
          //marginRight:"2000px",
          border: "2px solid #078282",
        }}
      >
        <div style={{ backgroundColor: "black" }}></div>
        <div
          className="col-md-8 mt-4 mx-auto"
          style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            backgroundColor: "white",
            borderRadius: "30px",
            paddingBottom: "10px",
            margin: "2px",
            margin: "auto",
            
          }}
        >
          <center>
            <div style={{ marginLeft: "-500px" }}>
              <h4
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
                  style={{ backgroundColor: "#078282", marginLeft: "430px" }}
                >
                  Add Shipping Details
                </span>
              </h4>
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
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
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Receviver Address"
                required
                value={Receviver_Address}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setReceviver_Address(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Receviver_Address}
              </p>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Receviver phone Number"
                required
                value={Receviver_Address}
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
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Order Conformation"
                required
                value={conformation}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setconformation(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.conformation}
              </p>
            </div>


            {/* <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Payment method"
                required
                value={payment_method}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setpayment_method(e.target.value);
                }}
              />


              
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.payment_method}
              </p>
            </div> */}

<div class="form-group_radio">

<div style={{float: "left", textAlign: "left"}}><label for="recommendation">Payment Method</label></div>

<br></br>  

<div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >

<input type="radio" id="radiogroup" name="recommendation" value="recommendation"/>

<label for="recommendation">Cash</label><br></br>

<input type="radio" id="radiogroup" name="recommendation" value="recommendation"/>

<label for="recommendation">Credit Card</label><br></br>

<input type="radio" id="radiogroup" name="recommendation" value="recommendation"/>

<label for="recommendation">Bank Transfer</label><br></br>

</div></div>


            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Delivery Description"
                required
                value={description}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.description}
              </p>
            </div>


            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Special Instruction"
                required
                value={instruction}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setinstruction(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.instruction}
              </p>
            </div>

            
            <div>
              <Link to="/shipping">
                {" "}
                <button
                  type="button"
                  onClick={sendData}
                  class="btn btn-success"
                  style={{ backgroundColor: "#078282" }}
                >
                 Deliver the Order

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
          </center>
        </div>
      </div>
      <div
        style={{
          float: "right",
          marginTop: "-580px",
          marginRight: "-550px",
          border: "3px solid #FFFFFF",
        }}
      >
       
      </div>
    </div>
  );
}

export default Shipping;
