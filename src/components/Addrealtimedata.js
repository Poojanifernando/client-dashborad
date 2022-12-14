import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {getAllDetails, createMachine} from '../Services/DashboradService'

const Addrealtimedata = () => {

  

    const [machine , setmachine] = useState([]);

    const [MachineID, setMachineID] = useState('');
    const [MachineDescription, setMachineDescription] = useState('');
    const [ProductID, setProductID] = useState('');
    const [BatchNumber, setBatchNumber] = useState('');
    const[Parameter1, setParameter1] = useState('');
    const[Parameter2, setParameter2] = useState('');
    const[Parameter3, setParameter3] = useState('');
 

    const handleMachineID = (e) => {
        setMachineID(e.target.value);
    };

    const handleMachineDescription = (e) => {
        setMachineDescription(e.target.value);
    };

    const handleProductID = (e) => {
        setProductID(e.target.value);
    };

   const handleBatchNumber = (e) => {
      setBatchNumber(e.target.value);
       // console.log(e.target.files)
        //setproductImage(e.target.files[0]);
    };

   /* const handleproductImage = (e) => {
        console.log(e.target.files)
        setproductImage(e.target.files[0]);
    };*/
    
    
   const handleParameter1 = (e) => {
    setParameter1(e.target.value);
  
  };
  const handleParameter2 = (e) => {
    setParameter2(e.target.value);
  
  };
  const handleParameter3 = (e) => {
    setParameter3(e.target.value);
  
  };
       

        const AddNewMachineData= async (e) => {
            e.preventDefault();
            const newdata = {
                MachineID:MachineID,
                MachineDescription:MachineDescription,
                ProductID:ProductID,
                BatchNumber:BatchNumber,
                Parameter1:Parameter1,
                Parameter2:Parameter2,
                Parameter3:Parameter3
        
            }
            console.log("sending data", newdata);
            let data = await createMachine(newdata);
            console.log("Register Topic ", data);
            if (data.status===!200) {
                console.log(" not success");
               
        
            }
            else {
                console.log("sucess");
              
            }
          }

          const GetAllmachines = async () =>{
            let data = await getAllDetails();
            console.log("All products",data);
            setmachine(data?.data?.content);
        }
      
    
        useEffect(() => { 
            GetAllmachines();
       },[])
      
     
return (
<div>
    <div>
       <br /><br />
       <center>
       <h1 style={{ textAlign:'center',fontSize:"50px", height:'70px',width:'900px',borderRadius:'30px', marginTop:'10px',fontFamily:'revert',color:'white', backgroundColor:'#000C66'}}><i><b> Product Registration</b></i></h1>
       </center>
        <br/>
        <center>
                        <form  style={{marginLeft:'-100px'}}>
                      
                            <table   style = {{width:'400px', height:'300px'}}>
                                <tr>
                                    <thead>
                                        <th>                      
                            <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'300px', marginRight:'200px'}}>  
                            <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>
                            Machine ID  :  </label>   
                            <input  type = "text" style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'350px', height:'50px'}}
                            onChange={handleMachineID} 
                            className="form-control"
                            value={MachineID} 
                           /><br/><br/>
                            </div>
                            </th>


                            <th>
                        
                            <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'300px',marginLeft:'-10px'}}>
                            <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}>
                            Machine Description  :  </label>
                            <textarea  type = 'text'  style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'360px', height:'50px'}}
                            onChange={handleMachineDescription} 
                            className="form-control"
                            value={MachineDescription} />
                            <br/><br/>
                            </div>
                         
                          </th>
                          </thead>
                          </tr>
                     
                          
                          
                                <tr>
                                    <td>
                            <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'300px'}}>
                            <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}><b>Product Name  :  </b></label>
                            <input type = 'text' style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'350px', height:'50px'}}
                            onChange={handleProductID} 
                            className="form-control"
                            value={ProductID} /><br/>
                            </div>
                         
                     

                       </td>
                    
                       <td>
                  
                       <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'280px', marginLeft:'-290px'}}>
                       <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}><b>Product Image  :  </b></label>
                            <input type = 'text' style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'350px', height:'50px'}}
                            onChange={handleBatchNumber} 
                            className="form-control"
                            value={BatchNumber} 
                         
                          />
                        
 
                            <br/>
                            </div>
                          
                      </td>
                      </tr>

                      <tr> <td>
                  
                  <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'280px', marginLeft:'-290px'}}>
                  <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}><b>Product Image  :  </b></label>
                       <input type = 'text' style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'350px', height:'50px'}}
                       onChange={handleParameter1} 
                       className="form-control"
                       value={Parameter1} 
                    
                     />
                   

                       <br/>
                       </div>
                     
                 </td></tr>


                 <tr> <td>
                  
                  <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'280px', marginLeft:'-290px'}}>
                  <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}><b>Product Image  :  </b></label>
                       <input type = 'text' style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'350px', height:'50px'}}
                       onChange={handleParameter2} 
                       className="form-control"
                       value={Parameter2
                       } 
                    
                     />
                   

                       <br/>
                       </div>
                     
                 </td></tr>
                 <tr> <td>
                  
                  <div className="form-group mb-2" style={{marginBottom:'30px',color:'darkblue',width:'280px', marginLeft:'-290px'}}>
                  <label className="label" style={{fontSize:'20px', fontFamily:'revert',color:'#000C66'}}><b>Product Image  :  </b></label>
                       <input type = 'text' style={{ backgroundColor:'#B2BEB5', borderRadius:'20px', width:'350px', height:'50px'}}
                       onChange={handleParameter3} 
                       className="form-control"
                       value={Parameter3} 
                    
                     />
                   

                       <br/>
                       </div>
                     
                 </td></tr>
               

                      </table>

                        

                     <br/>
                           
                        </form>
               
                    </center>
                  
                        <button onClick={(e)=>AddNewMachineData(e)} className="btn btn-primary" type="submit"  style={{marginLeft:'600px', borderRadius:'20px', width:'200px', backgroundColor:'#000C66'}}>
                         Save </button>
                         &nbsp;&nbsp;   &nbsp;&nbsp;    &nbsp;&nbsp;     
                      
                         <button  className="btn btn-secondary" type="submit"   style={{ borderRadius:'20px', width:'200px', backgroundColor:'#B2BEB5'}}>
                         Cancel </button>
                    </div>


<div>


<br/><br/><br/>

<div style={{ textAlign: "center" }}>
             
        
             <div>
                 <div>
                    
                     <center>
                   
                
                     <table className = "table table-bordered" style={{border :'5px',borderColor: '#000C66', color:'#000C66', borderStyle:'groove', width:'1400px'}}>
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
                             {machine?.map((machine,index)=>(
                                 <tr key={index}>
                                     <th scope="row">{index+1}</th>
                                     <td>{machine?.MachineID}</td>
                                     <td>{machine?.MachineDescription}</td>
                                     <td>{machine?.ProductID}</td>
                                     <td>{machine?.BatchNumber}</td>
                                     <td>{machine?.Parameter1}</td>
                                     <td>{machine?.Parameter2}</td>
                                     <td>{machine?.Parameter3}</td>
                                   
                                     <td>
                                      <Link to ={{pathname:`/Dashborad/${machine.MachineID}`}}>
                                     <button  type="button"  className="btn btn-primary" style={{marginTop:'10px', backgroundColor:'#000C66'}} >  
                                     <i className='fas fa-edit'></i>&nbsp; Edit </button>
                                     
                                    </Link>
                         
                                     </td>
 
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                     </center>
                 </div>
             </div>
         </div>

                    
</div>           


</div>
               
)
}

export default Addrealtimedata;