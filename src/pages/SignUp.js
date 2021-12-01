import React, { useState } from "react";
import "./SignUp.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Announcement from "../components/Announcements/Announcement";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
const SignUp = () => {
    const [passward,setPassword]=useState("");
    const [ConfirmPassWord,setConfirmPassWord]=useState("");

function onChangePassWord(e){
    const passWordValue=e.target.value;
    setPassword(passWordValue);
}

function onConfirmPassWord(e){
    const ConfirmPassWordValue=e.target.value;
    setConfirmPassWord(ConfirmPassWordValue);
}

  return (

<div>
    <Nav />
<Announcement />




    <div className="signup-page">

<div className="form-content">
      <form>
        <div className="form-holder">

            <div className="signup-name ">
          <div className="my-inputs">
            <label for="Text">First Name</label>

            <input type="text"/>
          </div>

          <div className="my-inputs">
            <label for="Text">Last Name</label>

            <input type="text"  />
          </div>
          </div>

          <div className="my-inputs">
            <label for="email" className="">
              Email
            </label>

            <input type="text" placeholder="" />
          </div>

         


<div className="passward-holder signup-name">
          <div className="my-inputs">
            <label for="passward">password</label>

            <input onChange={(e)=>onChangePassWord(e)} type="password" className="input"/>

                    </div>

          <div className="my-inputs">
            <label for="passward">Confirm Your Passward</label>

            <input onChange={(e)=>onConfirmPassWord(e)} type="password" />
          </div>


          {
passward===ConfirmPassWord?<CheckIcon style={{fontSize:"2rem"}}/>:<ClearIcon style={{fontSize:"2rem"}}/>


    
} 


</div>

          <div className="my-inputs">
            <button className="signup-button">SIGN UP</button>
          </div>
        </div>

        <div className="have-account">
          <p>
            Already have an account? <a href="#">LOG IN HERE</a>
          </p>
        </div>
      </form>

<div className="accounts">
<h1>SIGN UP WITH FACEBOOK  OR GOOGLE</h1>
<div className=" position">

   < FacebookIcon  className="icon"/>

    <button className="signup-button">Continue with Facebook </button>
</div>

<div className="google position">

    <GoogleIcon className="facebook-account icon"/>
<button className="signup-button">Continue with Google</button>

</div>

</div>
</div>

    </div>

    <Footer />
    </div>
  );
};

export default SignUp;
