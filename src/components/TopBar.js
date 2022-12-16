import React from "react";
import "../css/TopBar.css";
import img from "../images/a.jpg";
//import { NotificationsNone, Language, Settings } from "@coreui/icons";

const   TopBar = () => {
    return(
      <div>
      <nav className="navbar navbar-expand-lg  bg-dark font-color">
      <img src={img} alt="image" width="40px" height="40px" /> &nbsp;&nbsp;&nbsp;&nbsp;
        <h2 className="lalantitle">LALAN</h2>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">Charts</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Reports</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
              </div>
      
    
     
    
    )
}

export default TopBar;