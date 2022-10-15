import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";

const EditMessage = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const saveMessage = async (e) => {
    e.preventDefault();
    const Message = {
        fname : fname,
        lname : lname,
        email : email,
        message : message,
    };

    axios
      .put(`http://localhost:8000/api/message/:id`, message)
      .then((response) => {
        swal({
          title: "Message Updated Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(-1);
        });
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/message/${id}`).then((res) => {
      setfname(res.data.message.fname);
      setlname(res.data.message.lname);
      setemail(res.data.message.email);
      setmessage(res.data.message.message);
      
    });
  }, [id]);

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className="store-admin-edit-form p-4">
        <h2 className="display-6"> Edit Message  </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter thenew details that you need to edit
        </small>

        <div className="store-add-product-form-inner  py-4">
          <form>
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
              onClick={saveMessage}
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

export default EditMessage;
