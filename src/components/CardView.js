import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
      <table className = 'infoCard'>
        <tr>
          <td ><h2 className ='h1class'>Job ID :</h2></td>
          <td> <h2 className ='h1class'>Customer name :</h2></td>
          <td> <h2 className ='h1class'>Batch ID :</h2></td>
        </tr>
        <tr>
          <td> <h2 className ='h1class'>Product ID :</h2></td>
          <td> <h2 className ='h1class'>Product Line :</h2></td>
          <td> <h2 className ='h1class'>Date :</h2></td>
        </tr>
      </table>
        <br/>
   {line_reg?.map((line_reg,index)=>{
                          return(
                        
    <div className='paddingtocard'>
     
    <Card >
      <Card.Body>
        <Card.Title className='cardheader'><b className='titlebarmachine'>Stapping Machine  -  {line_reg?.machineID_ad}</b></Card.Title>
        {/* <Card.Text>
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
         
        </Card.Text> */}



        <div>
    <SubCardView/>
    </div>
      </Card.Body>
    </Card>
    
    </div>

   
  
    )})}
   
    </div>
   
    

  );
}

export default CardView;