import React, { useState } from "react";
import "./Slider.css"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Alert } from "@mui/material";
import {slides} from"../../data";
import { Translate } from "@mui/icons-material";







const Slider = () => {
    const[slideIndex,setslideIndex]=useState(0);
    const handleClick=(direction)=>{
    
     if(direction==="left"){
setslideIndex(slideIndex>0?slideIndex-1:2)


     }

else{
    setslideIndex(slideIndex<2?slideIndex+1:0)


}
    

      
    
        
    }
    return (
      <div className="Wrapper">

<div className="left-arrow"  onClick={()=>handleClick("left")}>
<ArrowLeftOutlinedIcon />
</div>



{

slides.map(slide=>{
return(
    <div className="slide" style={{backgroundColor:slide.bg,transform:`translateX(${slideIndex*-100}vw)`}}>

    <div className="slide-image">
        <img src={slide.img}/>
    
    </div>
    
    <div className="slide-content">
        <h2>{slide.title}</h2>
        <p>{slide.desc}</p>
    
    <div>
        <button className="btn">Buy now</button>
        </div>
    
    
    </div>
    
    
    
       </div>

)

})


}


 




   <div className="right-arrow"  onClick={()=>handleClick("right")}>
<ArrowRightOutlinedIcon />

</div>


      </div>
    );


  };
  export default Slider;