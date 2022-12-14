import React, { useState, useEffect } from 'react'
import "../../css/Form.css";
import { Link, useNavigate } from "react-router-dom";


const AddProductLine = () => {


    return (
        <div>
            <div className='before'>
                <h1 className='Title'>Product Line Registration</h1>
            </div>
            <div className='aa'>
                <form className='bb card'>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="ProductLineID">Product Line  ID  : </label><br />
                            <input type="text" class="inputTypes" placeholder="Product Line  ID" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Product Line Description  :</label><br />
                            <textarea type="text" class="inputTypes" placeholder="Product Line Description" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="ProductLineName">Product Line Name  :</label><br />
                            <input type="text" class="inputTypes" placeholder="Product Line Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="ProductLineImage">Product Line Image  :</label><br />
                            <input type="file" class="inputTypes" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="StartTime">Start Time  :</label><br />
                            <input type="time" class="inputTypes" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="EndTime">End Time :</label><br />
                            <input type="time" class="inputTypes" />
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

export default AddProductLine;