import React, { useState, useEffect } from 'react'
import "../../css/AddProductLine.css";
import { Link, useNavigate } from "react-router-dom";


const AddProductLine = () => {


    return (

        <div>
            <div className='before'>
                <h1 className='Title'> Product Line Registration</h1>
            </div>
            <div className='form'>
                <div className='aa'>
                    <div className='bb'>
                        <form className="card">

                            <div class="row">
                                <div class="column">Product Line  ID  : </div>
                                <div class="column">Product Line Description  : </div>
                            </div>

                            <div class="row">
                                <div class="column"><input type="text" className='inputTypes'
                                // onChange={handleproductID} 
                                // className="form-control"
                                // value={productID} 
                                /></div>
                                <div class="column"><textarea type='text' className='inputTypes'
                                // onChange={handleproductDescription} 
                                // className="form-control"
                                // value={productDescription} 
                                /></div>
                            </div>

                            <div class="row">
                                <div class="column">Product Line Name  :  </div>
                                <div class="column">Product Line Image  :</div>
                            </div>

                            <div class="row">
                                <div class="column"><input type='text' className='inputTypes'
                                // onChange={handleproductName} 
                                // className="form-control"
                                //value={productName} 
                                /></div>
                                <div class="column"><input type='text' className='inputTypes'
                                //  onChange={handleproductImage} 
                                // className="form-control"
                                //  value={productImage} 
                                /></div>
                            </div>

                            <div class="row">
                                <div class="column">Start Time  :  </div>
                                <div class="column">End Time :  </div>
                            </div>

                            <div class="row">
                                <div class="column"><input type='time' className='inputTypes'
                                //  onChange={handleproductImage} 
                                // className="form-control"
                                //  value={productImage} 
                                /></div>
                                <div class="column"><input className='inputTypes' type='time'
                                //  onChange={handleproductImage} 
                                // className="form-control"
                                //  value={productImage} 
                                /></div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            {/* <button className="btn btn-primary" type="submit" style={{ marginLeft: '900px', borderRadius: '20px', width: '200px', backgroundColor: '#000C66' }}>
                Save </button>
            &nbsp;&nbsp;   &nbsp;&nbsp;    &nbsp;&nbsp;
            <button className="btn btn-secondary" type="submit" style={{ borderRadius: '20px', width: '200px', backgroundColor: '#B2BEB5' }}>
                Cancel </button> */}
                
                <div className='outer'>
                <div className='inner'>
                <button className="btn btn-primary  saveBTN" type="submit" >Save </button>
                <button className="btn btn-primary cansalBTN" type="submit" >Cancel </button>
                </div>
                </div>
        </div>
    )
}

export default AddProductLine;