import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";
import "./Store.css";
import { Link } from "react-router-dom";

const PropertyCatalog = () => {
  const [ads, setAds] = useState(undefined);
  const [AdSearch, setadSearch] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Products/all`).then((res) => {
      setAds(res.data);
    });

    console.log(ads);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <br />

      <div className="col-md-8 mt-4 mx-auto" style={{ marginBottom: "40px" }}>
        <div
          class="pos-f-t"
          style={{ marginLeft: "-250px", marginRight: "-250px" }}
        >
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4" style={{ backgroundColor: "#078282" }}>
              <h4 class="text-white">Collapsed content</h4>
              <h4 class="text-white">Collapsed content</h4>
              <h4 class="text-white">Collapsed content</h4>
              <h4 class="text-white">Collapsed content</h4>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav
            class="navbar navbar-dark bg-green"
            style={{ backgroundColor: "#078282" }}
          >
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginLeft: "10px" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <button type="button" class="btn btn-light">
              Redmi
            </button>
            <button type="button" class="btn btn-light">
              Huawie
            </button>
            <button type="button" class="btn btn-light">
              Samsung
            </button>
            <button type="button" class="btn btn-light">
              Apple
            </button>
            <button type="button" class="btn btn-light">
              Redmi
            </button>
            <button type="button" class="btn btn-light">
              Huawie
            </button>
            <button type="button" class="btn btn-light">
              Samsung
            </button>
            <button type="button" class="btn btn-light">
              Apple
            </button>
            <button type="button" class="btn btn-light">
              Sony
            </button>
            <button type="button" class="btn btn-light">
              Huawie
            </button>
            <button type="button" class="btn btn-light">
              Samsung
            </button>
            <button type="button" class="btn btn-light">
              Apple
            </button>
            <button type="button" class="btn btn-light">
              Sony
            </button>
            <button
              type="button"
              class="btn btn-light"
              style={{ marginRight: "40px" }}
            >
              HTC
            </button>
          </nav>
        </div>
        <br />
        <br />
        <div
          className="input-group"
          style={{ width: "18rem", border: "1px solid #e2ebd8" }}
        >
          <input
            type="search"
            onChange={(e) => {
              setadSearch(e.target.value);
            }}
            className="form-control rounded"
            placeholder="Type"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ color: "black" }}
          >
            search
          </button>
        </div>

        <button class="btn btn-success">
          <i
            className="fa fa-envelope"
            href="mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello!"
          ></i>{" "}
          Create E-mail Alert
        </button>
        <button class="btn btn-success" style={{ marginLeft: "10px" }}>
          <i className="fa fa-save"></i> Save Search
        </button>
        <br />
        <br />
        <hr style={{ marginLeft: "-250px", marginRight: "-250px" }}></hr>
        <br />

        <div
          className="products-list row p-5"
          
        >
          {ads &&
            ads
              .filter((value) => {
                if (AdSearch === "") {
                  return value;
                } else if (
                  value.type.toLowerCase().includes(AdSearch.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((ad) => (
                <div
                  className="col mt-4"
                  style={{
                    width: "15rem",
                    margin: "1rem",
                    height: "20rem",
                    marginLeft: "-2px",
                    borderRadius: "20px",
                    boxShadow: "2px 2px #888888",
                  }}
                >
                  <span
                    class="border"
                    style={{ marginTop: "8px", marginBottom: "5px" }}
                  >
                    <div className="product-card">
      <div className="product-image">
        <img src={ad.image} alt="product" />
      </div>

      <div
        className="store-store-product-title"
        style={{ color: "#6d6d6d", textAlign: "center" }}
      >
        <p className="my-2" style={{ fontSize: "18px", color: "#333" }}>
          <b>{ad.name}</b>
        </p>
        <p style={{ fontSize: "24px", color: "#12af39" }}>
          <b>${ad.price}</b>
        </p>

        <Link
                            className="card-link"
                            to={`/Product/Ad/${ad._id}/${ad.name}/${ad.brand}/${
                              ad.price
                            }/${ad.category}/smalldes/${encodeURIComponent(
                              ad.image
                            )}`}
                            style={{ color: "white" }}
                          >
                            more..
                          </Link>
      </div>
    </div>
                  </span>
                  <div className="card-body"></div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
export default PropertyCatalog;
