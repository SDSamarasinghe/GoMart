import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AdminComplaints.css";




function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AdminEditComplaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fname: "",
        lname: "",
        date: "",
        email: "",
        category: "",
        Issue: "",
        files: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.params.id;

    const {
        fname,
        lname,
        date,
        email,
        category,
        Issue,
        files,
    } = this.state;

    const data = {
        fname:fname,
        lname:lname,
        date:date,
        email:email,
        category:category,
        Issue:Issue,
        files:files,
    };
   

    axios.put(`http://localhost:8000/api/Complaints/${id}`, data).then((res) => {
      console.log(data);
      alert("Complaint updated successfully!");
      window.location.href = "/Complaints/AdminComplaintView";
    });
  };

  componentDidMount() {
    const {
        fname,
        lname,
        date,
        email,
        category,
        Issue,
        files,
    } = this.props.params;

    this.setState({
        fname:fname,
        lname:lname,
        date:date,
        email:email,
        category:category,
        Issue:Issue,
        files:files,
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"20px"}}>
      <div style={{fontSize:"50px", marginTop:"20px",height:"80px"}}>
     
      <h3> <span className="secondary p-1 px-4 rounded text-white" style={{backgroundColor:"#5cb85c", fontSize:"50px"}}> Admin</span></h3>
      
          
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

      <div style={{width:"330px",height:"1000px",float:"left", marginLeft:"-380px", backgroundColor:"#078282",marginTop:"-130px"}}>
     <p style={{marginLeft:"-10px",marginBottom:"40px", fontSize:"40px",fontWeight:"bold",color:"#ffffff",marginTop:"20px"}}>Go MART</p>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Dashboard</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Analytics</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Product</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Orders</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Transaction</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Message</p></Link>
     <Link to="Product/adform"><p style={{marginTop:"70px",color:"#ffffff",fontWeight:"bold"}}>Customers</p></Link>

      </div>
      
      <div style={{ width: "1150px" }}>
      
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          marginBottom: "40px",
          marginTop: "200px",
          border: "2px solid #078282",
        }}
      >
        <div style={{ backgroundColor: "black" }}></div>
        <div
          className="col-md-8 mt-4 mx-auto"
          style={{
            height:"1150px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            backgroundColor: "white",
            borderRadius: "30px",
            paddingBottom: "10px",
            margin: "2px",
            
          }}
        >
          <center>
            <div style={{ marginLeft: "-500px" }}>
              <h4
                style={{
                  color: "#111",
                  fontFamily: "Helavetica Neue",
                  fontSize: "50px",
                  fontWeight: "bold",
                  letterSpacing: "-1px",
                  marginBottom: "50px",
                  lineHeight: "1",
                  textAlign: "center",
                }}
              >
                <span
                  className="p-1 px-4 rounded text-white"
                  style={{ backgroundColor: "#F5AF18", marginLeft: "480px" }}
                >
                  Edit Complaint 
                </span>
              </h4>
            </div>
            <div>
            <div className="form-group" style={{ float: "left" }}>
            <div style={{float: "left"}}><label for="fname">First Name:</label></div>
            <br></br>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="First Name"
                required
                value={this.state.fname}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>

            <div class="form-group" style={{float: "right"}}>
            <div style={{float: "left"}}><label for="lname">Last Name:</label></div>
            <br></br>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Last Name"
                required
                value={this.state.lname}
                style={{ color: "rgba(0, 0, 0, 0.7)",width:"250px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div></div>
            
            <div class="form-group" style={{float: "left"}}>
            <div ><label style={{float: "left"}} for="date">Date:</label></div>
              <input
                type="date"
                class="form-control"
                id="formGroupExampleInput2"
                // placeholder="DD/MM/YY"
                required
                value={this.state.date}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>

            <div class="form-group"  style={{float: "right"}}>
            <div style={{float: "left"}}><label for="email">Email:</label></div>
            <br></br>
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Email"
                required
                value={this.state.email}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>


            <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
                type="text"
                className="form-control"
                name="category"
                placeholder="Category"
                value={this.state.category}
                onChange={this.handleInputChange}
            />
            </div>

            <div class="form-group"  style={{float: "left", alignItems:"baseline"}}>
            <div style={{float: "left", textAlign: "left"}}><label for="issue">Describe the issue:</label></div>
            <br></br>
              <textarea
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Type Here..."
                required
                rows="10"
                cols="30"
                value={this.state.Issue}
                style={{ color: "rgba(0, 0, 0, 0.7)", height: "99px", width:"508px", paddingLeft:"12px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>

            <div class="form-group">
            <div style={{float: "left"}}><label for="file">Upload your issue related files or images:</label></div>
              <input
                type="file"
                class="form-control"
                id="formGroupExampleInput2"
                value={this.state.files}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={this.handleInputChange}
              />
              <br />
             
            </div>

            <center>
          <button
            className="btn btn-warning"
            type="submit"
            style={{ marginTop: "15px",marginBottom:"30px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
          </center>
          </center>
        </div>
      </div>
      <div
        style={{
          float: "right",
          marginTop: "-580px",
          marginRight: "-550px",
          border: "3px solid #FFFFFF",
        }}
      >
       
      </div>
    </div>
    </div>
  );
}
}

export default withParams(AdminEditComplaint);
