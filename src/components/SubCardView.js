import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import axios from 'axios';
import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';


const   CardView = () => {

  const [admin_Control , setadmin_Control] = useState([]);
  
  const [device_Reg , setdevice_Reg] = useState([]);
  
    
  const GetAll = async () =>{
    let data = await getAllcontrollerDetails();
    console.log("All ",data);
    setadmin_Control(data?.data?.content);
}
  useEffect(() => { 
    GetAll();
 },[])


  let getdevices = axios.get("http://localhost:8081/api/v1/devices/getAllDevice")
  console.log(getdevices);
  
 
  return (
    <div>
   

   {admin_Control?.map((admin_Control,index)=>{
                          return(
    


        <div>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <center>
        <Card.Title className = "titlebar"> {admin_Control?.parameterID_ad}</Card.Title>
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

export default CardView;