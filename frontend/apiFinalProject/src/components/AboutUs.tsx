import React from "react";
import styled from "styled-components"

function AboutUs({className}){
    return(
        <section className={className}>
        <img src="/src/images/afordmustang.jpeg" alt="roundedImage" className="roundedImage" />
        <div className="aboutUs">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque minima vel eius recusandae soluta. Inventore, quaerat error. Accusantium voluptates vel officia quam, tempora dolorem reiciendis aliquid deleniti aut nesciunt obcaecati?</p>
        </div>

        </section>
    )
}

export default styled(AboutUs)`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 30px;
place-content: center;
width: 80%;
margin-left: auto;
margin-right: auto;

.roundedImage{
    width: 100%;
    border-radius: 50%;
    place-item: center;
}

.aboutUs{
    text-align: center;
    place-self: center;
    display: grid;
    grid-gap: 20px;
}



`