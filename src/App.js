
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
            </Routes>


          </Router>

    </div>
  );
}

export default App;
