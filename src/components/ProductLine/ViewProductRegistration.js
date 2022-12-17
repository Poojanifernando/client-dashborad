import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import {createProduct , DeleteProductById, getAllProducts} from "../Services/ProductServices";
// import axios from 'axios';
// import ImageUploading from "react-images-uploading"
import "../../css/Table.css"




const ViewProductRegistration = () => {

    let navigate = useNavigate();

    const [product, setproduct] = useState([]);

    const [productID, setproductID] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [productName, setproductName] = useState('');
    const [productImage, setproductImage] = useState('');



    const handleproductID = (e) => {
        setproductID(e.target.value);
    };

    const handleproductDescription = (e) => {
        setproductDescription(e.target.value);
    };

    const handleproductName = (e) => {
        setproductName(e.target.value);
    };

    const handleproductImage = (e) => {
        setproductImage(e.target.value);
        // console.log(e.target.files)
        //setproductImage(e.target.files[0]);
    };

    /* const handleproductImage = (e) => {
         console.log(e.target.files)
         setproductImage(e.target.files[0]);
     };*/




    // const AddNewProductData = async (e) => {
    //     e.preventDefault();
    //     const newdata = {
    //         productID:productID,
    //         productDescription:productDescription,
    //         productName:productName,
    //         productImage:productImage

    //     }
    //     console.log("sending data", newdata);
    //     let data = await createProduct(newdata);
    //     console.log("Register Topic ", data);
    //     if (data.status===!200) {
    //         console.log(" not success");


    //     }
    //     else {
    //         console.log("sucess");
    //         navigate("/ViewProduct");
    //     }
    //   }

    //   const GetAllProductstotable = async () =>{
    //     let data = await getAllProducts();
    //     console.log("All products",data);
    //     setproduct(data?.data?.content);
    // }


    useEffect(() => {
        // GetAllProductstotable();
    }, [])

    //   const deleteProduct = async (productID) =>{
    //     let data = await DeleteProductById(productID);
    //     console.log("Delete ",data);
    //     if(!data?.data?.message)
    //     {
    //         alert("delete failed..");
    //     }
    //     else
    //     {
    //         alert(data.data.message);
    //         navigate("/ViewProduct")

    //     }
    //   }






    return (
        <div>
            <div>
                <div>
                    <div>
                        <center>
                            <table className="table table-bordered tablestyle">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product ID</th>
                                        <th>Product Description</th>
                                        <th>Product Name</th>
                                        <th>Product Image</th>
                                        <th>Update/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.map((product, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{product?.productID}</td>
                                            <td>{product?.productDescription}</td>
                                            <td>{product?.productName}</td>
                                            <td>{product?.productImage}</td>
                                            <td>
                                                <Link to={{ pathname: `/UpdateProduct/${product.productID}` }}>
                                                    <button type="button" className="btn btn-primary" style={{ marginTop: '10px', backgroundColor: '#000C66' }} >
                                                        <i className='fas fa-edit'></i>&nbsp; Edit </button>
                                                </Link>&nbsp;
                                                <button type="button"
                                                    //   onClick={()=>deleteProduct(product.productID)}
                                                    className="btn btn-danger" style={{ marginTop: '10px' }} >
                                                    <i className="far fa-trash-alt"> </i>&nbsp;Delete </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </center>
                    </div>
                </div>
            </div>


        </div>




    )
}







export default ViewProductRegistration;