import React from "react";
import Announcement from "../components/Announcements/Announcement";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import Newslatter from "../components/Newslatter/Newslatter";
import Products from "../components/Products/Products";
import "./Productpage.css";



const Productpage=()=>{
    return(
        <div>
<Nav />
<Announcement />

<div className="product-h2">
<h2>DRESSES</h2>
</div>

<div className="dresses">


<div className="product-size"> 
<div>
    <p>Filter Products:</p>
</div>

<select className="selected-items">
    <option selected disabled>Size</option>
    <option value="1">S</option>
    <option value="2">M</option>

    <option value="3">L</option>
    <option value="4">XL</option>

</select>
</div>



<div className="product-color">
<div>
    <p>color:</p>
</div>

<select className="selected-items" >
    <option selected disabled>color</option>
    <option value="1">White</option>
    <option value="2">Black</option>

    <option value="3">Green </option>
    <option value="4">Red</option>

</select>
</div>


<div className="product-price">
<div>
    <p>Filter Products:</p>
</div>

<select className="selected-items">
    <option selected disabled>Price</option>
    <option value="1">Highest to lowest</option>
    <option value="2">lowest to Highest</option>

   
</select>
</div>
</div>






<Products />
<Newslatter />
<Footer />


        </div>
    )

}

export default Productpage