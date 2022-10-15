import React from "react";
import "./navigator.css";
import { Link } from "react-router-dom";
import cart from "./img/carts.png";

const Navigator = () => {
  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar" role="banner">
        <div style={{ backgroundColor: "#078282" }} className="px-3">
          <div className="align-items-center justify-content-between d-flex">
            <div className="d-none d-xl-block  ">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="has-children">
                    <a href="about.html">
                      <span>
                        All Services <i class="fa-solid fa-caret-down mx-2"></i>
                      </span>{" "}
                    </a>
                    <ul className="dropdown arrow-top">
                    <li>
                        <Link to="/profile">
                          <a>Customer Profile</a>
                        </Link>
                      </li>
                      <li className="has-children">
                        <Link to="/">Admins</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/Prodlogin">
                              <a>Store Products Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Paylogin">
                              <a>Payments Admin Report</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Orderlogin">
                              <a>Store Order Admin</a>
                            </Link>
                          </li>

                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>
                    <a href="about.html">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="/cart">
                      <span>Cart
                        <img src={cart} alt="" style={{width:"40px"}}/>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle text-white"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigator;
