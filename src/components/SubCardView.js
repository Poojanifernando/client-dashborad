import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import axios from 'axios';
import {getAlldeviceDetails} from '../Services/DeviceService';
import {useEffect, useState} from 'react';


const   SubCardView = () => {






  const [admin_Control , setadmin_Control] = useState([]);
  
  const [device_Reg , setdevice_Reg] = useState([]);
  
    
 /* const GetAll = async () =>{
    let data = await getAllcontrollerDetails();
    console.log("All ",data);
    setadmin_Control(data?.data?.content);
}
  useEffect(() => { 
    GetAll();
 },[])*/

const getAlldDetails = async () =>{
  let data = await getAlldeviceDetails();
  console.log("All ",data.data);
  setdevice_Reg(data?.data?.content);
  
}

useEffect(() => { 
  getAlldDetails();
},[])
 
  return (
    <div>
   

   
    
   {device_Reg?.map((device_Reg,index)=>{
                          return(

        <div>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <center>
        <Card.Title > {device_Reg?.deviceID_dvcReg}</Card.Title>
        <Card.Title className = "titlebar"> 
        {device_Reg?.parameterType_dvcReg}</Card.Title>
        <Card.Text className = "valuebar">
       
        </Card.Text>
        </center>
      </Card.Body>
    </Card>
    </div>
    
 
    
   
    )})};
   
    </div>
    

  );
}

export default SubCardView;