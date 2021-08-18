import React from "react";
import styled from "styled-components";
import { HeaderButton } from "./HeaderButton";
import {FaCarAlt} from "react-icons/fa"


function Header({className}){
    return(
        <header className={className}>
            <div className={"container-80 headerContainer"}>
                <div className="logo">
            <h1>Cars Direct </h1>
            <FaCarAlt className="icon"/>
            </div>
            <nav>
                <ul>
                    <li><HeaderButton to="/Buy">Buy</HeaderButton></li>
                    <li><HeaderButton to="/Sell">Sell</HeaderButton></li>
                    <li><HeaderButton className={"padding30"} to="/Exchange">Exchange</HeaderButton></li>
                </ul>
                </nav>

            </div>
          

        </header>
    )


}

export default styled(Header)`



border-bottom: 1px solid lightgrey;


h1{
   place-self: start;
   align-self: center;
   font-size: 1.5rem;
   color: var(--blue);
}

.logo{
    display: grid;
    grid-template-columns: 135px 20px;
}

.icon{
    font-size: 1.5rem;
    color: var(--blue);
    place-self: start;
    align-self: center;
    
}

.icon :hover {
    color: #E8810C;
}

.headerContainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;


}

ul{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 150px);
    
}

li{
    display: inline-block;
    place-self: center;
}

.padding30{
  padding-left: 25px;
  padding-right: 25px;
}



`