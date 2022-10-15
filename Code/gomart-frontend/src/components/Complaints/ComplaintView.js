import React, { useEffect, useState } from "react";
//import { Layout, Menu, Breadcrumb, Button, Tabs } from "antd";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import "./AdminComplaints.css";
import swal from "sweetalert";

const AdminFeedbackView = () => {
  const [adsr, setAdsr] = useState(undefined);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Complaints/all`).then((res) => {
      setAdsr(res.data);
    });
  }, []);

  const onDelete = (id) => {
    
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Complaint!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/Complaints/${id}`)
          .then(() => {
            swal("Complaint Deleted Successfully!", {
              icon: "success",
            });

     
          });
      }
    });
  };

  return (
    
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"100px"}}>
      <div style={{fontSize:"50px", marginTop:"20px",height:"80px"}}>
     
      <h3> <span className="secondary p-1 px-4 rounded text-white" style={{backgroundColor:"#5cb85c", fontSize:"50px"}}>Your Complaints</span></h3>
      
          
         
      </div>

    
      <table className="table table-hover pdfdiv" style={{ marginTop: "40px", width:"1000px", marginLeft:"130px"}}>
        <thead>
          
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Date</th>
            <th scope="col">Email</th>
            <th scope="col">Issue Category</th>
            <th scope="col">Issue Description</th>
            <th scope="col">Files</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {adsr &&
            adsr.map((adr, index) => (
              <tr key={index}>
                <th scope="row" style={{fontFamily:"sans-serif", fontWeight:1000}}>
                  <Link
                    to={`/Complaints/AdminEditComplaint/${adr._id}/${adr.fname}/${adr.lname}/${adr.date}/${adr.email}/${
                        adr.category}/${adr.Issue}/${adr.files}`}
                    style={{ textDecoration: "none" }}
                  >
                  {index + 1}
                  </Link>
                  </th>
                         
                <td style={{fontFamily:"sans-serif"}}>{adr.date}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.email}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.category}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.Issue}</td>
                <td style={{fontFamily:"sans-serif"}}>{adr.files}</td>
                <td style={{fontFamily:"sans-serif",width:"200px"}}>
                  <Link
                    className="btn btn-warning"
                    to={`/Complaints/AdminEditComplaint/${adr._id}/${adr.fname}/${adr.lname}/${adr.date}/${adr.email}/${
                        adr.category}/${adr.Issue}/${adr.files}`}
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
