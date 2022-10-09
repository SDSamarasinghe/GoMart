import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DisplayAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      brand: "",
      category: "",
      smallDes: "",
      image: "",
      price: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  componentDidMount() {
    const { id, name, brand, category, smallDesc, image, price } =
      this.props.params;

    this.setState({
      Name: name,
      brand: brand,
      category: category,
      smallDes: smallDesc,
      image: image,
      price: price,
    });
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "-70px" }}>
        <div>
          <br />
          <div class="d-grid gap-2 d-md-block" style={{ marginLeft: "-240px" }}>
            <Link to="/Ads/properties">
              <button
                class="btn btn-primary"
                type="button"
                style={{
                  marginLeft: "22rem",
                  marginBottom: "30px",
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#12af39",
                  fontWeight: "700",
                }}
              >
                Back
              </button>
            </Link>
          </div>
          <div
            class="text-center"
            style={{ marginRight: "110px", marginLeft: "110px" }}
          >
            <br />

            <br />

            <img
              class="rounded"
              src={this.state.image}
              alt="..."
              style={{ width: "80rem" }}
            />

            <br />
            <br />
            <div className="btn-group" style={{ marginLeft: "73rem" }}>
              <button type="button" className="btn btn-success">
                Share
              </button>
            </div>
            <div className="btn-group" style={{ marginLeft: "-10rem" }}>
              <button type="button" className="btn btn-warning">
                Print
              </button>
            </div>
            <br />
            <hr style={{ width: "1270px" }}></hr>
            <br />
            <div className="d-flex w-100 justify-content-between align-items-start">
              <div>
                <blockquote class="blockquote">
                  <p className="mb-0">
                    Area of Land :{" "}
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      {this.state.price} Perches
                    </span>
                  </p>
                </blockquote>

                <blockquote class="blockquote">
                  <p className="mb-0">
                    Offered for :{" "}
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      {this.state.smallDes}
                    </span>
                  </p>
                </blockquote>
              </div>

              <div>
                <blockquote class="blockquote">
                  <p className="mb-0">
                    category :{" "}
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      {this.state.category}
                    </span>
                  </p>
                </blockquote>

                <blockquote class="blockquote">
                  <p className="mb-0">
                    AgentRef :{" "}
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      {this.state.category}
                    </span>
                  </p>
                </blockquote>
              </div>
            </div>
            <br />
            <hr style={{ width: "1270px" }}></hr>
            <div style={{ marginRight: "19rem" }}>
              <h1 style={{ marginRight: "33.5rem", fontWeight: "700" }}>
                <span
                  className="secondary p-1 px-4 rounded text-white"
                  style={{ backgroundColor: "#202428" }}
                >
                  Property Details
                </span>
              </h1>

              <br />
              <p
                bg-dark
                text-white
                style={{ textAlign: "left", fontStyle: "normal" }}
              >
                {this.state.smallDes}
              </p>
              <p></p>
            </div>
            <br />

            <div className="container p-3 my-3 bg-dark text-white" style={{}}>
              <h1>Contact Advertiser ({this.state.category})</h1>
            </div>

            <div className="col-md-8 mt-4 mx-auto">
              <center>
                <h5>
                  Phone :{" "}
                  <span className="bg-secondary p-1 px-4 rounded text-white">
                    {this.state.price}
                  </span>
                </h5>
              </center>
              <br />
              <center>
                <h5 style={{ marginLeft: "68px" }}>
                  Email :{" "}
                  <span className="bg-secondary p-1 px-4 rounded text-white">
                    {this.state.price}
                  </span>
                </h5>
              </center>
            </div>
            <br />
            <button
              onClick={() => (window.location = `mailto:${this.state.email}`)}
              className="btn btn-success"
              style={{ marginBottom: "20px" }}
            >
              Contact Me
            </button>
            <br />
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default withParams(DisplayAd);
