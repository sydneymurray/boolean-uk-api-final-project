import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {useHistory} from "react-router-dom"

function ProductPage({className}){
    const history = useHistory()


    return(
    <>
        <Header/>
        <section className={className}>
        <img src="/src/images/afordmustang.jpeg" alt="singleProductPicture" />
        <div className="rightColumn">
            <h2>Ford Mustang</h2>
            <div className="carSpecifications">
                <div>
                <p>Year 2012</p>
                <p>MOT TILL 2021</p>
                <p>Number Of Previous Owners 2</p>
                <p>Miles 6000</p>
                <p>MPG 30</p>
                </div>
                <div className="bottomRow">
                <a className="buyButton" href="#">Buy</a>
                <p>£20000</p>
                </div>
              
            </div>
        </div>
        </section>
    
        </>
    )
}

export default styled(ProductPage)`

display: grid;
grid-template-columns: repeat(2, 1fr);
place-items: center;
grid-gap: 30px;
width: 80%;
margin-left: auto;
margin-right: auto;
text-align: center;


img{
    width: 500px;
    height: 500px;
}

.carSpecifications{
    border: 1px solid lightgrey;
    display: grid;
    place-items: center;
    padding: 10px;
    font-size: 1.2rem;
    margin-top: 10px;
    grid-template-rows: 1fr 50px;
    grid-gap: 20px;

}

.buyButton{
    font-size: 1.5rem;
    padding: 7px 30px;
    border: 1px solid lightgrey;
    text-decoration: none;
    border-radius: 5px;
}

.bottomRow{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    
}

`