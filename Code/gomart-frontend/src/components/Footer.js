import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ backgroundColor: "#078282" }}>
      <footer className="page-footer font-small  teal py-4 text-white">
        <div className="container-fluid text-center text-md-left">
          <div className="row d-flex py-4 justify-content-around">
            <div className="col-md-3 mt-md-0 mt-3" style={{float: "left"}}>
              <h5 className="text-uppercase font-weight-bold">Navigation</h5>
              Home
              <br />
              Services
              <br />
              Event & Contact Support
              <br />
              Contact
              <br />
              Help
              <br />
            </div>

            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Navigation</h5>
              Home
              <br />
              Services
              <br />
              Event & Contact Support
              <br />
              Contact
              <br />
              Help
              <br />
            </div>

            <div className="col-md-5 mb-md-0 mb-3 text-start">
              <h5 className="text-uppercase font-weight-bold">Notification</h5>
              <small>
              We regretfully inform you that there will be delays in deliveries due to the ongoing fuel crisis. Outstation areas will experience further delays. Once again sorry for the inconvenience caused.
              </small>
            </div>
          </div>
          </div>
    </footer>
  </div>
  );
}

export default Footer;