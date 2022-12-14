import axios from 'axios'

let getadmincontrollerDetails = "http://localhost:8081/api/v1/admin/getAllAdmin"
//let  = "http://localhost:8081/api/v1/machine/saveMachine"





export async function getAllcontrollerDetails(){
    return axios.get(getadmincontrollerDetails);
    
 }
