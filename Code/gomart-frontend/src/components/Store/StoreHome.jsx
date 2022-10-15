import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StoreProductSingle from "./StoreProductSingle";
import sl1 from "./img/4.png";
import sl2 from "./img/2.png";
import sl3 from "./img/5.png";
import p1 from "./img/stayhome.png";
import p2 from "./img/sd.png";

const StoreHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/products`).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="vw-100 min-vh-100" style={{ backgroundColor: "#F5F5F5" }}>
      {/* Upper Images */}

      <div
        id="carouselExampleCaptions"
        class="carousel slide store-carousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={sl1}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={sl2}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={sl3}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Categories */}

      <div className="categories p-4">
        <h1 className="my-4 display-6 px-5">
          {" "}
          <b>Categories</b>{" "}
        </h1>

        <div className="category-list row gy-4 px-5">
          <div className="category col-3">
          <Link to="/store/products/Handfree">
              <img
                src="https://i.pinimg.com/736x/da/3b/66/da3b661c428d8ddde9e37087aa9753c1.jpg"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>

          <div className="category col-3">
          <Link to="/store/products/PowerBanks">
              <img
                src="https://th.bing.com/th/id/R.075fb89439279aedda77377618cb8ddf?rik=yn5r92Cdc%2fzadg&riu=http%3a%2f%2fwww.berlindeluxe-shop.de%2fWebRoot%2fStore19%2fShops%2f63128107%2f58E2%2fA93F%2fAA0E%2fC860%2f97EB%2fC0A8%2f2BBA%2f4754%2f180074_GRIP_Handyhalter.jpg&ehk=3g6EDxPwvNRZSaCsh%2f1HkDMjdeYH%2f0Knyw7WRbYy0CI%3d&risl=&pid=ImgRaw&r=0"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>

          <div className="category col-3">
          <Link to="/store/products/Camera">
              <img
                src="https://th.bing.com/th/id/R.b14dd0102f2d1f52e515c8dffae6eab6?rik=TyZijoTgfqA1Jw&pid=ImgRaw&r=0"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>

          <div className="category col-3">
          <Link to="/store/products/Mobile">
              <img
                src="https://i5.walmartimages.com/asr/6141f2d4-b0c9-4ac8-977f-f55573483ba0_1.35c4007b808eeb89e09c9f2a52570820.jpeg"
                style={{
                  width: "300px",
                  height: "500px",
                  cursor: "pointer",
                }}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="latest-store-cover my-4">
        <img src="https://i.ibb.co/XJSwxr6/Cover1.jpg" alt="" />
      </div> */}
      <div className="latest-store-cover my-4">
        <img src={p1} alt="" />
      </div>

      <div className="latest-store-items p-4">
        <h1 className="display-6 px-5">
          <p>
            {" "}
            <b> Latest Products </b>{" "}
          </p>
        </h1>
        <div className="products-list row p-5">
          {products &&
            products.map((prod) => (
              <div className="col mt-4">
                <StoreProductSingle
                  key={prod._id}
                  img={prod.image}
                  title={prod.name}
                  price={prod.price}
                  id={prod._id}
                />
              </div>
            ))}
        </div>

        <div className="latest-store-cover my-4">
          <img src={p2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
