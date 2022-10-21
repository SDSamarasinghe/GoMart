import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Message.css";


function AdminEdit(){

    let { id } = useParams();
    console.log(id);

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    
    useEffect(()=>{
        getadmndata();

    },[]);
    const getadmndata = async  () => {
        await axios.get(`http://localhost:8000/api/message/${id}`).then((res)=>{
            console.log(res.data.fname);

            setfname(res.data.fname);
            setlname(res.data.lname);
            setemail(res.data.email);
            setmessage(res.data.message);

        }).catch((err) => {
            alert(err);
          });

    }

    const onSubmit = async (e) => {
        e.preventDefault();
    
            const newMessage = {
                fname,
                lname,
                email,
                message,
            };
    
            axios
              .put(`http://localhost:8000/api/message/${id}`, newMessage).then(()=>{
                alert("Success")
              }).catch((err)=>{
                alert(err.message);

              })
            
             
      };
    return (
        <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
        <div className="store-admin-edit-form p-4">
          <h2 className="display-6"> Edit Message  </h2>
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
                  placeholder="First Name"
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
                  placeholder="Last Name"
                />
              </div>
  
              <div className="form-group my-4">
                <label className="my-1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Unit Price"
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
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
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