import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";


const JobRegistration = () => {


    return (
        <div>
            <div className='before'>
                <h1 className='Title'>Job Registration</h1>
            </div>
            <div className='aa'>
                <form className='bb card'>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="JobID">Job  ID  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Job ID" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="JobDescription">Job Description  :</label><br />
                            <textarea type="text" class="inputTypes" placeholder="Job Description" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="JobName">Job Name  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Job Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="CustomerName">Customer Name  :  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Customer Name" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="ProductName">Product Name  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Product Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="ProductCount">Product Count :</label><br />
                            <input type="number" class="inputTypes" placeholder="Product Count" />
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

export default JobRegistration;