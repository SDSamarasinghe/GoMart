import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const StoreAdminPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/payments`).then((res) => {
      setPayments(res.data.payments);
    });
  }, []);

  const reportRef = useRef();

  // const printPdf = () => {
  //   // alert("Working1");
  //   const input = document.querySelector(".pdfdiv");
  //   html2canvas(input).then((canvas) => {
  //     var img = new Image();
  //     const doc = new jsPDF("p", "mm", "a4");
  //     doc.setTextColor(20, 30, 39);
  //     doc.setFontSize(28);
  //     doc.setTextColor(20, 30, 39);
  //     doc.setFontSize(16);
  //     doc.text(5, 20, "Agrotec LLC - Reports");
  //     doc.setFontSize(12);
  //     doc.text(5, 30, "Generated Time :");
  //     //Date
  //     var m_names = new Array(
  //       "January",
  //       "February",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July",
  //       "August",
  //       "September",
  //       "October",
  //       "November",
  //       "December"
  //     );

  //     var today = new Date();
  //     var seconds = today.getSeconds();
  //     var minutes = today.getMinutes();
  //     var hours = today.getHours();
  //     var curr_date = today.getDate();
  //     var curr_month = today.getMonth();
  //     var curr_year = today.getFullYear();

  //     today =
  //       m_names[curr_month] +
  //       " " +
  //       curr_date +
  //       "/ " +
  //       curr_year +
  //       " | " +
  //       hours +
  //       "h : " +
  //       minutes +
  //       "min : " +
  //       seconds +
  //       "sec";
  //     var newdat = today;
  //     doc.setTextColor(20, 30, 39);
  //     doc.setFontSize(11);
  //     doc.text(5, 35, newdat);

  //     doc.text(
  //       5,
  //       50,
  //       "Following are the products currently available inside the store"
  //     );
        
  //     var imgHeight = (canvas.height * 200) / canvas.width;
  //     const imgData = canvas.toDataURL("image/png");
  //     doc.addImage(imgData, "JPEG", 5, 60, 200, imgHeight);

  //     doc.text(5, 200, "_______________");
  //     doc.text(5, 205, "Signature");

  //     const date = Date().split(" ");
  //     alert("Working2");
  //     // we use a date string to generate our filename.
  //     const dateStr =
  //       "Agrotec Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
  //     doc.save(`report_${dateStr}.pdf`);
  //   });
  // };

  const printPdf = () => {
    // alert("working1");
    const input = document.querySelector(".pdfdiv");
    html2canvas(input).then((canvas) => {
      // alert("working2");
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(28);
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(16);
      doc.text(5, 20, "GoMart - Payment Reports");
      doc.setFontSize(12);
      doc.text(5, 30, "Generated Time :");
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
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(11);
      doc.text(5, 35, newdat);

      doc.text(
        5,
        50,
        "Following are the payments currently done by the customers"
      );

      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      doc.text(5, 200, "_______________");
      doc.text(5, 205, "Signature");

      const date = Date().split(" ");

      // we use a date string to generate our filename.
      const dateStr =
        "Payment Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  };

  return (
    <div className="store-container d-flex justify-content-center p-5">
      <div className="w-100 min-vh-100" id="store-admin-admin456412123">
        <h3>Payment Admin Report</h3>
        <p> These are the payments happend inside this month </p>

        <div className="d-flex">
          <button className="btn btn-success" onClick={printPdf}>
            <i class="fa-solid fa-file-pdf mx-2"></i> Download Payments As PDF
          </button>
        </div>

        <table
          class="table mt-4 store-orders-container pdfdiv"
          id="app-store-admin-table-header-44512135"
          ref={reportRef}
        >
          <thead className="store-admin-table-header">
            <tr>
              <th scope="col">Payment ID</th>
              <th scope="col">Payee Name</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments &&
              payments.map((payment) => (
                <tr>
                  <th scope="row" style={{ width: "300px" }}>
                    {payment._id}
                  </th>
                  <td>{payment.paidBy}</td>
                  <td>$ {payment.amount}</td>
                  <td style={{ width: "300px" }}>{payment.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreAdminPayments;
