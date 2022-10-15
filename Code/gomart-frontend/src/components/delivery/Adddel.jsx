import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const Adddelivery  = () => {
  // const [driver_Name, setdriver_Name] = useState("");
  // const [Receviver_Name, setReceviver_Name] = useState("");
  // const [delivery_date, setdelivery_date] = useState("");
  // const [delivery_time, setdelivery_time] = useState("");
  // const [delivery_status, setdelivery_status] = useState("");
  // const [Receviver_phoneNo, setReceviver_phoneNo] = useState("");
  // const [delivery_details, setdelivery_details] = useState("");
  // const [special_Notice, setspecial_Notice] = useState("");
  // const [Date, setDate] = useState("");
  const [signature, setsignature] = useState("");
  
  const [errors, setErrors] = useState("");
  const [delivery, setDelvery] = useState({
    driver_Name : "",
    Receviver_Name : "",
    delivery_date : "",
    delivery_time : "",
    delivery_status : "",
    Receviver_phoneNo : "",
    delivery_details : "",
    special_Notice : "",
    Date : "",
    signature : "",
  });
  const onFormChange = (e) => {
    const { name, value } = e.target;

    setDelvery({
      ...delivery,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  
  const savedelivery = async (e) => {
    e.preventDefault();
    const deliveryc = {
        driver_Name : delivery.driver_Name,
        Receviver_Name : delivery.Receviver_Name,
        // delivery_date : delivery.delivery_date,
        // delivery_time : delivery.delivery_time,
        // delivery_status : delivery.delivery_status,
        // Receviver_phoneNo : delivery.Receviver_phoneNo,
        // delivery_details : delivery.delivery_details,
        // special_Notice : delivery.special_Notice,
        // Date : Date,
        signature : signature,
    };

    if (
        delivery.driver_Name.length <= 0 ||
        delivery.Receviver_Name.length <= 0 ||
        // delivery.delivery_date.length <= 0 ||
        // delivery.delivery_time.length <= 0 ||
        // delivery.delivery_status.length <= 0 ||
        // delivery.Receviver_phoneNo.length <= 0 ||
        // delivery.delivery_details.length <= 0 ||
        // delivery.special_Notice.length <= 0 ||
        // delivery.Date.length <= 0 ||
        delivery.signature.length <= 0 

    )
     {
      setErrors(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/delivery/save", delivery)
      .then((response) => {
        swal({
          title: "Delivery Details Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(`/delivery/viewdel`);
        });
      });
  };



  const demo = () => {
    setDelvery({
      driver_Name: "Sumudu jayakody",
      Receviver_Name: "Omindu Sanvida",
      delivery_date: "45/5",
      delivery_time: "Mountain View",
      delivery_status: "Local",
      Receviver_phoneNo: "0767659394",
      delivery_details: "Keep security ",
      special_Notice: "Make delivery on time",
      Date: "1",
      signature: "Sumudu.pdf",
    });
  };

  return (
    <div className="align-items-start">

    <div className="store-add-product py-4 d-flex  justify-content-center">
      <div className=" store-form-outer-layer">
      <h3>Delivery Report </h3>

<p>
  Please enter your Delivery Report Details, We'll deliver your items to your
  doorstep
</p>
        
      



        <div className="store-add-product-form-inner  py-4">
          <form>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">Driver Name</label>
              <input
                type="text"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="Driver Name"
                name="driver_Name"
                value={delivery.driver_Name}
                onChange={onFormChange}
              />
            </div>
            <div className="form-group mt-4">
              <label className="my-1">Receviver Name</label>
              <input
                type="text"
                name="Receviver_Name"
                className="form-control mb-2"
                value={delivery.Receviver_Name}
               onChange={onFormChange}
                placeholder="Receviver Name"
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Delivery Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Delivery Date"
                name="delivery_date"
                value={delivery.delivery_date}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Delivery Time</label>
              <input
              type="time"
              name="delivery_time"
                className="form-control"
                placeholder="Delivery Time"
                value={delivery.delivery_time}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Delivery Status</label>
              <input
                className="form-control"
                name="delivery_status"
                placeholder="Delivery Status"
                value={delivery.delivery_status}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Receviver Phone Number</label>
              <input
              type="text"
              name="Receviver_phoneNo"
                className="form-control"
                placeholder="Receviver Phone Number"
                value={delivery.Receviver_phoneNo}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Delivery Details</label>
              <textarea
              name="delivery_details"
                className="form-control"
                placeholder="Delivery Details"
                value={delivery.delivery_details}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Special Notice</label>
              <textarea
              name="special_Notice"
                className="form-control"
                placeholder="Special Notice"
                value={delivery.special_Notice}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Date</label>
              <input
              type="date"
              name="Date"
                className="form-control"
                placeholder="Date"
                value={delivery.Date}
                onChange={onFormChange}
              />
            </div>

            <div className="form-group my-4">

              <label className="my-1">Upload your signature as files or images:</label>
              <input
                type="file"
                className="form-control"
                value={signature}
                onChange={(e) => {
                  setsignature(e.target.value);

                }}

              />

            </div>

          



            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={savedelivery}
            >
              Submit
            </button>

            <button
              type="button"
              onClick={demo}
              class="btn store-order-form-button my-4"
              id="product-details-buy-now"
            >
              Demo
            </button>


          </form>
        </div>
        </div>
      </div>
      </div>
    
    
   
  );
};

export default Adddelivery ;
