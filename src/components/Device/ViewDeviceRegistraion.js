import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import DeviceRegistration from './DeviceRegistration';
import "../../css/Table.css"
import axios from 'axios'

const ViewDeviceRegistraion = () => {
    let getDetailsforTheDevice = "http://localhost:8081/api/v1/devices/getAllDevice"

    const [Device , setDevice] = useState([]);

    const GetDevices = async() =>{
        axios.get(getDetailsforTheDevice).then((response) => {
            setDevice(response?.data.content);
        });
        // let data = await getAllDetails();
        // setDevice(data?.data);
      }

    useEffect(() => { 
        GetDevices()
     },[])
    
     console.log("machine",Device);

    return (
        <div>
            <DeviceRegistration/>
            <div>
                <div>
                    <div >
                        <table className="table table-bordered tablestyle" >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>deviceGPSLocation</th>
                                    <th>Job Description</th>
                                    <th>Job Name</th>
                                    <th>Customer Name</th>
                                    <th>Product Name</th>
                                    <th>Product Count</th>
                                    <th>Update/Delete</th>
                                </tr>
                            </thead>
                             <tbody>
                             {Device.map((Device,index)=>(
                                 <tr key={index}>
                                     <th scope="row">{index+1}</th>
                                     <td>{Device?.deviceID_dvcReg}</td>
                                     <td>{Device?.deviceName_dvcReg}</td>
                                     <td>{Device?.parameterType_dvcReg}</td>
                                     <td>{Device?.deviceIpAddress
}</td>
                                  
                                   
                                     {/* <td>
                                      <Link to ={{pathname:`/UpdateProduct/${product.productID}`}}>
                                     <button  type="button"  className="btn btn-primary" style={{marginTop:'10px', backgroundColor:'#000C66'}} >  
                                     <i className='fas fa-edit'></i>&nbsp; Edit </button>
                                     </Link>&nbsp; 
                                     <button  type="button" onClick={()=>deleteProduct(product.productID)} className="btn btn-danger" style={{marginTop:'10px'}} >
                                     <i className ="far fa-trash-alt"> </i>&nbsp;Delete </button>

                                     </td> */}
 
                                 </tr>
                             ))}
                             </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDeviceRegistraion;