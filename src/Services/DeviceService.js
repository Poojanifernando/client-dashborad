import axios from 'axios'

let getdeviceDetails = "http://localhost:8081/api/v1/devices/getAllDevice"
//let  = "http://localhost:8081/api/v1/machine/saveMachine"





export async function getAlldeviceDetails(){
    return axios.get(getdeviceDetails);
    
 }