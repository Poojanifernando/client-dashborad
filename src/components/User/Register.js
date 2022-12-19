import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import registerImage from '../../images/register123.webp';
import "../../css/Register.css";



const Register = () => {

    const history = useNavigate();

    const signin =(e)=>{
        e.preventDefault();
        history('/login');
    }


    return (

        <div className='backgroundcolorReg'>
            <div className='topreg'>
                <form className='secondreg cardreg'>
                    <div className='toppaddingreg'>
                        <h1 className='Titlereg'>User Registration</h1>
                    </div>
                    <div className='paddingToTop'></div>

                    <div class="">
                        <label className='newrowreg' for="UserID"><b>User ID :</b></label><br />
                        <input type="text" class="inputTypesreg" placeholder="User ID" name="UserID" required />
                    </div>
                    <div class="">
                        <label className='newrowreg' for="National ID"><b>National ID :</b></label><br />
                        <input type="text" class="inputTypesreg" placeholder="National ID" name="NationalID" required />
                    </div>
                    <div class="">
                        <label className='newrowreg' for="ContactNumber"><b>Contact Number :</b></label><br />
                        <input type="text" class="inputTypesreg" placeholder="Contact Number" name="ContactNumber" required />
                    </div>
                    <div class="">
                        <label className='newrowreg' for="ContactNumber"><b>Contact Number :</b></label><br />
                        <input type="text" class="inputTypesreg" placeholder="Contact Number" name="ContactNumber" required />
                    </div>
                    <div class="">
                        <label className='newrowreg' for="Position"><b>Position :</b></label><br />
                        <input type="text" class="inputTypesreg" placeholder="Position" name="Position" required />
                    </div>
                    <div class="">
                        <label className='newrowreg' for="psw"><b>Password</b></label><br />
                        <input type="password" class="inputTypesreg" placeholder="Enter Password" name="psw" required />
                    </div>
                    <div class="">
                        <label className='newrowreg' for="Role "><b>Role</b></label><br />
                        <input type="text" class="inputTypesreg" placeholder="Role" name="Role" required />
                    </div>

                    <div class="roreg">
                        <button className="saveBTN" type="submit" onClick={signin}>Sign-In</button>
                    </div>
                
                </form>
            </div>
        </div>

    )



}

export default Register;