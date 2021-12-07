import React from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Nav.css";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import {Link} from "react-router-dom";


const Nav=()=>{
    return(
<div className="nav"> 
    
    <div className="left">
<span className="lang">
EN
</span>
<div className="search-container">
    <input type="text" placeholder="Choose your language" />
    <SearchOutlinedIcon/>


</div>


    </div>


    <div className="center">
    <h1 className="enterprise"> <Link to="/" >Magoso Enterprise.</Link></h1>
    </div>


    <div className="right ">
       <ul className="right">
           <div>
<li><Link to="/Login">Login</Link>
</li>
</div>

<div>
<li><Link to="/SignUp">Register</Link>
</li>
</div>

<div>

<Link to="/cart"><Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge></Link>
</div>

       </ul>
    </div>




</div>
    );
}

export default Nav;