import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './Context/ContextProvider.js'



const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const { setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        
        fname: "",
        lname: "",
        date: "",
        email: "",
        pro_qua_fb: "",
        deli_dri_rate: "",
        deli_tme_rate: "",
        recommendation: "",
        suggestions: "",
    });

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/api/Feedbacks/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.AddFeedback);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.AddFeedback)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {
            fname,
            lname,
            date,
            email,
            pro_qua_fb,
            deli_dri_rate,
            deli_tme_rate,
            recommendation,
            suggestions,
        } = inpval;

        const res2 = await fetch(`http://localhost:8000/api/Feedbacks/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                fname,
                lname,
                date,
                email,
                pro_qua_fb,
                deli_dri_rate,
                deli_tme_rate,
                recommendation,
                suggestions,            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to  edit that data?");

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            alert("Data added succesfully!");
            setUPdata(data2);
        }

    }



    
return(
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
                  Edit Feedback 
                </span>
              </h4>
            </div>
            <div>
                <form className="needs-validation" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>First Name:</label>
                        <input type="text"
                        className="form-control"
                        name="fname"
                        // placeholder="Enter contract ID"
                        defaultValue={inpval.fname}
                        onChange={setdata}/>
                    </div>

                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Last Name:</label>
                        <input type="text"
                        className="form-control"
                        name="lname"
                        // placeholder="Enter Site Location"
                        defaultValue={inpval.lname}
                        onChange={setdata}/>
                    </div>
                    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date:</label>
                        <input type="date"
                        className="form-control"
                        name="date"
                        // placeholder="Enter Email"
                        defaultValue={inpval.date}
                        onChange={setdata}/>
                    </div>

                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email:</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        // placeholder="Enter Expected Budget"
                        defaultValue={inpval.email}
                        onChange={setdata}/>
                    </div>

                    <div class="form-group_radio1">
                        <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">Please provide your feedback on the quality of the products you received:</label></div>
                        <br></br>
                        <div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >
                        <input type="radio" id="radiogroup1" name="pro_qua_fb" value={inpval.pro_qua_fb} onChange={setdata}/>
                                <label for="pro_qua_fb">Excellent</label><br></br>
                        <input type="radio" id="radiogroup1" name="pro_qua_fb" value={inpval.pro_qua_fb} onChange={setdata}/>
                                <label for="pro_qua_fb">Very Good</label><br></br>
                        <input type="radio" id="radiogroup1" name="pro_qua_fb" value={inpval.pro_qua_fb} onChange={setdata}/>
                                <label for="pro_qua_fb">Good</label><br></br>
                        <input type="radio" id="radiogroup1" name="pro_qua_fb" value={inpval.pro_qua_fb} onChange={setdata}/>
                                <label for="pro_qua_fb">Average</label><br></br>
                        <input type="radio" id="radiogroup1" name="pro_qua_fb" value={inpval.pro_qua_fb} onChange={setdata}/>
                                <label for="pro_qua_fb">Poor</label><br></br>
                        </div></div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>How would you rate the Friendliness of the delivery driver?</label>
                        <input type="text"
                        className="form-control"
                        name="deli_dri_rate"
                        // placeholder="Enter Expected Start Date"
                        defaultValue={inpval.deli_dri_rate}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>How would you rate the delivery time?</label>
                        <input type="text"
                        className="form-control"
                        name="deli_tme_rate"
                        // placeholder="Enter Expected End Date"
                        defaultValue={inpval.deli_tme_rate}
                        onChange={setdata}/>
                    </div>

                    <div class="form-group_radio">
                        <div style={{float: "left", textAlign: "left"}}><label for="recommendation">Would you recomend us to your friends?</label></div>
                        <br></br>  
                        <div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >
                        <input type="radio" id="radiogroup" name="recommendation" value={inpval.recommendation} onChange={setdata}/>
                        <label for="recommendation">Yes, Sure</label><br></br>
                        <input type="radio" id="radiogroup" name="recommendation" value={inpval.recommendation} onChange={setdata}/>
                        <label for="recommendation">Hmm, May be</label><br></br>
                        <input type="radio" id="radiogroup" name="recommendation" value={inpval.recommendation} onChange={setdata}/>
                        <label for="recommendation">Not at all</label><br></br>
                        </div>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Any suggestions for us?</label>
                        <textarea type="text"
                        className="form-control"
                        name="suggestions"
                        placeholder="Enter Breif description of Requirements"
                        defaultValue={inpval.suggestions}
                        onChange={setdata}/>
                    </div>

                    {/* <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Expected Output Images :</label>
                        <input type="text"
                        className="form-control"
                        name="expectedOutputImagelinks"
                        placeholder="Enter Expected Output Images"
                        defaultValue={inpval.expectedOutputImagelinks}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Prefered Meterial Types Description :</label>
                        <input type="text"
                        className="form-control"
                        name="preferedMeterialDescription"
                        placeholder="Enter Prefered Meterial Types Description "
                        defaultValue={inpval.preferedMeterialDescription}
                        onChange={setdata}/>
                    </div>
                     */}

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={updateuser} >
                        <i className="far fa-check-square"></i>
                        
                        
                        &nbsp; Update
                    </button>

                </form>
                </div>
                </center>
            </div>
            </div></div>
        )
    }

export default Edit;

