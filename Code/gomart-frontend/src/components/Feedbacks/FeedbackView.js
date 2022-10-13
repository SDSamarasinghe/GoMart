import React, { useEffect, useState } from "react";
//import { Layout, Menu, Breadcrumb, Button, Tabs } from "antd";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import "./AdminFB.css";
import swal from "sweetalert";

const AdminFeedbackView = () => {
  const [adsr, setAdsr] = useState(undefined);

  const date = new Date();
  const hrs = date.getHours();

  let greet;

const printPdf = () => {
    const input = document.querySelector(".pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(28);
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(16);
      doc.text(5, 20, "Agrotec LLC - Reports");
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
        "Following are the Ads currently available inside the All Property"
      );

      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 60, 200, imgHeight);
      doc.text(5, 200, "_____");
      doc.text(5, 205, "Signature");

      const date = Date().split(" ");

      // we use a date string to generate our filename.
      const dateStr =
        "Agrotec Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  };

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Feedbacks/all`).then((res) => {
      setAdsr(res.data);
    });
  }, []);

  const onDelete = (id) => {
    
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Feedback!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/Feedbacks/${id}`)
          .then(() => {
            swal("Feedback Deleted Successfully!", {
              icon: "success",
            });

     
          });
      }
    });
  };

  return (
    
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"100px"}}>
      <div style={{fontSize:"50px", marginTop:"20px",height:"80px"}}>
     
      <h3> <span className="secondary p-1 px-4 rounded text-white" style={{backgroundColor:"#5cb85c", fontSize:"50px"}}>Your Feedbacks</span></h3>
      
          
          <br/>
          {/* <button className="btn btn-success" style={{height:"40px"}}>
        {" "}
        <Link
          to="/Product/adform"
          style={{ extDecoration: "none", color: "white"}}
        >
          Add New Product
        </Link>
        <br />
        <br/>
      </button> */}
      </div>

      {/* <div style={{width:"330px",height:"1000px",float:"left", marginLeft:"-380px", backgroundColor:"#078282",marginTop:"-130px"}}>
     <p style={{marginLeft:"-10px",marginBottom:"40px", fontSize:"40px",fontWeight:"bold",color:"#ffffff",marginTop:"20px"}}>Go MART</p>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Dashboard</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Analytics</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Product</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Orders</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Transaction</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Message</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Customers</p></Link>

      </div> */}
      
      <table className="table table-hover pdfdiv" style={{ marginTop: "40px", width:"1000px", marginLeft:"130px"}}>
        <thead>
          
          <tr>
            <th scope="col">No.</th>
            {/* <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date</th>
            <th scope="col">Email</th>
            <th scope="col">Q1</th>
            <th scope="col">Q2</th>
            <th scope="col">Q3</th>
            <th scope="col">Q4</th> */}
            <th scope="col">Date</th>
            <th scope="col">Suggestions</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {adsr &&
            adsr.map((adr, index) => (
              <tr key={index}>
                <th scope="row" style={{fontFamily:"sans-serif", fontWeight:1000}}>
                  <Link
                    to={`/Feedbacks/EditFeedback/${adr._id}/${adr.fname}/${adr.lname}/${adr.date}/${adr.email}/${
                      adr.pro_qua_fb}/${adr.deli_dri_rate}/${adr.deli_tme_rate}/${adr.recommendation}/${adr.suggestions}`}
                    style={{ textDecoration: "none" }}
                  >
                  {index + 1}
                  </Link>
                  </th>
                {/* <td style={{fontFamily:"sans-serif"}}>{adr.fname}</td>               
                <td style={{fontFamily:"sans-serif"}}> {adr.lname}</td>               */}
                <td style={{fontFamily:"sans-serif"}}>{adr.date}</td>
                {/* <td style={{fontFamily:"sans-serif"}}>{adr.email}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.pro_qua_fb}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.deli_dri_rate}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.deli_tme_rate}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.recommendation}</td> */}
                <td style={{fontFamily:"sans-serif"}}>{adr.suggestions}</td>
                <td style={{fontFamily:"sans-serif",width:"200px"}}>
                  <Link
                    className="btn btn-warning"
                    to={`/Feedbacks/EditFeedback/${adr._id}/${adr.fname}/${adr.lname}/${adr.date}/${adr.email}/${
                      adr.pro_qua_fb}/${adr.deli_dri_rate}/${adr.deli_tme_rate}/${adr.recommendation}/${adr.suggestions}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
                  &nbsp;
                  <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => onDelete(adr._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                </td>
                <td>
                  <Link to={""}>
                 
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      
      
    </div>
  );
};
export default AdminFeedbackView;
