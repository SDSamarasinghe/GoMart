import React, { useEffect, useState } from "react";
import "./Ads.css";

const products = () => {
  
  //const [ads, setAds] = useState(undefined);
    
  
    return (
  <div style={{backgroundColor:"#f0fff4"}}>
  <br/>
  
  <div className="upper-images" style={{border:"2px solid #e2ebd8"}}>
          <img
            className="ecommerce-slide"
            alt=""
          />
          <div class="middle">
      <div class="text"><p style={{color:"#555"}}>Lands To Buy..</p></div>
        <p className="para">Search our selection of land plots for sale in Sri Lanka. 
        Our fast-growing portfolio of properties brings you closer to your ideal home. 
        Every project is monitored and handled by detail-oriented team members 
        committed to serving our customers with the highest possible service to guarantee you find your dream farm.</p>
        <button class="buttonserv"><span>Discover</span></button> 
    </div>
        </div>
  
  <div className='col-md-8 mt-4 mx-auto' style={{marginBottom:"40px"}}>
    
  
  <br/>
  <div className="input-group" style={{ width: "18rem", border:"1px solid #e2ebd8" }} >
    <input type="search" className="form-control rounded" placeholder="Type" aria-label="Search" aria-describedby="search-addon" />
    <button type="button" className="btn btn-outline-primary" style={{color:"black"}}>search</button>
  </div>
  <p>(Filter by type)</p>
  <button className="btn-success"><i className="fa fa-envelope" href='mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello!'></i> Create E-mail Alert</button>
  <button className="btn-success" style={{marginLeft:"10px"}}><i className="fa fa-save"></i> Save Search</button>
  <br/>
  <br/>
  <hr style={{marginLeft:"-250px",marginRight:"-250px"}}></hr>
  <br/>
  
  <div className="products-list row p-5" style={{backgroundColor:"#D3D3D3", boxShadow:"inset 0 0 10px #ffffff", marginLeft:"-250px", marginRight:"-250px"}}>
  
        </div>
    </div>
    </div>
    );
  }
  export default products;
  