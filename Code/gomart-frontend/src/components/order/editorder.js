import React,  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
// import Modal from 'react-modal';

const EditOrder = () => {
    // const params = useParams();
   
    const [OrderID, setOrderID] = useState("");
    const [OrderDate, setOrderDate] = useState("2022-09-15");
    const [DespatchDate, setDespatchDate] = useState("2022-09-18");
    const [DeliveryMethod, setDeliveryMethod] = useState("");
    const [Remarks, setRemarks] = useState("");
    const [ItemList, setItemList] = useState([
        {"item":"Pen Drive","quantity":20, "price":4000.00},
        {"item":"Iphone 11 pro Max","quantity":1, "price":220000},
        {"item":"air Pods", "quantity":4,"price":200000}
      ]);
    const [inti, setInti] = useState(0);
    // const [crew, setCrew] = useState([]);
// console.log("call");

let { id } = useParams();
const demo = () => {
    
    setOrderDate("2022-09-15");
    setDespatchDate("2022-09-18");
    setItemList([
        {"item":"Pen Drive","quantity":20, "price":4000.00},
        {"item":"Iphone 11 pro Max","quantity":1, "price":220000},
        {"item":"air Pods", "quantity":4,"price":200000}
      ])
    
    
  }
useEffect(()=>{
    console.log("useEffect -call");
  if (inti==0){
         console.log("useEffect-condition");
        
         setOrderDate("2022-09-15");
    setDespatchDate("2022-09-18");
        axios.get('http://localhost:8000/api/order/get/'+ id)
        .then(function (response) {
          // handle success
          setInti(2); 
          console.log(response.data);
          

        //   setCrew(response.data.crew);
        setOrderID(response.data.order.OrderID);
        setOrderDate(response.data.order.OrderDate);
        setDespatchDate(response.data.order.DespatchDate);
        setDeliveryMethod(response.data.order.DeliveryMethod);
        setRemarks(response.data.order.Remarks);

        //   console.log("order details"+ contactNo + employeeName +employeeID);
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });  
        setInti(1);        
    }  
});
function  sendData(){
    console.log("send data function called");
    
    const data ={
        OrderID:OrderID,
        OrderDate:OrderDate,
        DespatchDate:DespatchDate,
        DeliveryMethod:DeliveryMethod,
        Remarks:Remarks
            }
        
            console.log(data)

            axios.put(`http://localhost:8000/api/order/update/`+id, data)
            .then((res) =>{
                if(res.data.success){
                    alert("Order Updated Successfully");
                   
                    window.location.href = '/order/viewdeleteorder';
        }});
    }


    return(
    <div
    className="col-md-10 mt-6 mx-auto"
    style={{
      marginBottom: "40px",
      marginTop: "100px",
      border: "2px solid #078282",
    }}
   >
   <div class="row">
       <div class="col-md-6 mt-2">
   <div class="col md-10">
 
   <h5
           style={{
             color: "#111",
             fontFamily: "Helavetica Neue",
             fontSize: "60px",
             fontWeight: "bold",
             letterSpacing: "-1px",
             marginBottom: "50px",
             lineHeight: "1",
             textAlign: "center",
           }}
         >
           <span
             className="p-1 px-4 rounded text-white"
             style={{ backgroundColor: "#078282", marginLeft: "4px" }}
           >
             Edit Order
           </span>
         </h5>
         <div class="justify-content-md-center">
           <div class="row">
           <div class="col-1"></div>
           
   <div class="col-9">
  
         <div className="form-group" style={{ marginBottom: "15px" }}>
         <div class="d-flex justify-content-start"><label >Order ID</label></div>
         <input
           type="text"
           class="form-control"
           id="formGroupExampleInput"
           placeholder="Name"
           required
           value={OrderID}
           style={{ color: "rgba(0, 0, 0, 0.7)" }}
           onChange={(e) => {
            setOrderID(e.target.value);
           }}
         />
         <br/>
         <p class="alert-txt" style={{ color: "red" }}>
           {/* {formErrors.name} */}
         </p>
       </div>

       <div class="form-group">
       <div class="d-flex justify-content-start"><label >Order Date</label></div>
         <input
           type="date"
           class="form-control"
           id="formGroupExampleInput2"
           placeholder="Order Date"
           required
           value={"2022-09-15"}
           style={{ color: "rgba(0, 0, 0, 0.7)" }}
           onChange={(e) => {
             setOrderDate(e.target.value);
           }}
         />
         <br />
         <p class="alert-txt" style={{ color: "red" }}>
           {/* {formErrors.brand} */}
         </p>
       </div>

       <div class="form-group">
       <div class="d-flex justify-content-start"><label >Despated ID</label></div>
         <input
           type="date"
           class="form-control"
           id="formGroupExampleInput2"
           placeholder="Despated Date"
           required
           value={DespatchDate}
           style={{ color: "rgba(0, 0, 0, 0.7)" }}
           onChange={(e) => {
             setDespatchDate(e.target.value);
           }}
         />
         <br />
         <p class="alert-txt" style={{ color: "red" }}>
           {/* {formErrors.price} */}
         </p>
       </div>

       <div class="form-group">
       <div class="d-flex justify-content-start"><label >Delivery Method </label></div>
         <input
           type="text"
           class="form-control"
           id="formGroupExampleInput2"
           placeholder="Delevey Method"
           required
           value={DeliveryMethod}
           style={{ color: "rgba(0, 0, 0, 0.7)" }}
           onChange={(e) => {
             setDeliveryMethod(e.target.value);
           }}
         />
         <br />
         <p class="alert-txt" style={{ color: "red" }}>
           {/* {formErrors.price} */}
         </p>
       </div>
       <div class="form-group">
         <input
           type="text"
           class="form-control"
           id="formGroupExampleInput2"
           placeholder="Remarks"
           required
           value={Remarks}
           style={{ color: "rgba(0, 0, 0, 0.7)" }}
           onChange={(e) => {
             setRemarks(e.target.value);
           }}
         />
         <br />
         <p class="alert-txt" style={{ color: "red" }}>
           {/* {formErrors.price} */}
         </p>
       </div>
       <div>
         <Link to="/Products">
           {" "}
           <button
             type="button"
             onClick={sendData}
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
       
       <div class="col-2"></div>
    
       </div>
      </div>
      </div>
   </div>
</div>

{/* start 2nd column */}
<div class="col-md-6">
<div class="table-responsive ">  
<div class="col-9 ">
 <table class="table">
   <thead>
     <tr>
       
       <th>Item</th>
       <th>Quantity</th>
       <th>Price</th>
       
     </tr>
   </thead>
   <tbody>
   {ItemList.map((item) =>(
                       <tr>
                           <td>{item.item}</td>
                           <td>{item.quantity}</td>
                           <td>{item.price}</td>
                       </tr>
                   ))}
   </tbody>
 </table>
 </div> 
      
</div>
</div>
</div>

</div>);
};
export default EditOrder;