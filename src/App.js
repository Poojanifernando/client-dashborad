
import React,{} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//import ProductRegistration from "./components/ProductRegistration";
import Dashborad from './components/Dashborad'  
import TopBar from './components/TopBar'  
import SideBar from './components/SideBar'  
import FeatueredInfor from './components/FeatueredInfor' 
import Addrealtimedata from './components/Addrealtimedata'
import Charts from './components/Charts' 
import CardView from './components/CardView' 
import SubCardView from './components/SubCardView'   
import Test from "./components/Test";
import ViewProductLine from "./components/ProductLine/ViewProductLine";
import AddProductLine from "./components/ProductLine/AddProductLine";
import AddProductRegistration from "./components/ProductLine/AddProductRegistration";
import ViewProductRegistration from "./components/ProductLine/ViewProductRegistration";
import DeviceRegistration from "./components/Device/DeviceRegistration";
import ViewDeviceRegistraion from "./components/Device/ViewDeviceRegistraion";
import Viewjob from "./components/Job/Viewjob";
import JobRegistration from "./components/Job/JobRegistration";
import ViewMachine from "./components/Machine/ViewMachine";
import MachineRegister from "./components/Machine/MachineRegister";
import ViewParameters from "./components/Parameter/ViewParameters";
import AddParameter from "./components/Parameter/AddParameter";
import UserRegister from "./components/User/UserRegister";

function App() {

  return (
    <div  style={{
      backgroundColor: '#E4E4E4',
    }}>
        <TopBar/>
            <Router>
               <Routes>
                 <Route exact path="/Dashborad" element={<Dashborad/>} />  
                 <Route  path="/TopBar" element={<TopBar/>} />   
                 <Route  path="/SideBar" element={<SideBar/>} /> 
                 <Route  path="/FeatueredInfor" element={<FeatueredInfor/>} />   
                 <Route  path="/Addrealtimedata" element={<Addrealtimedata/>} /> 
                 <Route  path="/Charts" element={<Charts/>} />  
                 <Route  path="/CardView" element={<CardView/>} /> 
                 <Route  path="/SubCardView" element={<SubCardView/>} />  
                 <Route  path="/ViewProductLine" element={<ViewProductLine/>} />  
                 <Route  path="/AddProductLine" element={<AddProductLine/>} />  
                 <Route  path="/AddProductRegistration" element={<AddProductRegistration/>} />
                 <Route  path="/ViewProductRegistration" element={<ViewProductRegistration/>} />   
                 <Route  path="/DeviceRegistration" element={<DeviceRegistration/>} />   
                 <Route  path="/ViewDeviceRegistraion" element={<ViewDeviceRegistraion/>} /> 
                 <Route  path="/ViewJob" element={<Viewjob/>} />
                 <Route  path="/JobRegistration" element={<JobRegistration/>} /> 
                 <Route  path="/ViewMachine" element={<ViewMachine/>} /> 
                 <Route  path="/MachineRegister" element={<MachineRegister/>} /> 
                 <Route  path="/ViewParameters" element={<ViewParameters/>} /> 
                 <Route  path="/AddParameter" element={<AddParameter/>} /> 
                 <Route  path="/UserRegister" element={<UserRegister/>} /> 
            </Routes>


          </Router>

    </div>
  );
}

export default App;
