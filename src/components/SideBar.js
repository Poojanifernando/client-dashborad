import "../css/SideBar.css";
// import { SlUser } from "react-icons/sl"
import { Link } from "react-router-dom";
const   SideBar = () => {
  return (

    <div className="sidebar">

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              Home
            </li>
            </Link>
            <Link to="/Dashboard" className="link">
            <li className="sidebarListItem">
            Dashboard
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
              
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
             
                Products
              </li>
            </Link>
            <Link to="/Transactions" className="link">
              <li className="sidebarListItem">
              Transactions
              </li>
            </Link>
            <Link to="/ Reports" className="link">
              <li className="sidebarListItem">
              Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="/Mail" className="link">
              <li className="sidebarListItem">
              Mail
              </li>
            </Link>
            <Link to="/Feedback" className="link">
              <li className="sidebarListItem">
              Feedback
              </li>
            </Link>
            <Link to="/Messages" className="link">
              <li className="sidebarListItem">
              Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            
              Manage
            </li>
            <li className="sidebarListItem">
           
              Analytics
            </li>
            <li className="sidebarListItem">
     
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>

    
  );
}

export default SideBar;