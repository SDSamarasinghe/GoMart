import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Ads.css";
import swal from "sweetalert";
import product from "./img/add-product.png";

const AdvertiserForm = () => {
  const [listOfAds, setListOfAdvertisement] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [smallDes, setSmallDesc] = useState("");
  const [image, setImg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };

  const validate = () => {/*form validations*/ 
    const errors = {};
    const ne = /^[0-9\b]+$/;
    var re = /\S+@\S+\.\S+/;

    if (!name) {
      errors.name = "name is required!";
    }
    
    if (!brand) {
      errors.brand = "brand is required!";
    }
    
    if (!category) {
      errors.category = "Category is required!";
    }
    
    if (!smallDes) {
      errors.heading = "smallDes is required!";
    }
    
    if (!image) {
      errors.image = "Image is required!";
    }

    if (!ne.test(price)){
      errors.price = "This priceRate is not valid!";
    }
    if (!price) {
      errors.price = "price is required!";
    }
    if (!smallDes) {
      errors.smallDes = "Description is required!";
    }
  
    return errors;
  };



  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createAd();
    }
  };

  const demo = () => {
    
    setName("Samsung S20");
    setBrand('Samsung');
    setPrice("233,000");
    setCategory("Mobile");
    setSmallDesc("1.5km from kurusa kanuwa junction (Nittambuwa-Airport road). 5 km away from Katunayake international airport & Minuwangoda town. Land is facing to a paddy field & a river");
    setImg("https://th.bing.com/th/id/R.af33f17558bd971ed68403483f4a1c4a?rik=Y4WMeusyShvTrA&riu=http%3a%2f%2fwww.southsrilankaproperty.com%2fwp-content%2fuploads%2f2017%2f08%2fAttractive-Coconut-Plantation-Plot-for-a-Villa-2.jpg&ehk=ibkoQ0N5qejqrN734rJBrnhgMtlOWCLK0LnB8z552mU%3d&risl=&pid=ImgRaw&r=0");
    
  };

  

  const createAd = () => {
    axios
      .post("http://localhost:8000/api/Products/", {
        name,
        brand,
        category,
        smallDes,
        image,
        price,
      })
      .then((response) => {
        setListOfAdvertisement([
          ...listOfAds,
          {
            name,
            brand,
            category,
            smallDes,
            image,
            price,
          },
        ]);
      });
    swal({
      title: "Product Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.href = "/test";
    });
  };

  return (
    <div style={{width:"1000px"}}>
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"40px",marginTop:"200px", border:"2px solid #078282"}}>
   
     
    
      <div style={{ backgroundColor: "black" }}></div>
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          backgroundColor:"white",
          borderRadius: "30px",
          paddingBottom:"10px",
          margin: "2px",
        }}
      >
        <center>
        
        <div style={{marginLeft:"-500px"}}>
        <h4
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
          <span className="p-1 px-4 rounded text-white" style={{backgroundColor:"#078282",marginLeft:"480px"}}>
          Add Product
          </span>
        </h4>
        </div>
  <div className="form-group" style={{ marginBottom: "15px" }}>
   
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"
     required
     value={name}
     style={{color: "rgba(0, 0, 0, 0.7)"}}
     onChange={(e) => {
      setName(e.target.value);
     }}
    />
    <br/>
    <p class="alert-txt" style={{color:"red"}}>{formErrors.name}</p>
  </div>


  <div class="form-group">
   
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Brand"
     required
     value={brand}
     style={{color: "rgba(0, 0, 0, 0.7)"}}
     onChange={(e) => {
     setBrand(e.target.value);
    }}
    />
    <br/>
    <p class="alert-txt" style={{color:"red"}}>{formErrors.brand}</p>
  </div>

  <div class="form-group">
   
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price"
      required
      value={price}
      style={{color: "rgba(0, 0, 0, 0.7)"}}
      onChange={(e) => {
      setPrice(e.target.value);
    }}
    
    />
<br/>
    <p class="alert-txt" style={{color:"red"}}>{formErrors.price}</p>
  </div>


  <div class="form-group">
   
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Category"
      required
      value={category}
      style={{color: "rgba(0, 0, 0, 0.7)"}}
      onChange={(e) => {
      setCategory(e.target.value);
    }}
    />

<br/>
    <p class="alert-txt" style={{color:"red"}}>{formErrors.category}</p>
  </div>


  <div class="form-group">
   
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Description"
     required
     value={smallDes}
     style={{color: "rgba(0, 0, 0, 0.7)"}}
     onChange={(e) => {
     setSmallDesc(e.target.value);
  }}
    />
<br/>
    <p class="alert-txt" style={{color:"red"}}>{formErrors.smallDes}</p>
  </div>


  <div class="form-group">
   
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Image"
     required
     value={image}
     style={{color: "rgba(0, 0, 0, 0.7)"}}
     onChange={(e) => {
     setImg(e.target.value);
  }}
    />
<br/>
    <p class="alert-txt" style={{color:"red"}}>{formErrors.image}</p>
  </div>

  <div >
              <Link to="/Products">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn btn-success"
                  style={{ backgroundColor: "#078282" }}
                >
                  Submit
                </button>
              </Link>{" "}
            
            <button
              type="button"
              onClick={demo}
              class="btn store-order-form-button my-4"
            >
              Demo
            </button>
            
          </div>


</center>
      </div >
    </div>
    <div style={{float:"right", marginTop:"-580px",marginRight:"-500px",border:"3px solid #FFFFFF"}}>

    <img width="530" height="500" style={{backgroundImage: `url(${product})`}}/>
  
    </div>
    </div>
  );
};

export default AdvertiserForm;
