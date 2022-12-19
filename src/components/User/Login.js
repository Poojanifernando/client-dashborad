import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from "react-router-dom";
import "../../css/Login.css";



const Login = () => {
    const history = useNavigate();

    const goto = (e) => {
        e.preventDefault();
        history('/Register');
    }

    const login =(e)=>{
        e.preventDefault();
        history('/Dashboard');
    }

    return (

        <div className='backgroundcolor'>
            <div className='top'>
                <form className='second card1'>
                    <h1 className='Titlelogin'>Login</h1>
                    <div class="newrowLogin">
                        <div class="">
                            <label className='newrowLogin' for="UserName">User Name</label><br />
                            <input type="text" class="inputTypes" placeholder="User Name" />
                        </div>
                    </div>
                    <div class="">
                        <label className='newrowLogin' for="Password">Password</label><br />
                        <input type="password" class="inputTypes" placeholder="Password" />
                    </div>
                    <div class="roLogin">
                        <button className="saveBTN" type="submit" onClick={login} >Login </button>
                    </div>
                    <div class="roLogin">
                        <button className="link" type="submit" onClick={goto}>Create an Account </button>
                    </div>
                    {/* <div className='outer'>
                        <div className='inner'>
                            <button className="btn btn-primary  saveBTN" type="submit" >Login </button>
                            <button className="link" type="submit" >Create an Account </button>
                        </div>
                    </div> */}
                </form>
            </div>
        </div>
    )



}

export default Login;