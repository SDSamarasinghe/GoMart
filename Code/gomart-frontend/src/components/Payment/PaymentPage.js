import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PaymentPage = () => {

    const [cartProduct, setCartProduct] = useState([]);
    console.log(cartProduct);
    
    const fetchData = async () => {
        const product = await axios.get("http://localhost:5000/api/customerCart/getAll");
        setCartProduct(product.data);
    }
    useEffect(() => {
        fetchData();
        // console.log(cartProduct);
    }, []);

    return (
        <div className='mt-5'>
            <h1 className='container'>Payment Page</h1>
            <div className='container'>
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                        <th scope="col">id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Unit Price(Rs.)</th>
                        <th scope="col">Quentity</th>
                        <th scope="col">Product Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            cartProduct.map((element, id) => {
                                return (
                        <tr>
                        <th scope="row">{id + 1}</th>
                            <td>{element.productName}</td>
                            <td>{element.price}</td>
                            <td>{element.buyingQty}</td>
                            <td>{element.buyingQty * element.price}</td>
                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="add_btn mt-2">
                    <hr className='lines' />
                    <input type="text" className="totalPrice" id="totalPrice" value="Total Price" disabled/>
                    <hr className='lines' />
                    <hr className='lines' />
                </div>
                <div className='add_btn mt-2'>
                    <button className='btn btn-primary'>Payment <i class="fa-solid fa-credit-card"></i></button>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage