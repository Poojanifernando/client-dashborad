import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';


const   CardView = () => {

  const [admin_Control , setadmin_Control] = useState([]);
  console.log("admin_Control " + JSON. stringify(admin_Control))
    
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
          <p>Machine ID:      </p>
          <p>Product ID:   {admin_Control?.productID_ad}   </p>
          <p>Product Line ID:   {admin_Control?.productLineID_ad}   </p>
          <p>batch Number:   {admin_Control?.batchID_ad} </p>
          <p>Machine Parameters :   {admin_Control?.parameterID_ad} </p>
        </Card.Text>

<h3>Parameters </h3>
        <Card.Text>
          <p>Parameter1:   {admin_Control?.parameterID_ad}   </p>
          <p>Parameter2:   {admin_Control?.parameterID_ad}   </p>
          <p>Parameter3:   {admin_Control?.parameterID_ad} </p>
         
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