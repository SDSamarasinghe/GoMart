import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const AddComplaints  = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [category, setcategory] = useState("Select Category");
  const [Issue, setIssue] = useState("");
  const [files, setfiles] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const saveComplaint = async (e) => {
    e.preventDefault();
    const complaint = {
      fname,
      lname,
      date,
      email,
      category,
      Issue,
      files,
    };

    if (
      complaint.fname.length <= 0 ||
      complaint.lname.length <= 0 ||
      complaint.date.length <= 0 ||
      complaint.email.length <= 0 ||
      complaint.category.length <= 0 ||
      complaint.Issue.length <= 0 ||
      complaint.files.length <= 0

    ) {
      setErrors(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/Complaints/", complaint)
      .then((response) => {
        swal({
          title: "Complaint submited Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(``);
        });
      });
  };

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer" style={{width:"1654.250px" ,height:"100px", marginBottom:"20px", padding:"25px" }}>
        
        <div  style={{display:"block", }}>
          <a href="/Message/AddMessage" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px", fontWeight:"bolder" , borderBottom:"3px solid #248C78"}}>Leave a Message</a>
          <a href="/Complaints/AddComplaint" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px" , fontWeight:"bolder" }}>Submit a Complaint</a>
         
        </div>
    </div>
      <div className=" store-form-outer-layer">
        <h2 className="display-6"> Are There Any Complaints? </h2>
        <small id="emailHelp" className="form-text text-muted">
          Please fill out followng form with your complaint. We will review your request and follow up with you as soon as possible.
        </small>

        {errors && (
          <div className="text-danger mt-4 text-center">
            All the fields are required! Please fillout all the fields to submit the complaint.
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

            <div className="form-group mt-4">
              <label className="my-1">Date</label>
              <input
                type="date"
                className="form-control mb-2"
                value={date}
                placeholder="MM/DD/YY"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Email</label>
              <input
                type="email"
                className="emailHelp"
                aria-describedby="emailHelp"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>


            <div className="form-group mt-4">
              <label className="my-1" style={{paddingRight:"10px"}}>Category:  </label>
              {/* <input
                type="text"
                className="form-control mb-2"
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                placeholder="Category"
              /> */}
              <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      style={{backgroundColor:"#C2D0CE", borderColor:"#7EA8A0"}}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {category}
                    </button>
                   
                    <ul class="dropdown-menu">
                   
                      <li
                        onClick={(e) => {
                            setcategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                        Service
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                            setcategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                        Delivery
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                            setcategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                        Quality of the products
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                            setcategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                        Other
                        </a>
                      </li>
                     
                    </ul>
              <br />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Describe the issue:</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Type Here..."
                value={Issue}
                onChange={(e) => {
                  setIssue(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Upload your issue related files or images:</label>
              <input
                type="file"
                className="form-control"
                value={files}
                onChange={(e) => {
                  setfiles(e.target.value);
                }}
              />
            </div>


            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={saveComplaint}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComplaints;
