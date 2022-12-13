import React from "react";
import {useState ,useEffect }from 'react'
import {Link} from 'react-router-dom'
import "../css/Dashboard.css";
import {getAllDetails} from '../Services/DashboradService'
//import SideBar from "./SideBar"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Col,
  CardImg,
  CardText,
} from "reactstrap";



const   Dashborad = () => {

    
  const [machine , setmachine] = useState([]);
    
  const GetAllmachines = async () =>{
    let data = await getAllDetails();
    console.log("All products",data);
    setmachine(data?.data?.content);
}
  useEffect(() => { 
    GetAllmachines();
 },[])
    return(

      <div>  
       
       

        <div>
          <table style={{width:'500px',marginTop:'10px'}}>
            <thead>
              <tr>
                <th style={{width:'500px',}}>

        <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
            
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
             
              Analytics
            </li>
            <li className="sidebarListItem">
             
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
              
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
             
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
             
              Transactions
            </li>
            <li className="sidebarListItem">
             
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
    
              Mail
            </li>
            <li className="sidebarListItem">
           
              Feedback
            </li>
            <li className="sidebarListItem">
              
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            
              Manage
            </li>
            <li className="sidebarListItem">
           
              Analytics
            </li>
            <li className="sidebarListItem">
     
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>

</th>
<th>


<div>
{machine?.map((machine,index)=>{
                          return(

                            <div className="featured">
                            <div className="featuredItem">
                        
                              <span className="featuredTitle">Machine ID : {machine?.machineID}</span>
                      
                              <div className="featuredMoneyContainer">
                                <span className="featuredMoney">MachineDescription : {machine?.machineDescription}</span>
                                <span className="featuredMoneyRate">
                                  Batch Number : {machine?.batchNumber}
                                </span>
                                <span className="featuredMoneyRate">
                                Product ID : {machine?.productID}
                                </span>
                              </div>
                              <span className="featuredSub">Parameter1 : heat</span>
                              <span className="featuredSub">Parameter2 : length</span>
                              <span className="featuredSub">Parameter3 : height</span>
                              <table><tr><th>
                              <div className="diagrames1">Heat  <span className="heatfont">{machine?.parameter1}/F</span></div>
                              </th>
                              <th>
                              <div className="diagrames2">Length  <span className="heatfont">{machine?.parameter2}/mm</span></div>
                              </th>
                              <th>
                              <div className="diagrames3">height  <span className="heatfont">{machine?.parameter3}/mm</span></div>
                              </th>
                              </tr></table>
                            </div>                            
                          </div>

                          )})};
                 
                                
                                
    </div>
<div>
               
         </div>

                    
                    


        

      
 

</th>
</tr>
    </thead>
    </table>

        </div>

</div>


      







    
    
    );
};

export default Dashborad;