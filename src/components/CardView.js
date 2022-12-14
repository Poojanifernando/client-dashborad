import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';
import SubCardView from './SubCardView';
import {getlineeDetails} from '../Services/ProductionLineService'



const   CardView = () => {

  const [admin_Control , setadmin_Control] = useState([]);
  
  const [line_reg , setline_reg] = useState([]);

  const [id , setid] = useState([]);



  const Getmachines = async() =>{
    let data = await getlineeDetails();
    console.log("machine ",JSON. stringify(data.data));
    setline_reg(data?.data?.content);

  }
    
  const GetAll = async () =>{
    let data = await getAllcontrollerDetails();
    console.log("All ",JSON. stringify(data.data));
    setadmin_Control(data?.data?.content);
}
  useEffect(() => { 
    GetAll();
    Getmachines();
 },[])


 console.log(JSON. stringify(admin_Control))
  return (
    <div>

      <p>Product ID:   {JSON. stringify(admin_Control)}    </p>
   

   {line_reg?.map((line_reg,index)=>{
                          return(
    <Card style={{ width: '45rem'}} className = 'cardborder'>
   
      <Card.Body>
        <Card.Title>Stapping Machine  -  {line_reg?.machineID_ad}</Card.Title>
        <Card.Text>
          <span>Machine ID:      </span>
          <span>Product ID:   {line_reg?.productID_ad}   </span>
          <span>Product Line ID:   {line_reg?.productLineID_ad}   </span>
          <span>batch Number:   {line_reg?.batchID_ad} </span>
          <span>Machine Parameters :   {line_reg?.parameterID_ad} </span>
        </Card.Text>

        <Card.Text>
          <span>Parameter1:   {admin_Control?.parameterID_ad}   </span>
          <span>Parameter2:   {admin_Control?.parameterID_ad}   </span>
          <span>Parameter3:   {admin_Control?.parameterID_ad} </span>
         
        </Card.Text>



        <div>
    {/* <Card style={{ width: '20rem' }}>
      <Card.Body>
        <center>
        <Card.Title className = "titlebar"> {admin_Control?.parameterID_ad}</Card.Title>
        <Card.Text className = "valuebar">
       
        </Card.Text>
        </center>
      </Card.Body>
    </Card> */}
    <SubCardView/>
    </div>
   
    
      </Card.Body>
    </Card>
    )})};
   
    </div>
    

  );
}

export default CardView;