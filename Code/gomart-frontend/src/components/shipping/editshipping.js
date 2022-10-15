import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Ads.css";



function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AdminUpdateshipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Receviver_Name: "",
        Receviver_Address: "",
        Receviver_phoneNo: "",
        conformation: "",
        payment_method: "",
        description: "",
        instruction: "",
      
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
        Receviver_Name:Receviver_Name,
        Receviver_Address:Receviver_Address,
        Receviver_phoneNo:Receviver_phoneNo,
        conformation:conformation,
        payment_method:payment_method,
        description:description,
        instruction:instruction,
    } = this.state;

    const data = {
        Receviver_Name,
        Receviver_Address,
        Receviver_phoneNo,
        conformation,
        payment_method,
        description,
        instruction,
    };
    console.log(data);

    axios.put(`http://localhost:8000/api/shipping${id}`, data).then((res) => {
      alert("Shipping Details updated successfully!");
      window.location.href = "/shipping/admin";
    });
  };

  componentDidMount() {
    const {
        Receviver_Name,
        Receviver_Address,
        Receviver_phoneNo,
        conformation,
        payment_method,
        description,
        instruction,
    } = this.props.params;

    this.setState({
        Receviver_Name:Receviver_Name,
        Receviver_Address:Receviver_Address,
        Receviver_phoneNo:Receviver_phoneNo,
        conformation:conformation,
        payment_method:payment_method,
        description:description,
        instruction:instruction,
  });
  }
  render() {
    return (
      <div style={{width:"1000px"}}>
      <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"40px",marginTop:"200px", border:"2px solid #078282"}}>
        
        
        
        <form className="needs-validation" style={{marginLeft:"30px", marginRight:"30px",marginTop:"30px"}}>
        <div style={{marginLeft:"-500px"}}>
        <h1
          style={{
            color: "#111",
            fontFamily: "Helavetica Neue",
            fontSize: "60px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            marginBottom:"50px",
            lineHeight: "1",
            textAlign: "center",
          }}
        >
          <span className="p-1 px-4 rounded text-white" style={{backgroundColor:"#078282",marginLeft:"495px"}}>
          Edit Shipping details
          </span>
        </h1>
        </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <input
              type="text"
              className="form-control"
              name="Receviver_Name"
              placeholder="Receviver Name"
              value={this.state.Receviver_Name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            
            <input
              type="text"
              className="form-control"
              name="Receviver_Address"
              placeholder="Receviver Address"
              value={this.state.Receviver_Address}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="Receviver_phoneNo"
              placeholder="Receviver phoneNo"
              value={this.state.Receviver_phoneNo}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
         
            <input
            style={{height:"100px"}}
              type="text"
              className="form-control"
              name="conformation"
              placeholder="Conformation"
              value={this.state.conformation}
              onChange={this.handleInputChange}
            />
          </div>

          {/* <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="payment_method"
              placeholder="payment method"
              value={this.state.payment_method}
              onChange={this.handleInputChange}
            />
          </div> */}

<div class="form-group_radio">

<div style={{float: "left", textAlign: "left"}}><label for="recommendation">Payment Method</label></div>

<br></br>  

<div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >

<input type="radio" id="radiogroup" name="recommendation" value="recommendation"/>

<label for="recommendation">Cash</label><br></br>

<input type="radio" id="radiogroup" name="recommendation" value="recommendation"/>

<label for="recommendation">Credit Card</label><br></br>

<input type="radio" id="radiogroup" name="recommendation" value="recommendation"/>

<label for="recommendation">Bank Transfer</label><br></br>

</div></div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Delivery Description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="instruction"
              placeholder="Special Instruction"
              value={this.state.payment_method}
              onChange={this.handleInputChange}
            />
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
        </form>
      </div>
      </div>
    );
  }
}

export default withParams(AdminUpdateshipping );
