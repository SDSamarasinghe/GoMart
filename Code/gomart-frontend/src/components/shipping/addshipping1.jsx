import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Ads.css";
import swal from "sweetalert";

const Shipping = () => {
  const [Receviver_Name, setReceviver_Name] = useState("");
  const [Receviver_Address, setReceviver_Address] = useState("");
  const [Receviver_phoneNo, setReceviver_phoneNo] = useState("");
  const [conformation, setconformation] = useState("");
  const [payment_method, setpayment_method] = useState("");
  const [description, setdescription] = useState("");
  const [instruction, setinstruction] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const saveShipping = async (e) => {
    e.preventDefault();
    const Shipping = {
        Receviver_Name,
        Receviver_Address,
        Receviver_phoneNo,
        conformation,
        payment_method,
        description,
        instruction,
    };

    if (
        Shipping.Receviver_Name.length <= 0 ||
        Shipping.Receviver_Address.length <= 0 ||
        Shipping.Receviver_phoneNo.length <= 0 ||
        Shipping.conformation.length <= 0 ||
        Shipping.payment_method.length <= 0 ||
        Shipping.description.length <= 0 ||
        Shipping.instruction.length <= 0 
    ) {
      setErrors(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/shipping/addshipping1", Shipping)
      .then((response) => {
        swal({
          title: "Shipping details Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(`/api/shipping/addshipping1/${response.data._id}`);
        });
      });
  };

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer">
        <h2 className="display-6"> Add Shipping Details </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter the details of the Shipping
        </small>

        {errors && (
          <div className="text-danger mt-4 text-center">
            All the fields are required! Please fillout all the fields to add Shipping
          </div>
        )}

        <div className="store-add-product-form-inner  py-4">
          <form>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">Receviver Name</label>
              <input
                type="email"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="Receviver Name"
                value={Receviver_Name}
                onChange={(e) => {
                  setReceviver_Name(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-4">
              <label className="my-1">Receviver Address</label>
              <input
                type="text"
                className="form-control mb-2"
                value={Receviver_phoneNo}
                onChange={(e) => {
                  setReceviver_phoneNo(e.target.value);
                }}
                placeholder="Receviver Address"
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Receviver phoneNo</label>
              <input
                type="number"
                className="form-control"
                placeholder="Receviver phoneNo"
                value={Receviver_Address}
                onChange={(e) => {
                  setReceviver_Address(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">conformation</label>
              <input
                type="text"
                className="form-control"
                placeholder="conformation"
                value={conformation}
                onChange={(e) => {
                  setconformation(e.target.value);
                }}
              />
            </div>


            <div className="form-group my-4">
              <label className="my-1">Payment Method</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Payment Method"
                required
                value={payment_method}
                onChange={(e) => {
                  setpayment_method(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
              </p>
            </div>



            <div className="form-group my-4">
              <label className="my-1">Delivery Descriotion</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Delivery Description"
                required
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
              </p>
            </div>



            <div className="form-group my-4">
              <label className="my-1">Special Instruction</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Special Instruction"
                required
                value={instruction}
                onChange={(e) => {
                  setinstruction(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
              </p>
            </div>


            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={saveShipping}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
