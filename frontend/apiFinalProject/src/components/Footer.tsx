import React from "react"
import styled from "styled-components"
import {FaCopyright} from "react-icons/fa"

function Footer({className}){
    return(
        <footer className={className}>
             <h4>Cars Direct</h4>
            <FaCopyright/>
        </footer>
           
      


    )
}

export default styled(Footer)`
display: grid;
grid-template-columns: 30px 50px;
height: 200px;
position: static;




`