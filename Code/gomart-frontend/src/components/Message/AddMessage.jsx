import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const AddMessage  = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [messageDes, setMessageDes] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const saveMessage = async (e) => {
    e.preventDefault();
    const message = {
      fname,
      lname,
      email,
      messageDes,
    };

    if (
      message.fname.length <= 0 ||
      message.lname.length <= 0 ||
      message.email.length <= 0 ||
      message.messageDes.length <= 0 

    ) {
      setErrors(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/message", message)
      .then((response) => {
        swal({
          title: "Message Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(`/store/products/product/${response.data._id}`);
        });
      });
  };

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer" style={{width:"1654.250px" ,height:"100px", marginBottom:"20px", padding:"25px" }}>
        
        <div  style={{display:"block", }}>
          <a href="" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px", fontWeight:"bolder" , borderBottom:"3px solid #248C78"}}>Leave a Message</a>
          <a href="" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px" , fontWeight:"bolder" }}>Submit a Complaint</a>
         
        </div>
    </div>


      <div className=" store-form-outer-layer">
        <h2 className="display-6"> How Can We Help You? </h2>
        <small id="emailHelp" className="form-text text-muted">
        If you have questions, inquiries or just want to get in touch, We look forword <br/> to hearing from you!
        </small>

        {errors && (
          <div className="text-danger mt-4 text-center">
            All the fields are required! Please fillout all the fields to send a message.
          </div>
        )}

        <div className="store-add-product-form-inner  py-4">
          <form>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">First Name</label>
              <input
                type="text"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="First Name"
                value={fname}
                onChange={(e) => {
                  setfname(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-4">
              <label className="my-1">Last Name</label>
              <input
                type="text"
                className="form-control mb-2"
                value={lname}
                onChange={(e) => {
                  setlname(e.target.value);
                }}
                placeholder="Last Name"
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Message</label>
              <textarea
                className="form-control"
                placeholder="Type Here..."
                value={messageDes}
                onChange={(e) => {
                  setMessageDes(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={saveMessage}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMessage ;
