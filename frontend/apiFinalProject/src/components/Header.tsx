import React from "react";
import styled from "styled-components";
import { HeaderButton } from "./HeaderButton";


function Header({className}){
    return(
        <header className={className}>
            <div className={"container-80 headerContainer"}>
            <h1>Cars Direct</h1>
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

margin-top: 20px;



h1{
   place-self: start;
   align-self: center;
   font-size: 1.5rem;
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