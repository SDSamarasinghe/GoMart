import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";
import { Link } from "react-router-dom";

const PropertyCatalog = () => {
  
  const [ads, setAds] = useState(undefined);
  const [AdSearch , setadSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Products/all`)
      .then((res) => {
        setAds(res.data);
      });

    console.log(ads);
  }, []);
  
  return (
<div style={{backgroundColor:"#f0fff4"}}>
<br/>



<div className='col-md-8 mt-4 mx-auto' style={{marginBottom:"40px"}}>
  

<br/>
<div className="input-group" style={{ width: "18rem", border:"1px solid #e2ebd8" }}>
  <input type="search" onChange ={(e)=>{setadSearch(e.target.value); }} className="form-control rounded" placeholder="Type" aria-label="Search" aria-describedby="search-addon" />
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
{ads && ads.filter(value=>{
            if(AdSearch ===""){
                return value;
            }else if(
                value.type.toLowerCase().includes(AdSearch.toLowerCase())
            ){
                return value
            }
        }).map((ad) => (
    <div className="card" style={{ width: "15rem", margin: "1rem", height:"20rem",marginLeft:"1px" }}>
    <div className="card-bodies">
    <div className="product-image" style={{height:"10px", marginTop:"10px"}}>
        <img src={ad.image} alt="product" style={{width:"170px",height:"170px"}}/>
      </div>
      <p className="card-text">Rs. {ad.name} </p><br/>
      <p className="card-title">{ad.brand}</p>
      <p className="card-type">{ad.category}</p>
      <p className="card-area">{ad.price}</p>
      <div>
      <span className="secondary p-1 px-4 rounded text-white" style={{backgroundColor:"#5cb85c"}}>
      <Link className="card-link"to={`/Product/Ad/${ad._id}/${ad.name}/${ad.brand}/${ad.category}/${ad.price}/${encodeURIComponent(ad.image)}`}
      style={{color:"white"}}>more..</Link>
      </span>
      </div>
    </div>
    <div className="card-body">
    </div>
  </div>
          ))}
      </div>
  </div>
  </div>
  );
}
export default PropertyCatalog;

