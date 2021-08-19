import React from "react";
import styled from "styled-components"
import Header from "../components/Header";
import SearchCar from "../components/SearchCar";
import OurStockBuyPage from "../components/OurStockBuyPage";
import Footer from "../components/Footer";

function BuyPage(){
    return(
        <>
        <main className="mainContent">
        <Header/>
        <SearchCar/>
        <OurStockBuyPage/>
        
        </main>
    
          
        </>
    )
}

export default styled(BuyPage)`
`