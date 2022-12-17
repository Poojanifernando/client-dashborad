import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../css/Form.css"


const AddParameter = () => {


    return (
        // <div>
        //     <div>
        //         <br /><br />
        //         <center>
        //             <h1 style={{ textAlign: 'center', fontSize: "50px", height: '70px', width: '900px', borderRadius: '30px', marginTop: '10px', fontFamily: 'revert', color: 'white', backgroundColor: '#000C66' }}><i><b> Parameter Registration</b></i></h1>
        //         </center>
        //         <br />
        //         <center>
        //             <form style={{ marginLeft: '-100px' }}>

        //                 <table>
        //                     <tr>
        //                         <thead>
        //                             <th>
        //                                 <div className="form-group mb-2" style={{ marginBottom: '30px', color: 'darkblue', width: '280px', marginRight: '200px' }}>
        //                                     <label className="label" style={{ fontSize: '20px', fontFamily: 'revert', color: '#000C66' }}>Parameter ID  :  </label>
        //                                     <input type="text" style={{ backgroundColor: '#B2BEB5', borderRadius: '20px', width: '350px', height: '50px' }}
        //                                         // onChange={handleproductID} 
        //                                         className="form-control"
        //                                     // value={productID} 
        //                                     /><br /><br />
        //                                 </div>
        //                             </th>


        //                             <th>

        //                                 <div className="form-group mb-2" style={{ marginBottom: '20px', color: 'darkblue', width: '280px', marginLeft: '10px' }}>
        //                                     <label className="label" style={{ fontSize: '20px', fontFamily: 'revert', color: '#000C66' }}>Parameter Type :  </label>
        //                                     <input type="text" style={{ backgroundColor: '#B2BEB5', borderRadius: '20px', width: '350px', height: '50px' }}
        //                                         // onChange={handleproductDescription} 
        //                                         className="form-control"
        //                                     // value={productDescription} 
        //                                     />
        //                                     <br /><br />
        //                                 </div>

        //                             </th>
        //                         </thead>
        //                     </tr>
        //                     <tbody>
        //                         <tr>
        //                             <td>
        //                                 <div className="form-group mb-2" style={{ marginBottom: '30px', color: 'darkblue', width: '280px' }}>
        //                                     <label className="label" style={{ fontSize: '20px', fontFamily: 'revert', color: '#000C66' }}><b>Parameter Limit  :  </b></label>
        //                                     <input type='text' style={{ backgroundColor: '#B2BEB5', borderRadius: '20px', width: '350px', height: '50px' }}
        //                                         // onChange={handleproductName} 
        //                                         className="form-control"
        //                                     //value={productName} 
        //                                     /><br />
        //                                 </div>
        //                             </td>
        //                             <td>
        //                                 <div className="form-group mb-2" style={{ marginBottom: '30px', color: 'darkblue', width: '290px', marginLeft: '-280px' }}>
        //                                     <label className="label" style={{ fontSize: '20px', fontFamily: 'revert', color: '#000C66' }}><b>Measuring Unit  :  </b></label>
        //                                     <input type='file' style={{ backgroundColor: '#B2BEB5', borderRadius: '20px', width: '350px', height: '50px' }}
        //                                         //  onChange={handleproductImage} 
        //                                         className="form-control"
        //                                     //  value={productImage} 
        //                                     />
        //                                     <br />
        //                                 </div>
        //                             </td>
        //                         </tr>
        //                     </tbody>
        //                 </table>
        //                 <br />
        //             </form>
        //         </center>

        //         <button className="btn btn-primary" type="submit" style={{ marginLeft: '900px', borderRadius: '20px', width: '200px', backgroundColor: '#000C66' }}>
        //             Save </button>
        //         &nbsp;&nbsp;   &nbsp;&nbsp;    &nbsp;&nbsp;

        //         <button className="btn btn-secondary" type="submit" style={{ borderRadius: '20px', width: '200px', backgroundColor: '#B2BEB5' }}>
        //             Cancel </button>
        //     </div>
        // </div>


        <div>
            <div className='before'>
                <h1 className='Title'>Parameter Registration</h1>
            </div>
            <div className='aa'>
                <form className='bb card'>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="ParameterID">Parameter ID  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Parameter ID" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="ParameterType">Parameter Type :</label><br />
                            <input type="text" class="inputTypes" placeholder="Parameter Type" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="ParameterLimit">Parameter Limit  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Parameter Limit" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="MeasuringUnit">Measuring Unit  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Measuring Unit" />
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

export default AddParameter;