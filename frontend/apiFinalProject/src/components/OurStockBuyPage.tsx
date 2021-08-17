import React from "react";
import styled from "styled-components"

function OurStockBuyPage({className}){
    return(
       <section className={className}
       >
           <h2>Our Stock</h2>
           <div className="stockContainer">
               <div className="card">
                   <img src="/src/images/afordmustang.jpeg" alt="buyPageProduct" />
                   <div className="productInformation">
                   <p>Car Model</p>
                   <p>Miles</p>
                   <p>2 Previous Owners</p>
                   <p>Price</p>
                   </div>
                 
               </div>
               <div className="card">1</div>
               <div className="card">1</div>
               <div className="card">1</div>
           </div>

       </section>
    )
}

export default styled(OurStockBuyPage)`

padding-top: 60px;

overflow: scroll;
width: 90vw;
margin-left: auto;
margin-right: auto;
text-align: center;
display: grid;
grid-template-rows: 50px 1fr;

h2{
    font-size: 2rem;
}

.stockContainer{
    width: 100%;
    scroll-snap-type: x mandatory;
    display: grid;
    grid-template-columns: repeat(10, minmax(40% , 45%));
    grid-gap: 60px;
    padding: 20px;
    height: 500px;
    overflow-x: scroll;
}

.card {
    scroll-snap-align: center;

    
    grid-gap: 20px;
    border: 1px solid lightgrey;
    position: relative;
   display: grid;
   

    
}
.card img{
    width: 100%;
    height: 100%;
    z-index: 3;
}

.productInformation{
    position: absolute;
    z-index: 5;
 
    align-self: end;
    padding-left: 40px;
    padding-bottom: 60px;
    color: white;
    font-size: 1.5rem;
}
`