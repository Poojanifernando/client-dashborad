import React, {useState, useEffect} from 'react'
import {  Link ,useNavigate  } from "react-router-dom";
import registerImage from '../../images/register123.webp';



const   UserRegister = () => {


    return(

        <div>
            <center> 
            <h1 style={{ textAlign:'center',fontSize:"50px", height:'70px',width:'700px',borderRadius:'30px', marginTop:'50px',fontFamily:'revert',color:'white', backgroundColor:'#000C66'}}><i><b> User Registration</b></i></h1>
            <table  style = {{width:'450px', height:'280px'}}>
                <tr>
                    <thead>
                            <th>

                                <img src={registerImage} alt="registerImage" height={1000} width={1000}/>
                            </th>

                            <th>   
                            <form>
                            <br/><br/>     
                          
                            <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>User ID :  </label>
                                <input  type = "text"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your ID Number'
                                //value={productID} 
                           />
                       
                            </div>

                            <br/>


                            <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}> Name :  </label>
                                <input  type = "text"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your Name'
                                //value={productID} 
                           />
                           <br/>

                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>National ID:  </label>
                                <input  type = "text"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your NIC'
                                //value={productID} 
                           />

                           </div>
                           <br/>


                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>Contact Number:  </label>
                                <input  type = "text"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your Phone Number'
                                //value={productID} 
                           />

                           </div>
                           <br/>



                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>Position:  </label>
                                <input  type = "text"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your Position'
                                //value={productID} 
                           />

                           </div>
                           <br/>


                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>Email Address :  </label>
                                <input  type = "email"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='example@email.com'
                                //value={productID} 
                           />

                           </div>
                           <br/>


                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>Password :  </label>
                                <input  type = "password"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your Position'
                                //value={productID} 
                           />

                           </div>
                           <br/>


                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>Retype Password :  </label>
                                <input  type = " retype password"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your Position'
                                //value={productID} 
                           />

                           </div>
                           <br/>


                           <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'360px', marginRight:'200px'}}>  
                                <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>Role :  </label>
                                <input  type = "text"
                                 // onChange={handleproductID} 
                                 className="form-control"
                                 placeholder='Your User Role'
                                //value={productID} 
                           />

                           </div>
                           <br/>
                            </div>
                            </form>

                            <button  className="btn btn-primary" type="submit"  style={{borderRadius:'25px', width:'210px',height:'60px', backgroundColor:'#000C66', marginLeft:'120px'}}>
                            Register </button>
                            <br/><br/>
             
                             <b style={{marginLeft:'120px', color:'blue'}}><u>Already have an account?</u></b> &nbsp;&nbsp;     
                            <a href='/'>Login</a>
                            </th>
                          
                         
                    </thead>
                </tr>
            </table>
            </center>



         
      
      
     

        </div>
    )



}

export default UserRegister;