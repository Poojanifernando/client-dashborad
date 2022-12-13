import axios from 'axios'

let getpDetails = "http://localhost:8081/api/v1/products/getAllProduct"
let CreatepURL = "http://localhost:8081/api/v1/products/saveProduct"



export async function createProduct(data) {
    const alldata = {
                productID:data.productID,
                productDescription:data.productDescription,
                productName:data.productName,
                productImage:data.productImage,
                
    };

    return await axios.post(CreatepURL,alldata);
}


export async function getAllpDetails(){
    return axios.get(getpDetails);
    
 }
