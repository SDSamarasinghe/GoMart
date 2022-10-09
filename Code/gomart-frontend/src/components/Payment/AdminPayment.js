import React from 'react'

const AdminPayment = () => {
  return (
    <div className='mt-5'>
        <h1 className='container'>Admin Page</h1>
        <div className='container'>
            <table class="table">
                <thead>
                    <tr className='table-dark'>
                    <th scope="col">id</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Unit Price(Rs.)</th>
                    <th scope="col">Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>#12345</td>
                        <td>user12345</td>
                        <td>654,000</td>
                        <td>Paied</td>
                        <td> <button className='btn btn-primary'><i class="fa-solid fa-gears"></i></button></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                        <td>#12345</td>
                        <td>user12345</td>
                        <td>654,000</td>
                        <td>Paied</td>
                        <td> <button className='btn btn-primary'><i class="fa-solid fa-gears"></i></button></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                        <td>#12345</td>
                        <td>user12345</td>
                        <td>654,000</td>
                        <td>Pending</td>
                        <td> <button className='btn btn-primary'><i class="fa-solid fa-gears"></i></button></td>
                    </tr>
                </tbody>
            </table>
            <div className='add_btn mt-2'>
                <button className='btn btn-danger'>Download PDF  <i class="fa-solid fa-file-arrow-down"></i></button>
            </div>
        </div>
    </div>
  )
}

export default AdminPayment