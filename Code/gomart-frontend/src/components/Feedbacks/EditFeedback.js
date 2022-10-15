import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EditFeedbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fname: "",
        lname: "",
        date: "",
        email: "",
        pro_qua_fb: "",
        deli_dri_rate: "",
        deli_tme_rate: "",
        recommendation: "",
        suggestions: "",
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
        pro_qua_fb,
        deli_dri_rate,
        deli_tme_rate,
        recommendation,
        suggestions,
    } = this.state;

    const data = {
        fname:fname,
        lname:lname,
        date:date,
        email:email,
        pro_qua_fb:pro_qua_fb,
        deli_dri_rate:deli_dri_rate,
        deli_tme_rate:deli_tme_rate,
        recommendation:recommendation,
        suggestions:suggestions,
    };
   

    axios.put(`http://localhost:8000/api/Feedbacks/${id}`, data).then((res) => {
      console.log(data);
      alert("Feedback updated successfully!");
      window.location.href = "/Feedbacks/FeedbackView";
    });
  };

  componentDidMount() {
    const {
      fname,
      lname,
      date,
      email,
      pro_qua_fb,
      deli_dri_rate,
      deli_tme_rate,
      recommendation,
      suggestions,
    } = this.props.params;

    this.setState({
      fname:fname,
      lname:lname,
      date:date,
      email:email,
      pro_qua_fb:pro_qua_fb,
      deli_dri_rate:deli_dri_rate,
      deli_tme_rate:deli_tme_rate,
      recommendation:recommendation,
      suggestions:suggestions,
    });
  }

  render() {
    return (
      <div style={{ width: "1150px", marginLeft:"300px" }}>
      
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
                  Edit Feedback 
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
                Value={this.state.fname}
                style={{ color: "rgba(0, 0, 0, 0.7)", width:"250px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>

            <div class="form-group" style={{float: "right"}}>
            <div style={{float: "left"}}><label for="fname">Last Name:</label></div>
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
            <div style={{float: "left"}}><label for="fname">Email:</label></div>
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

            <div class="form-group_radio1">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">Please provide your feedback on the quality of the products you received:</label></div>
            <br></br>
            <div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >
            <input type="radio" id="radiogroup1" name="pro_qua_fb" defaultValue={this.state.pro_qua_fb} onChange={this.handleInputChange}/>
            <label for="pro_qua_fb">Excellent</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" defaultValue={this.state.pro_qua_fb} onChange={this.handleInputChange}/>
            <label for="pro_qua_fb">Very Good</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" defaultValue={this.state.pro_qua_fb} onChange={this.handleInputChange}/>
            <label for="pro_qua_fb">Good</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" defaultValue={this.state.pro_qua_fb} onChange={this.handleInputChange}/>
            <label for="pro_qua_fb">Average</label><br></br>
            <input type="radio" id="radiogroup1" name="pro_qua_fb" defaultValue={this.state.pro_qua_fb} onChange={this.handleInputChange}/>
            <label for="pro_qua_fb">Poor</label><br></br>
            </div>
              {/* <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Image"
                required
                value={pro_qua_fb}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setpro_qua_fb(e.target.value);
                }}
              /> */}
              <br />
              
            </div>

            <div class="form-group">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">How would you rate the Friendliness of the delivery driver?</label></div>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Tharu danna ona"
                required
                defaultValue={this.state.deli_dri_rate}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>

            <div class="form-group">
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">How would you rate the delivery time?</label></div>

              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Thru danna ona"
                required
                defaultValue={this.state.deli_tme_rate}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>

            <div class="form-group_radio">
            <div style={{float: "left", textAlign: "left"}}><label for="recommendation">Would you recomend us to your friends?</label></div>
            <br></br>  
            <div class="radio" style={{float:"left", textAlign:"left", paddingLeft:"20px", paddingBottom:"40px", fontWeight: "normal" }} >
            <input type="radio" id="radiogroup" name="recommendation" defaultValue={this.state.recommendation} onChange={this.handleInputChange}/>
            <label for="recommendation">Yes, Sure</label><br></br>
            <input type="radio" id="radiogroup" name="recommendation" defaultValue={this.state.recommendation} onChange={this.handleInputChange}/>
            <label for="recommendation">Hmm, May be</label><br></br>
            <input type="radio" id="radiogroup" name="recommendation" defaultValue={this.state.recommendation} onChange={this.handleInputChange}/>
            <label for="recommendation">Not at all</label><br></br>
            </div>
              {/* <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Image"
                required
                value={recommendation}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setrecommendation(e.target.value);
                }}
              /> */}
              <br />
              
            </div>
            <br/><br/>

            <div class="form-group"  style={{float: "left", alignItems:"baseline"}}>
            <div style={{float: "left", textAlign: "left"}}><label for="pro_qua_fb">Any suggestions for us?</label></div>
            <br></br>
              <textarea
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Type Here..."
                required
                rows="10"
                cols="30"
                defaultValue={this.state.suggestions}
                style={{ color: "rgba(0, 0, 0, 0.7)", height: "99px", width:"508px", paddingLeft:"12px" }}
                onChange={this.handleInputChange}
              />
              <br />
              
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>

            

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
  );
}
}

export default withParams(EditFeedbacks);
