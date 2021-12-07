import React, { useState } from "react";
import "./Checkout.css";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Announcement from "../components/Announcements/Announcement";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
const Checkout = () => {
  const [Number, setNumber]=useState(0);
  const increase=()=>{
    if(Number<5){
      setNumber(prevNumber=>prevNumber +1);
    }
  };

  const decrease=()=>{
    if(Number>1){
      setNumber(prevNumber=>prevNumber -1);
    };
  }
  return (


    <div>
<Nav />
<Announcement />


    <div className="checkout-page">
      <div className="checkout-items">
        <div className="hart-cart">
          <div className="left-content bottom">
            <div className="checkout-images">
              <img src="Images/t-shit.jpg" />
            </div>

            <div className="display-1">
              <div className="left-description">
                <div className="content">
                  <p>Mens t-shirt guiter crasher</p>
                </div>

                <div className="price">
                  <ClearIcon />
                </div>

                <div className="price-content">
                  <p>1</p>
                  <p className="sub-manu">KSH 3,000</p>
                </div>
              </div>

              <div className="color-div">
              <div className="div-color shirt-color">
</div>


                <div className="remove-icon">
                  <RemoveIcon onClick={decrease}/>
                </div>
                <div className="">
                  <p className="count">{Number}</p>
                </div>
                <div className="plus-icon">
                  <AddIcon  onClick={increase}/>
                </div>

<div className="delete-icon">
< DeleteOutlineOutlinedIcon/>
<p>Delete item</p>
</div>


              </div>
            </div>
          </div>
        </div>

        <div className="left-content">
          <div className="checkout-images">
            <img src="Images/cap.jpg" />
          </div>

          <div className="display-1">
            <div className="left-description">
              <div className="content">
                <p>Rocket Vintage Chill Cap</p>
              </div>

              <div className="price">
                <ClearIcon />
              </div>

              <div className="price-content">
                <p >1</p>
                <p className="sub-manu">KSH 3,000</p>
              </div>
            </div>

            <div className="color-div">
<div className="div-color cap-color">
</div>

              <div className="remove-icon">
                <RemoveIcon  onClick={decrease}/>
              </div>
              <div className="">
                <p className="count">{Number}</p>
              </div>
              <div className="plus-icon">
                <AddIcon  onClick={increase}/>
                
              </div>
            

              <div className="delete-icon">
< DeleteOutlineOutlinedIcon/>
<p>Delete item</p>
</div>



            </div>
          </div>
        </div>
      </div>

      <div className="your-order">
        <div>
          <h1>Your orders</h1>
        </div>

<div className="shop">

<div className="price-title">

<div className="sub-price">
<p>Subtotals</p>
</div>

<div className="sub-manu">
<p>Ksh 4,000</p>
</div>

</div>


<div className="price-title">
<div className="sub-price">
<p>Discounts</p>
</div>

<div className="sub-manu">
<p>-</p>
</div>


</div>


<div className="price-title">
<div className="sub-price">
<p>Shipping</p>
</div>
<div className="sub-manu">
<p>-</p>
</div>


</div>

<div className="price-title border-top">
<div className="sub-price">
<p>Total</p>
</div>
<div className="sub-manu">
<p>Ksh 4,000</p>
</div>


</div>




</div>

<div >
<button className="checkout-btn">Checkout</button>
</div>




      </div>
    </div>

<di>
    <button className="shopping-btn">Continue Shopping</button>
</di>


<Footer />


    </div>

  );
};

export default Checkout;
