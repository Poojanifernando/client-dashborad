import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import MachineRegister from './MachineRegister';


const ViewMachine = () => {


    return (
        <div>
            <MachineRegister/>
            <div style={{ textAlign: "center" }}>
                <div>
                    <div >
                        <table className="table table-bordered" style={{ borderColor: '#000C66', color: '#000C66' }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Machine ID</th>
                                    <th>Machine Description</th>
                                    <th>Machine Name</th>
                                    <th>Machine Image</th>
                                </tr>
                            </thead>
                            {/*  <tbody>
                             {product.map((product,index)=>(
                                 <tr key={index}>
                                     <th scope="row">{index+1}</th>
                                     <td>{product?.productID}</td>
                                     <td>{product?.productDescription}</td>
                                     <td>{product?.productName}</td>
                                     <td>{product?.productImage}</td>
                                  
                                   
                                     <td>
                                      <Link to ={{pathname:`/UpdateProduct/${product.productID}`}}>
                                     <button  type="button"  className="btn btn-primary" style={{marginTop:'10px', backgroundColor:'#000C66'}} >  
                                     <i className='fas fa-edit'></i>&nbsp; Edit </button>
                                     </Link>&nbsp; 
                                     <button  type="button" onClick={()=>deleteProduct(product.productID)} className="btn btn-danger" style={{marginTop:'10px'}} >
                                     <i className ="far fa-trash-alt"> </i>&nbsp;Delete </button>

                                     </td>
 
                                 </tr>
                             ))}
                             </tbody>*/}
                        </table>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default ViewMachine;