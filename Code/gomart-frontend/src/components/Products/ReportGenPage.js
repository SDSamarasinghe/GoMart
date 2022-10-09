import React, { useEffect, useState } from "react";
//import { Layout, Menu, Breadcrumb, Button, Tabs } from "antd";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import "./Admins.css";
import swal from "sweetalert";

const ReportGenPage = () => {
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
      doc.text(5, 20, "GoMart LLC Product - Report");
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
        "Following are the Products currently available inside the All Stocks"
      );

      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 60, 200, imgHeight);
      doc.text(5, 200, "_____");
      doc.text(5, 205, "Signature");

      const date = Date().split(" ");

      // we use a date string to generate our filename.
      const dateStr =
        "GoMart Product Report" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  };

  

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Products/all`).then((res) => {
      setAdsr(res.data);
    });
  }, []);

  

  return (
    
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"20px"}}>
      <div style={{marginRight:"300px"}}>
     
    
          
          <br/>
          <div style={{marginLeft:"680px"}}>
          <button className="btn btn-warning" onClick={printPdf} style={{marginRight:"60px"}}>Download Report</button>
    
      </div>
      </div>

      
      <table className="table table-hover pdfdiv" style={{ marginTop: "40px", width:"1000px", marginLeft:"130px"}}>
        <thead>
          
          <tr>
            <th scope="col">No.</th>
            <th scope="col">name</th>
            <th scope="col">Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Price(Rs.)</th>
           
            
          </tr>
        </thead>
        <tbody>
          {adsr &&
            adsr.map((adr, index) => (
              <tr key={index}>
                <th scope="row" style={{fontFamily:"sans-serif"}}>{index + 1}</th>
                <td style={{fontFamily:"sans-serif"}}>
                {adr.name}
                </td>
                
                <td style={{fontFamily:"sans-serif"}}>
                 
                    {adr.brand}
                 
                </td>
              
                <td style={{fontFamily:"sans-serif"}}>{adr.category}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.price}</td>
                <td style={{fontFamily:"sans-serif",width:"200px"}}>
                  
                  &nbsp;
                 
                </td>
                <td>
                  <Link to={""}>
                 
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      
      <br />
     
      <br />
    </div>
  );
};
export default ReportGenPage;
