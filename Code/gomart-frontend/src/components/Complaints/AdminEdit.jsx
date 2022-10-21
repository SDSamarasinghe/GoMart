import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AdminComplaints.css";


function AdminEdit(){

    let { id } = useParams();
    console.log(id);

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [date, setdate] = useState("");
    const [email, setemail] = useState("");
    const [category, setcategory] = useState("");
    const [Issue, setIssue] = useState("");
    const [files, setfiles] = useState("");
    
    useEffect(()=>{
        getadmndata();

    },[]);
    const getadmndata = async  () => {
        await axios.get(`http://localhost:8000/api/Complaints/${id}`).then((res)=>{
            console.log(res.data.fname);

            setfname(res.data.fname);
            setlname(res.data.lname);
            setdate(res.data.date);
            setemail(res.data.email);
            setcategory(res.data.category);
            setIssue(res.data.Issue);
            setfiles(res.data.files);
        }).catch((err) => {
            alert(err);
          });

    }

    const onSubmit = async (e) => {
        e.preventDefault();
    
            const newComplaint = {
                fname,
                lname,
                date,
                email,
                category,
                Issue,
                files,
            };
    
            axios
              .put(`http://localhost:8000/api/Complaints/${id}`, newComplaint).then(()=>{
                alert("Success")
              }).catch((err)=>{
                alert(err.message);

              })
            
             
      };
    return (
        <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
            {/* <h2>New</h2> */}
          <div className="store-admin-edit-form p-4">
            <h2 className="display-6"> Edit Complaint</h2>
            <small id="emailHelp" className="form-text text-muted">
              Enter thenew details that you need to edit
            </small>
    
            <div className="store-add-product-form-inner  py-4">
              <form id="contact-form" class="form" onSubmit={onSubmit}>
                <div className="form-group my-2">
                  <label className="my-1">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    value={fname}
                    onChange={(e) => {
                        setfname(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group my-4">
                  <label className="my-1">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lname}
                    onChange={(e) => {
                        setlname(e.target.value);
                    }}
                    // placeholder="Category"
                  />
                </div>
    
                <div className="form-group my-4">
                  <label className="my-1">Date</label>
                  <input
                    type="Date"
                    className="form-control"
                    placeholder="DD/MM/YY"
                    value={date}
                    onChange={(e) => {
                        setdate(e.target.value);
                    }}
                  />
                </div>
    
                <div className="form-group my-4">
                  <label className="my-1">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image"
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}
                  />
                </div>
    
                <div className="form-group my-4">
                  <label className="my-1">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Small Description"
                    value={category}
                    onChange={(e) => {
                        setcategory(e.target.value);
                    }}
                  />
                </div>
    
                <div className="form-group my-4">
                  <label className="my-1">Issue</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Long Description"
                    value={Issue}
                    onChange={(e) => {
                      setIssue(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group my-4">
                  <label className="my-1">Files</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Long Description"
                    value={files}
                    onChange={(e) => {
                      setfiles(e.target.value);
                    }}
                  />
                </div>
    
                <button
                  type="submit"
                  className="btn w-100"
                
                  style={{ background: "rgb(18, 175, 57)", color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
export default AdminEdit;