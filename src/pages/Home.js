import React from "react";
import Announcement from "../components/Announcements/Announcement";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Nav from "../components/Navigation/Nav";
import Slider from "../components/Slider/Slider";
import Newslatter from "../components/Newslatter/Newslatter";
import Footer from "../components/Footer/Footer";
const Home=()=>{
    return(
        <div>
        <Announcement />
        <Nav />
        <Slider />
        <Categories />
        <Products />
        <Newslatter />
        <Footer />
        </div>
    )
}

export default Home;