import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import swal from "sweetalert";

const StoreAdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/order`).then((res) => {
      setOrders(res.data.orders);
    });
  }, []);

  const refresh = () => {
    axios.get(`http://localhost:8000/api/store/order`).then((res) => {
      setOrders(res.data.orders);
      
    });
  }
  const printPdf = () => {
    const input = document.querySelector(".pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Agrotec LLC");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "Agrotec Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  };
  const deleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/store/orders/${id}`)
          .then(() => {
            swal("Product Deleted Successfully!", {
              icon: "success",
            });

            axios
              .get(`http://localhost:8000/api/store/orders`)
              .then((res) => {
                setOrders(res.data.orders);
              });
          });
      }
    });
  };

  return (
    <div className="store-container d-flex justify-content-center p-5">
      <div className="min-vh-100 w-100" id="store-admin-admin456412123">
        <h3> Store Order Admin </h3>
        <p> These are the orders recived inside this month </p>

        <div className="d-flex">
          <button className="btn btn-success" onClick={printPdf}>
            <i class="fa-solid fa-file-pdf mx-2"></i> Download Orders As PDF
          </button>
        </div>

        <table
          class="table mt-4 store-orders-container pdfdiv"
          id="app-store-admin-table-header-44512135"
        >
          <thead className="store-admin-table-header">
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Adress 1</th>
              <th scope="col">Adress 2</th>
              <th scope="col">City</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Date</th>
            
   
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr>
                  <th scope="row" style={{ width: "300px" }}>
                    {order._id}
                  </th>
                  <td>
                    {order.firstName} {order.lastName}
                  </td>
                  <td> {order.address1}</td>
                  <td> {order.address2}</td>
                  <td> {order.city}</td>
                  <td> {order.zipCode}</td>
                  <td> {order.product}</td>
                  <td> {order.quantity}</td>
                  <td>$ {order.total}</td>
                  <td style={{ width: "300px" }}>{order.createdAt}</td>
                  <td>
                                    <Link to={{ 
                                    pathname: "/shipping/editshipping/"+order._id, 
                                    param1: "Par1" 
                                    }}  className='btn btn-warning text-nowrap' >
                                        
                                        <i className='fas fa-edit '></i>&nbsp; Edit
                                    </Link>
                                
                                    &nbsp;
                                    </td><td>
                                    <button className='btn btn-danger text-nowrap'  href="#" onClick={()=>{deleteOrder(order._id);}}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </button>
                                </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreAdminOrders;
