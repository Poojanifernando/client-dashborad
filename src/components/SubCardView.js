import Card from 'react-bootstrap/Card';
import "../css/SubCardView.css";
import axios from 'axios';
import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';


const  SubCardView = () => {

  const [admin_Control , setadmin_Control] = useState([{"parameterID_ad":"TEMP" , "disc": " 30/F"},{"parameterID_ad":"height" , "disc": "700/m"},{"parameterID_ad":"width" , "disc": "5/mm"},]);
  
  const [device_Reg , setdevice_Reg] = useState([]);
  
    
//   const GetAll = async () =>{
//     let data = await getAllcontrollerDetails();
//     console.log("All ",data);
//     setadmin_Control(data?.data?.content);
// }
//   useEffect(() => { 
//     GetAll();
//  },[])


  // let getdevices = axios.get("http://localhost:8081/api/v1/devices/getAllDevice")
  // console.log(getdevices);
  
 
  return (
    <div class="container">
   

   {admin_Control?.map((admin_Control,index)=>{
                          return(
                          
                          <Card style={{ width: '20rem' }}>
                            <div class="box">
                              <div class="content">     
                                <Card.Body>
                                  <center>
                                  <h1 className = "title"> {admin_Control?.parameterID_ad}</h1>
                                  <h3 className = "discription">
                                  {admin_Control?.disc}
                                  </h3>
                                  </center>
                                </Card.Body>
                                </div>
                            </div>
                          </Card>
    )})}
   
    </div>
    

  );
}

export default SubCardView;
