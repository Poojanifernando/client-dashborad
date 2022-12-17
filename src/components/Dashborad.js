import React from "react";
import {useState ,useEffect }from 'react'
// import {Link} from 'react-router-dom'
import "../css/Dashboard.css";
import {getAllDetails} from '../Services/DashboradService'
import CardView from "./CardView";
import SideBar from "./SideBar";
import Test from "./Test";
import TopBar from "./TopBar";
//import SideBar from "./SideBar"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Button,
//   Col,
//   CardImg,
//   CardText,
// } from "reactstrap";
// import SideBar from "./SideBar";



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
     
      <div class="row">
        <div class="column1"><SideBar/></div>
        <div class="column2"><CardView/></div>
      </div>
    </div>

    );
};

export default Dashborad;