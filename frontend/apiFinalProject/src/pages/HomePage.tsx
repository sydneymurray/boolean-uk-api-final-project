import React from "react";
import Header from "../components/Header";
import HomePageImage from "../components/HomePageImage";
import AboutUs from "../components/AboutUs";
import OurStock from "../components/OurStock";





function HomePage(){
   

    return (
        
        <main>
   <Header/>
   <div className="mainContent">
        <HomePageImage/>
        <AboutUs/>
        <OurStock />

        </div>
   
</main>
        
    )
}

export default HomePage
