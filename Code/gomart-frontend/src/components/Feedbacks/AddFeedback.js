import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Feedbacks.css";
import swal from "sweetalert";
import Feedback from "react-bootstrap/esm/Feedback";

const FeedbacksForm = () => {
  const [listOfFeedbacks, setListOfFeedbacks] = useState([]);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [pro_qua_fb, setpro_qua_fb] = useState("");
  const [deli_dri_rate, setdeli_dri_rate] = useState("");
  const [deli_tme_rate, setdeli_tme_rate] = useState("");
  const [recommendation, setrecommendation] = useState("");
  const [suggestions, setsuggestions] = useState("");
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

    if (!date) {
      errors.date = "Date is required!";
    }

    if (!email) {
      errors.email = "Email is required!";
    }

    // if (!pro_qua_fb) {
    //   errors.pro_qua_fb = "This field is required!";
    // }

    // if (!ne.test(price)) {
    //   errors.price = "This priceRate is not valid!";
    // }
    if (!deli_dri_rate) {
      errors.deli_dri_rate = "This field is required!";
    }

    if (!deli_tme_rate) {
      errors.deli_tme_rate = "This field is required!";
    }

    // if (!recommendation) {
    //     errors.recommendation = "This field is required!";
    //   }
     
    if (!suggestions) {
        errors.suggestions = "suggestions is required!";
      }

    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createFeedback();
    }
  };

  const demo = () => {
    setfname("Sathmi");
    setlname("Probodha");
    setdate("04/08/2022");
    setemail("sathmi@gmail.com");
    setpro_qua_fb("description");
    setdeli_dri_rate("Friendly");
    setdeli_tme_rate("Good");
    setrecommendation("description");
    setsuggestions("Realy appriciated.");
  };

  const createFeedback = () => {
    axios
      .post("http://localhost:8000/api/Feedbacks/", {
        fname,
        lname,
        date,
        email,
        pro_qua_fb,
        deli_dri_rate,
        deli_tme_rate,
        recommendation,
        suggestions,
      })
      .then((response) => {
        setListOfFeedbacks([
          ...listOfFeedbacks,
          {
            fname,
            lname,
            date,
            email,
            pro_qua_fb,
            deli_dri_rate,
            deli_tme_rate,
            recommendation,
            suggestions,
          },
        ]);
      });
    swal({
      title: "Feedback Added Successfuly!",
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
                  Give Your Feedback 
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
            <div style={{float: "left"}}><label for="fname">Last Name:</label></div>
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

            

            {/* <div class="form-group" style={{width:"600px",marginLeft:"-200px"}}>
              <div className="row mb-3" >
                <div className="col-sm-10">
                  <div class="dropdown">
                  <p style={{float:"left",marginLeft:"185px",marginRight:"100px",marginTop:"10px",color: "rgba(0, 0, 0, 0.6)",fontFamily:"sans-serif",fontWeight:"lighter"}}>Category</p>
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      style={{backgroundColor:"#078282"}}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {category}
                    </button>
                   
                    <ul class="dropdown-menu">
                   
                      <li
                        onClick={(e) => {
                          setCategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          Mobile
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                          setCategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          PowerBanks
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                          setCategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          Camera
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                          setCategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          Handfree
                        </a>
                      </li>
                      <li
                        onClick={(e) => {
                          setCategory(e.target.textContent);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          Other
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.category}
              </p>
            </div> */}

            <div class="form-group"  style={{float: "right"}}>
            <div style={{float: "left"}}><label for="fname">Email:</label></div>
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

            <div class="form-group_radio1">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">Please provide your feedback on the quality of the products you received:</label></div>
            <br></br>
            <div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >
            <input type="radio" id="radiogroup1" name="pro_qua_fb" value="Excellent" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="pro_qua_fb">Excellent</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" value="Very Good" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="pro_qua_fb">Very Good</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" value="Good" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="pro_qua_fb">Good</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" value="Average" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="pro_qua_fb">Average</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" value="Poor" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="pro_qua_fb">Poor</label><br></br>
            </div>
              {/* <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Image"
                required
                value={pro_qua_fb}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setpro_qua_fb(e.target.value);
                }}
              /> */}
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.pro_qua_fb}
              </p>
            </div>

            <div class="form-group">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">How would you rate the Friendliness of the delivery driver?</label></div>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                // placeholder="Tharu danna ona"
                required
                value={deli_dri_rate}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdeli_dri_rate(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.deli_dri_rate}
              </p>
            </div>

            <div class="form-group">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">How would you rate the delivery time?</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                // placeholder="Thru danna ona"
                required
                value={deli_tme_rate}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setdeli_tme_rate(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.deli_tme_rate}
              </p>
            </div>

            <div class="form-group_radio">
            <div style={{float: "left", textAlign: "left"}}><label for="recommendation">Would you recomend us to your friends?</label></div>
            <br></br>  
            <div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >
            <input type="radio" id="radiogroup" name="recommendation" value="recommendation" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="recommendation">Yes, Sure</label><br></br>
            <input type="radio" id="radiogroup" name="recommendation" value="recommendation" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="recommendation">Hmm, May be</label><br></br>
            <input type="radio" id="radiogroup" name="recommendation" value="recommendation" onChange={(e) => {setdeli_tme_rate(e.target.value);}}/>
            <label for="recommendation">Not at all</label><br></br>
            </div>
              {/* <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Image"
                required
                value={recommendation}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setrecommendation(e.target.value);
                }}
              /> */}
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.recommendation}
              </p>
            </div>
            <br/><br/>

            <div class="form-group"  style={{float: "left", alignItems:"baseline"}}>
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">Any suggestions for us?</label></div>
            <br></br>
              <textarea
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Type Here..."
                required
                rows="10"
                cols="30"
                value={suggestions}
                style={{ color: "rgba(0, 0, 0, 0.7)", height: "99px", width:"508px", paddingLeft:"12px" }}
                onChange={(e) => {
                  setsuggestions(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.suggestions}
              </p>
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>

            {/* <div class="form-group">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">Any suggestions for us?</label></div>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Type Here..."
                required
                value={suggestions}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setsuggestions(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.suggestions}
              </p>
            </div> */}

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
                id="product-details-buy-now"
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
        <img
          width="400"
          height="400"
          style={{marginTop:"170px",marginRight:"140px"}}
          src={Feedback}
        />
      </div>
    </div>
  );
};

export default FeedbacksForm;
