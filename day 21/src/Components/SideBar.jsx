import React from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Person4Icon from '@mui/icons-material/Person4';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import './SideBar.css'
import { Link } from 'react-router-dom';
import Home from '../DashBoardComponents/Home';

// import NavigationBar from './NavigationBar';


function SideBar() {
  return (
    <div>
    <Home/>
    <div className="sidebar">
    <Link to="/dashboard" style={{textDecoration:"none",color:"inherit"}}><li className='active'><GridViewRoundedIcon/>&nbsp;DASHBOARD</li></Link>
    <Link to="/showstaff" style={{textDecoration:"none",color:"inherit"}}><li><Person4Icon/>&nbsp;STAFF DETAILS</li></Link>
  <Link to="/performance" style={{textDecoration:"none",color:"inherit"}}><li><AutoGraphIcon />&nbsp;PERFORMANCE</li></Link>
  <Link to="/add" style={{textDecoration:"none",color:"inherit"}}><li><GroupAddIcon/>&nbsp;ADD NEW STAFF</li></Link>
  <li><GroupRemoveIcon/>&nbsp;REMOVE STAFF</li>
  <Link to="/logout" style={{textDecoration:"none",color:"inherit"}}><li><LogoutIcon/>&nbsp;LOGOUT</li></Link>
</div>
    
    
    </div>
  )
}

export default SideBar