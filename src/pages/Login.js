import React, {useState} from "react";
import Announcement from "../components/Announcements/Announcement";
import Nav from "../components/Navigation/Nav";
import Footer from '../components/Footer/Footer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./Login.css";
import { Link } from "react-router-dom";

const Login=()=>{

    const[showPass , setShowPass]=useState(false);

    const togglePassWardVisibility=()=>{
setShowPass(!showPass)
    }
    return(
<div>
<Nav />
<Announcement />

<div className="login-container">


<div className="login-content">
<div className="enterprise-title">
           <h1>Magoso Enterprices</h1>
        </div>


<form>
<div>
    <h1 className="enterprise-title">LOGIN</h1>
   
    <div className="form">
    
    <input type="text" placeholder=""  className="passward btn-red form__label"/>
    <label for="email" className="label">Email</label>


    </div>


<div className="passward-holder ">
<div className="form">
    
    <input type={showPass ? "text" :"password"} placeholder="" className="passward btn-red form__label"/>
    <label for="email" className="label">password</label>
</div>

<div className="eye-icon" onClick={togglePassWardVisibility}>
   {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </div>

</div>

<button className="login-btn">Login</button>


<div className="checkbox-container">
    <div className="check">
    <div>
<input type="checkbox"/>
</div>

<div>
    <p>Remember me</p>
</div>
</div>

<div className="link">
  <p ><a href="#">Forgot your Passward</a> </p>
</div>
    </div>

<div className="create-account">
    <div>
        <p>New to Magoso Enterprises</p>
    </div>

<div>
<Link to="/SignUp"> <button className="account">create Account</button></Link>
</div>


</div>

<div className="copyright">
<p>Magoso Enterprices &copy;2021</p>
</div>





</div>

</form>

<div className="empty-div">


</div>


        </div>

<div className="login-background">
    <div className="heading">
        <p className="text-cont">WELCOME TO</p>
        <h1>Magoso Enterprices.</h1>
<p className="text-pad">The home of Reliable Shopping</p>
    </div>

</div>






        </div>

        <Footer/>


</div>

        
    )
}

export default Login