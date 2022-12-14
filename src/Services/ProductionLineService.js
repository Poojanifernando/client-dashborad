import axios from 'axios'

let getlineDetails = "http://localhost:8081/api/v1/MachineLineTest/getAllMachineLineTest"





export async function getlineeDetails(){
    return axios.get(getlineDetails );
    
 }