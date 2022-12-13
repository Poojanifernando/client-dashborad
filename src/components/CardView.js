import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';


const   CardView = () => {

  const [admin_Control , setadmin_Control] = useState([]);
    
  const GetAll = async () =>{
    let data = await getAllcontrollerDetails();
    console.log("All ",data);
    setadmin_Control(data?.data?.content);
}
  useEffect(() => { 
    GetAll();
 },[])
  return (
    <div>
   

   {admin_Control?.map((admin_Control,index)=>{
                          return(
    <Card style={{ width: '45rem'}} className = 'cardborder'>
   
      <Card.Body>
        <Card.Title>Stapping Machine  -  {admin_Control?.machineID_ad}</Card.Title>
        <Card.Text>
          <span>Machine ID:      </span>
          <span>Product ID:   {admin_Control?.productID_ad}   </span>
          <span>Product Line ID:   {admin_Control?.productLineID_ad}   </span>
          <span>batch Number:   {admin_Control?.batchID_ad} </span>
          <span>Machine Parameters :   {admin_Control?.parameterID_ad} </span>
        </Card.Text>

        <Card.Text>
          <span>Parameter1:   {admin_Control?.parameterID_ad}   </span>
          <span>Parameter2:   {admin_Control?.parameterID_ad}   </span>
          <span>Parameter3:   {admin_Control?.parameterID_ad} </span>
         
        </Card.Text>



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
    
      </Card.Body>
    </Card>
    )})};
   
    </div>
    

  );
}

export default CardView;