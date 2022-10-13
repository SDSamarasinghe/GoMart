import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Complaints.css";
import swal from "sweetalert";

const AddComplaints = () => {
  const [listOfComplaints, setListOfComplaints] = useState([]);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [category, setcategory] = useState("Select Category");
  const [Issue, setIssue] = useState("");
  const [files, setfiles] = useState("");
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

    if (!fname) {
      errors.fname = "First Name is required!";
    }
    if (!lname) {
      errors.lname = "Last Name is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    }
    if (!date) {
      errors.date = "Date is required!";
    }
    if (!category) {
      errors.category = "This field is required!";
    }

    if (!Issue) {
      errors.Issue = "This field is required!";
    }

    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createComplaint();
    }
  };

  const demo = () => {
    setfname("Sathmi");
    setlname("Probodha");
    setdate("04/08/2022");
    setemail("sathmi@gmail.com");
    setcategory("other");
    setIssue("Product didn't receive on time.");
    setfiles("file:///C:/Users/User/Desktop/sliit/Y3S1/SPM/SPM%20Evalution1-%20Interface%20Doc.pdf");
  };

  const createComplaint = () => {
    axios
      .post("http://localhost:8000/api/Complaints/", {
        fname,
        lname,
        date,
        email,
        category,
        Issue,
        files,
    
      })
      .then((response) => {
        setListOfComplaints([
          ...listOfComplaints,
          {
            fname,
            lname,
            date,
            email,
            category,
            Issue,
            files,
          },
        ]);
      });
    swal({
      title: "Complaint Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.href = "/Feedbacks/FeedbackView";
    });
  };

  return (
    <div style={{ width: "1150px", marginLeft:"300px" }}>
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          marginBottom: "40px",
          marginTop: "200px",
          border: "2px solid #078282",
          
        }}
      >
        <div style={{ backgroundColor: "black" }}></div>
        <div
          className="col-md-8 mt-4 mx-auto"
          style={{
            height:"1150px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            backgroundColor: "white",
            borderRadius: "30px",
            paddingBottom: "10px",
            margin: "2px",
            
          }}
        >
          <center>
            <div style={{ marginLeft: "-500px" }}>
              <h4
                style={{
                  color: "#111",
                  fontFamily: "Helavetica Neue",
                  fontSize: "50px",
                  fontWeight: "bold",
                  letterSpacing: "-1px",
                  marginBottom: "50px",
                  lineHeight: "1",
                  textAlign: "center",
                }}
              >
                <span
                  className="p-1 px-4 rounded text-white"
                  style={{ backgroundColor: "#F5AF18", marginLeft: "480px" }}
                >
                  COMPLAINTS
                </span>
              </h4>
            </div>
            <div>
            <div className="form-group" style={{ float: "left" }}>
            <div style={{float: "left"}}><label for="fname">First Name:</label></div>
            <br></br>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="First Name"
                required
                value={fname}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={(e) => {
                  setfname(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.fname}
              </p>
            </div>

            <div class="form-group" style={{float: "right"}}>
            <div style={{float: "left"}}><label for="lname">Last Name:</label></div>
            <br></br>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Last Name"
                required
                value={lname}
                style={{ color: "rgba(0, 0, 0, 0.7)",width:"250px" }}
                onChange={(e) => {
                  setlname(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.lname}
              </p>
            </div></div>
            
            <div class="form-group" style={{float: "left"}}>
            <div ><label style={{float: "left"}} for="date">Date:</label></div>
              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                // placeholder="DD/MM/YY"
                required
                value={date}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.date}
              </p>
            </div>

            <div class="form-group"  style={{float: "right"}}>
            <div style={{float: "left"}}><label for="email">Email:</label></div>
            <br></br>
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Email"
                required
                value={email}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.email}
              </p>
            </div>


            <div className="form-group" style={{ float: "left" }}>
            <div style={{float: "left", paddingRight: "15px"}}><label for="category">Category:  <t/></label></div>
                  {/* <p style={{float:"left",marginLeft:"185px",marginRight:"100px",marginTop:"10px",color: "rgba(0, 0, 0, 0.6)",fontFamily:"sans-serif",fontWeight:"lighter"}}>Category</p> */}
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
                      {/* <li
                        onClick={(e) => {
                            setcategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          Other
                        </a>
                      </li> */}
                    </ul>
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.category}
              </p>
            </div>


           

            <div class="form-group"  style={{float: "left", alignItems:"baseline"}}>
            <div style={{float: "left", textAlign: "left"}}><label for="issue">Describe the issue:</label></div>
            <br></br>
              <textarea
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Type Here..."
                required
                rows="10"
                cols="30"
                value={Issue}
                style={{ color: "rgba(0, 0, 0, 0.7)", height: "99px", width:"508px", paddingLeft:"12px" }}
                onChange={(e) => {
                  setIssue(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Issue}
              </p>
            </div>

            <div class="form-group">
            <div style={{float: "left"}}><label for="file">Upload your issue related files or images:</label></div>
              <input
                type="file"
                class="form-control"
                id="formGroupExampleInput2"
                value={files}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setfiles(e.target.value);
                }}
              />
              <br />
              {/* <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.image}
              </p> */}
            </div>

            
            <div style={{width:"100px"}}>
              <Link to="/Feedbacks/FeedbackView">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn btn-success"
                  style={{ backgroundColor: "#F5AF18", float:"left" }}
                >
                  Submit
                </button>
              </Link>{" "}
              <button
                type="button"
                onClick={demo}
                class="btn store-order-form-button my-4"
                style={{float:"left" }}

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
        {/* <img
          width="400"
          height="400"
          style={{marginTop:"170px",marginRight:"140px"}}
          src={product}
        /> */}
      </div>
    </div>
  );
};

export default AddComplaints;
