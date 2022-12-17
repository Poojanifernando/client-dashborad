import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../css/Form.css"

// import {createProduct , DeleteProductById, getAllProducts} from "../Services/ProductServices";
// import axios from 'axios';
// import ImageUploading from "react-images-uploading"





const AddProductRegistration = () => {

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
            <div className='before'>
                <h1 className='Title'> Product Registration</h1>
            </div>
            <div className='aa'>
            <form className='bb card'>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="ProductID">Product ID  :</label><br/>
                        <input type="text" class="inputTypes" id="inputEmail4" placeholder="Product ID" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ProductDescription">Product Description  :</label><br/>
                        <textarea type="text" class="inputTypes" id="inputPassword4" placeholder="Product Description" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="ProductName">Product Name  :</label><br/>
                        <input type="text" class="inputTypes" id="inputEmail4" placeholder=" Product Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ProductImage">Product Image  :</label><br/>
                        <input type="file" class="inputTypes" id="inputPassword4" placeholder="Product Description" />
                    </div>
                </div>
                <div className='outer'>
                <div className='inner'>
                <button className="btn btn-primary  saveBTN" type="submit" >Save </button>
                <button className="btn btn-primary cansalBTN" type="submit" >Cancel </button>
                </div>
                </div>
            </form>
            </div>
        </div>


    )
}







export default AddProductRegistration;