import React, { useState } from "react";
import "./ProductPage.css"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Announcement from "../components/Announcements/Announcement";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import Newslatter from "../components/Newslatter/Newslatter";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductPage=()=>{
   const[Number,setNumber]=useState(0); 
   const [color,setColor]=useState("maroon");
   const increase=()=>{
       if(Number<5){

       
       setNumber(prevNumber=>prevNumber +1);}
   };
const decrease=()=>{
    if(Number>1){
    setNumber(prevNumber=>prevNumber -1);}
};

function handleColorChange(color){

    setColor(color);
}








    return(
        <div>

<Nav />
<Announcement />


<div className="product-image-container">

<div className="image-container">
<img src="https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388"/>

</div>


<div className="p-container">
<div className="image-container-content">
<h2>Mens T-Shirts</h2>

<p>White t-shirt for men ,it is made from cotton and is very good during hot weathers</p>
<h1>Ksh.3000</h1>
</div>

<div className="select-size">
    <div>
<h2>Size</h2>
</div>
<select className="select-option">
  
<option selected disabled>size</option>
<option value="1">Size</option>

</select>

</div>

<div className="colors-container">
   
<p>selected color:<span style={{color:color}}>{color}</span></p>

<div className="color-flex">
    <div className="color-title">
    <h2>Color</h2>
    </div>
<div className="colors-select">
   
<div className="choose-color">
<div className="empty-color color1" onMouseOver={()=>handleColorChange("maroon")} onMouseOut={()=>setColor("Maroon")}>

</div>


</div>

<div className="choose-color">
<div className="empty-color color2" onMouseOver={()=>handleColorChange("orange")} onMouseOut={()=>setColor("Maroon")}>
 
</div>


</div>

<div className="choose-color">

<div className="empty-color different" onMouseOver={()=>handleColorChange("lightblue")} onMouseOut={()=>setColor("Maroon")}>

</div>


</div>
</div>
</div>






</div>

<div className="increment-product">


<RemoveOutlinedIcon onClick={decrease} className="minus-icon"/>
<p className="number-product">
    {Number}
</p>

<AddOutlinedIcon onClick={increase}  className="add-icon"/>


<div className="fav-product">
<div className="add-btn">
    <button className="add-button">Add to cart</button>
</div>


<div className="add-btn">
    <FavoriteBorderOutlinedIcon />
</div>

<div className="wish-list add-btn" >
    <p>Add to wishlist</p>
</div>



</div>
</div>

</div>



</div>
           

<Newslatter />
<Footer />





        </div>
    )
}

export default ProductPage