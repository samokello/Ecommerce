import React from "react";
import "./Newslatter.css";
import SendIcon from '@mui/icons-material/Send';


const Newslatter=()=>{
    return(
        <div className="newslatter-container">

<div className="myh1">
            <h1> Newslatter </h1>

            </div>

<div className="paragraph">
    <p> Sign up for our Newslatter to be notified on new promotions and sales     </p>
    </div>



<div className="mybtn-container">
<div className="myButton">
            <input type="text" placeholder="Enter email address"  className="mybtn" />  
            </div>


<button className="sendIcon"><SendIcon />   </button>
</div>



        </div>



    )
} 

export default Newslatter