import React, { useEffect, useState } from "react";
//import { Layout, Menu, Breadcrumb, Button, Tabs } from "antd";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import "./Admins.css";
import swal from "sweetalert";

const AdminViewAds = () => {
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
    axios.get(`http://localhost:8000/api/Ads/all`).then((res) => {
      setAdsr(res.data);
    });
  }, []);

  const onDelete = (id) => {
    
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Advertisment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/Product/${id}`)
          .then(() => {
            swal("Advertisment Deleted Successfully!", {
              icon: "success",
            });

     
          });
      }
    });
  };

  return (
    
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"20px"}}>
      <div style={{marginLeft:"-200px"}}>
     
      <h3> <span className="secondary p-1 px-4 rounded text-white" style={{backgroundColor:"#5cb85c"}}>{greet} Admin</span></h3>
      
          
          <br/>
          <button className="btn btn-warning" onClick={printPdf} style={{marginRight:"40px"}}>Download Report</button>
          <button className="btn btn-success" style={{height:"40px"}}>
        {" "}
        <Link
          to="/Product/adform"
          style={{ extDecoration: "none", color: "white"}}
        >
          Create New Advertisment
        </Link>
        <br />
        <br/>
      </button>
      </div>
      
      <table className="table table-hover pdfdiv" style={{ marginTop: "40px", width:"1300px", marginLeft:"-200px"}}>
        <thead>
          
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Price(Rs.)</th>
            <th scope="col">Size(Purches)</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {adsr &&
            adsr.map((adr, index) => (
              <tr key={index}>
                <th scope="row" style={{fontFamily:"sans-serif"}}>{index + 1}</th>
                <td style={{fontFamily:"sans-serif"}}>
                {adr.description}
                </td>
                
                <td style={{fontFamily:"sans-serif", fontWeight:1000}}>
                  <Link
                    to={`/Product/Ad/${adr._id}/${adr.name}/${adr.category}/${adr.brand}/${adr.smallDesc}/${
                      adr.price
                    }/${adr.phone}/${encodeURIComponent(adr.image)}`}
                    style={{ textDecoration: "none" }}
                  >
                    {adr.type}
                  </Link>
                </td>
              
                <td style={{fontFamily:"sans-serif"}}>{adr.priceRate}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.sizeOfArea}</td>
                <td style={{fontFamily:"sans-serif",width:"200px"}}>
                  <Link
                    className="btn btn-warning"
                    to={`/Product/editAd/${adr._id}/${adr.name}/${adr.category}/${adr.brand}/${adr.smallDesc}/${
                        adr.price
                      }/${adr.phone}/${encodeURIComponent(adr.image)}`}
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

      
      <br />
     
      <br />
    </div>
  );
};
export default AdminViewAds;
