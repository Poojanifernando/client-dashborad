import "../css/FeatueredInfor.css";
import React from "react";
import {Link} from "react-router-dom"
import {useState ,useEffect }from 'react'
import {getAllDetails} from '../Services/DashboradService'




export default function FeatueredInfor() {

  const [machine , setmachine] = useState([]);
    
const GetAllmachines = async () =>{
  let data = await getAllDetails();
  console.log("All products",data?.data?.content);
  setmachine(data?.data?.content);
}
useEffect(() => { 
  GetAllmachines();
},[])

useEffect(()=>{
  console.log("machine data",machine);
  // machine.map((m)=>(
  //   console.log("inside",JSON.parse(m))
  // ));
},[machine])

  return (

    <div>
     {/* <table className = "table table-bordered" style={{border :'5px',borderColor: '#000C66', color:'#000C66', borderStyle:'groove', width:'1400px'}}>
                         <thead>
                             <tr>
                             <th>#</th>
                             <th>MachineID</th>
                             <th>MachineDescription</th>
                             <th>ProductID</th>
                             <th>BatchNumber</th>
                             <th>Parameter1</th>
                             <th>Parameter2</th>
                             <th>Parameter3</th>
                         
                             </tr>
                         </thead>  
                         <tbody>
                             {machine?.map((machine,index)=>{
                                return(
                                <tr key={index}>
                                     <th scope="row">{index+1}</th>
                                     <td>{machine?.machineID}</td>
                                     <td>{machine?.machineDescription}</td>
                                     <td>{machine?.productID}</td>
                                     <td>{machine?.batchNumber}</td>
                                     <td>{machine?.parameter1}</td>
                                     <td>{machine?.parameter2}</td>
                                     <td>{machine?.parameter3}</td>
                                   
                                     <td>
                                      <Link to ={{pathname:`/Dashborad/${machine.machineID}`}}>
                                     <button  type="button"  className="btn btn-primary" style={{marginTop:'10px', backgroundColor:'#000C66'}} >  
                                     <i className='fas fa-edit'></i>&nbsp; Edit </button>
                                     
                                    </Link>
                         
                                     </td>
 
                                 </tr>
                             );
                             })}
                         </tbody>
                     </table> */}
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
                              <div className="diagrames">Heat  <span className="heatfont">{machine?.parameter1}</span></div>
                              </th>
                              <th>
                              <div className="diagrames">Length  <span className="heatfont">{machine?.parameter2}</span></div>
                              </th>
                              <th>
                              <div className="diagrames">height  <span className="heatfont">{machine?.parameter3}</span></div>
                              </th>
                              </tr></table>
                            </div>                            
                          </div>

                          )})};
                 
                                
                                
  </div>
    
  );
}