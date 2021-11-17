import React from "react";
import Announcement from "../components/Announcements/Announcement";
import Nav from "../components/Navigation/Nav";
import Slider from "../components/Slider/Slider";
const Home=()=>{
    return(
        <div>
        <Announcement />
        <Nav />
        <Slider />
        </div>
    )
}

export default Home;