import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Store.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const StoreAdminOrders = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/products`).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const deleteProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8000/api/store/products/${id}`)
          .then(() => {
            swal("Product Deleted Successfully!", {
              icon: "success",
            });

            axios
              .get(`http://localhost:8000/api/store/products`)
              .then((res) => {
                setProducts(res.data.products);
              });
          });
      }
    });
  };

  const reportRef = useRef();

  const printPdf = () => {


const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

const exportToCSV = (collection, fileName) => {
  const ws = XLSX.utils.json_to_sheet(collection);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

exportToCSV(products, "Products")
  };

  return (
    <>
      <div className="store-container d-flex justify-content-center p-5">
        <div className=" w-100" id="store-admin-admin456412123">
          <h3 onClick={printPdf}> Store Products Admin </h3>
          <p> These are the products exists inside the store </p>

          <div className="d-flex">
            <Link to="/store/product/add-product">
              <button className="btn btn-success">
                <i class="fa-solid fa-plus mx-2"></i> Add Product to Store
              </button>
            </Link>

            <button onClick={printPdf} className="btn btn-success mx-4">
              <i class="fa-solid fa-file-pdf mx-2"></i> Download Products As PDF
            </button>
          </div>

          <table
            class="table mt-4 store-orders-container pdfdiv"
            id="app-store-admin-table-header-44512135"
            ref={reportRef}
          >
            <thead className="store-admin-table-header">
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((prod) => (
                  <tr>
                    <th scope="row" style={{ width: "300px" }}>
                      {prod._id}
                    </th>
                    <td>
                      <img
                        src={prod.image}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginRight: "20px",
                        }}
                      />
                      {prod.name}
                    </td>
                    <td>{prod.category}</td>
                    <td style={{ width: "300px" }}>
                      <Link to={`/store/store-admin-products/edit/${prod._id}`}>
                        <button
                          type="button"
                          class="btn btn-outline-warning mx-2"
                        >
                          Edit <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteProduct(prod._id)}
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        Delete <i class="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StoreAdminOrders;
