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
                        <Link to="/login">
                          <a>Admin Login</a>
                        </Link>
                      </li>
                      <li className="has-children">
                        <Link to="/">Services</Link>
                        <a href="#">
                          Admins <i class="fa-solid fa-caret-down"></i>
                        </a>
                        <ul className="dropdown">
                          <li>
                            <Link to="/Product">
                              <a>Store Products Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/store/store-admin-orders">
                              <a>Store Orders Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/store/store-admin-payments">
                              <a>Store Payments Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/VacancyAdmin">
                              <a>Vacancy Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/GuidanceAdmin">
                              <a>Guidance Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/ApplyVacancyAdmin">
                              <a>Apply Vacancy Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/ApplyGuidanceAdmin">
                              <a>Apply Guidamce Admin</a>
                            </Link>
                          </li>
                          <li>
                            <Link to="/CandidateAdmin">
                              <a>Candidate Admin</a>
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
                    <a href="contact.html">
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
