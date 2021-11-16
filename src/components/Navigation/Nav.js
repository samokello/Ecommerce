import React from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Nav.css";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';


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
    <h1 className="enterprise">Magoso Enterprise.</h1>
    </div>


    <div className="right ">
       <ul className="right">
           <div>
<li><a href="#">Login</a>
</li>
</div>

<div>
<li><a href="#">Register</a>
</li>
</div>

<div>

<Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge>
</div>

       </ul>
    </div>




</div>
    );
}

export default Nav;