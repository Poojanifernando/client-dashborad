import axios from 'axios'

let getDetails = "http://localhost:8081/api/v1/machine/getAllMachine"
let CreateURL = "http://localhost:8081/api/v1/machine/saveMachine"



export async function createMachine(data) {
    const alldata = {
                MachineID:data.MachineID,
                MachineDescription:data.MachineDescription,
                ProductID:data.ProductID,
                BatchNumber:data.BatchNumber,
                Parameter1:data.Parameter1,
                Parameter2:data.Parameter2,
                Parameter3:data.Parameter3
    };

    return await axios.post(CreateURL,alldata);
}


export async function getAllDetails(){
    return axios.get(getDetails);
    
 }
