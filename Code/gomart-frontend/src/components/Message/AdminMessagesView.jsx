import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Message.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const AdminMessagesView = () => {
  const [message, setMessages] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/message/all`).then((res) => {
      setMessages(res.data);
    });

   }, [])

  // useEffect(() => {
	// 	getMessageData(); //5
		
	// }, []);

//   const getMessageData = async (searchFilter) => {
//     const msgFilterModel = {
//         searchFilter: searchFilter,
//     };
//     const response = await axios.post(
//         `http://localhost:8000/api/message/all`,
//         msgFilterModel,
//         {
//             headers: {
//                 authentication: localStorage.getItem("authentication"),
//             },
//         },
//     );
//     console.log(response.data)
//     setMessages(response.data);
// };

  const deleteMessage = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this message!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/message/${id}`)
          .then(() => {
            swal("Message Deleted Successfully!", {
              icon: "success",
            });

            axios
              .get(`http://localhost:8000/api/message`)
              .then((res) => {
                setMessages(res.data.message);
              });
          });
      }
    });
  };

  const reportRef = useRef();

  const printPdf = () => {
    const input = document.querySelector(".pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(28);
      doc.setTextColor(20, 30, 39);
      doc.setFontSize(16);
      doc.text(5, 20, "Go Mart - Reports");
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
        "Following are the Messages received currently."
      );

      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 60, 200, imgHeight);
      
      
      doc.text(5, 200, "_______________");
      doc.text(5, 205, "Signature");

      const date = Date().split(" ");

      // we use a date string to generate our filename.
      const dateStr =
        "Agrotec Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  };

//   const onSearchTextChanged = (searchFilter) => {
//     getMessageData(searchFilter);
// }; //6

  return (
    <>
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer" style={{width:"1654.250px" ,height:"100px", marginBottom:"20px", padding:"25px" }}>
        
        <div  style={{display:"block", }}>
          <a href="/Message/AdminMessagesView" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px", fontWeight:"bolder" , borderBottom:"3px solid #248C78"}}> Messages</a>
          <a href="/Feedbacks/AdminFeedbackView" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px" , fontWeight:"bolder" }}>Feedbacks</a>
          <a href="/Complaints/AdminComplaintView" style={{fontSize:"40px" , color:"black" , paddingRight:"100px" , paddingLeft:"100px" , fontWeight:"bolder" }}>Complaints</a>  
        </div>
      </div>
    </div>

    
              {/* <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onInput={(event) =>

									onSearchTextChanged(
										event.target.value,
									)

								}  //
                //>*/}

      <div className="store-container d-flex justify-content-center p-5">
        <div className=" w-100" id="store-admin-admin456412123">
          

          <div className="d-flex">
            

            <button onClick={printPdf} className="btn btn-success mx-4">
              <i class="fa-solid fa-file-pdf mx-2"></i> Download Messages As PDF
            </button>
          </div>

          <table
            class="table mt-4 store-orders-container pdfdiv"
            id="app-store-admin-table-header-44512135"
            ref={reportRef}
          >
            <thead className="store-admin-table-header">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {message &&
                message.map((msg , index) => (
                  <tr >
                    <th scope="row" style={{ width: "300px" }}>
                         {index + 1}                 
                    </th>
                    <td>{msg.fname}</td>
                    <td>{msg.lname}</td>
                    <td>{msg.email}</td>
                    <td>{msg.message}</td>
                    <td style={{ width: "300px" }}>
                      <Link to={`/Message/AdminEdit/${msg._id}`}>
                        <button
                          type="button"
                          class="btn btn-outline-warning mx-2"
                        >
                          Edit <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteMessage(msg._id)}
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        Delete <i class="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default AdminMessagesView;
