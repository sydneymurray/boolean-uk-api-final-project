import React from "react";

import styled from "styled-components"
import {FaChevronDown} from "react-icons/fa"

function HomePageImage({className}){

    return(
        <section className={className}>
              <img src="/src/images/afordmustang.jpeg" alt="HomepageImage" />
              <div>
              <h2>Buy Or Sell With Great Prices</h2>
              <a href="#stock" className={"icon"}><FaChevronDown /></a>
              </div>
             
              
        </section>
      
    )
}

export default styled(HomePageImage)`
position: relative;
display: grid;



.icon{
    font-size: 3rem;
    color: white;
    place-self: center;
}



img{
   height: calc(100vh - 70px);
   width: 100vw;
   z-index: -100;
   position: absolute;
   top: 0;
   right: 0;
}

div{
    place-self: center;
    align-self: end;
    display: grid;
}


h2{
    place-self: center;
    color: white;
    font-size: 4rem;
}



`