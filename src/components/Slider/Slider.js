import React from "react";
import "./Slider.css"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Alert } from "@mui/material";
import {slides} from"../../data";







const Slider = () => {
    const handleClick=()=>{
        alert("hello sam");
        
    }
    return (
      <div className="Wrapper">

<div className="left-arrow" onClick={handleClick}>
<ArrowLeftOutlinedIcon />
</div>



{

slides.map(slide=>{

    <div className="slide">

    <div className="slide-image">
        <img src=""/>
    
    </div>
    
    <div className="slide-content">
        <h2>HOLIDAY OFFERS</h2>
        <p>Grab our December holiday offers</p>
    
    <div>
        <button className="btn">Buy now</button>
        </div>
    
    
    </div>
    
    
    
       </div>



})


}


 




   <div className="right-arrow"  onClick={handleClick}>
<ArrowRightOutlinedIcon />

</div>


      </div>
    );


  };
  export default Slider;