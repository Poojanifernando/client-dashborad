import Card from 'react-bootstrap/Card';
import "../css/CardView.css";
//import {getAllcontrollerDetails} from '../Services/adminControllerService'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import DashboardDeviceView from './DashboardDeviceView';
//import {getlineeDetails} from '../Services/ProductionLineService'
import {getAllDetails} from '../Services/DashboradService'



const   CardView = () => {

  // const [admin_Control , setadmin_Control] = useState([]);
  
  // const [line_reg , setline_reg] = useState([]);

  // const [id , setid] = useState([]);


  //set machines to the variables
  const [machines , setMachines] = useState([]);

//get machine ids for one product line

  const Getmachinesids = async() =>{
    let data = await getAllDetails();
    // console.log("machine ids for one line",JSON. stringify(data.data));
    setMachines(data?.data);
  }
  console.log("machine",machines);

  // const Getmachines = async() =>{
  //   let data = await getlineeDetails();
  //   console.log("machine ",JSON. stringify(data.data));
  //   setline_reg(data?.data?.content);

  // }
    
//   const GetAll = async () =>{
//     let data = await getAllcontrollerDetails();
//     console.log("All ",JSON. stringify(data.data));
//     setadmin_Control(data?.data?.content);
// }
  useEffect(() => { 
    // GetAll();
    // Getmachines();
    Getmachinesids()
 },[])


//  console.log(JSON. stringify(admin_Control))
//  console.log(JSON. stringify(lm_table))
  return (
    <div>
      <p className='dashboardText'><u> Dashboard. </u></p>
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
   
                        
    <div className='paddingtocard'>
    {machines?.map((machines,index)=>{
                          return(
     
    <Card className='padingto'>
      <Card.Body>
        <Card.Title className='cardheader'><b className='titlebarmachine'>Stapping Machine  -  {machines?.machineID}</b></Card.Title>
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
        <DashboardDeviceView/>
    </div>
      </Card.Body>
      
    </Card>
    


   
  
    )})}
  
        </div>
   
    </div>
   
    

  );
}

export default CardView;