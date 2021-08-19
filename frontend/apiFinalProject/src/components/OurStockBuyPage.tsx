import React from "react";
import styled from "styled-components"
import {useHistory} from "react-router-dom"

function OurStockBuyPage({className}){

    const history = useHistory()

    function userClick(e){
        const id = e.target.alt
       history.push(`/product/${id}`)

    }



    return(
       <section className={className}
       >
           <h2>Our Stock</h2>
           <div className="stockContainer">
            
               <a className="card" onClick={userClick} >
                
                   <img src="/src/images/afordmustang.jpeg" alt="mustang" />
                   <div className="productInformation">
                   <p>Car Model</p>
                   <p>Miles</p>
                   <p>2 Previous Owners</p>
                   <p>Price</p>
                   </div>
                 
               </a>
               <div className="card">1</div>
               <div className="card">1</div>
               <div className="card">1</div>
           </div>

       </section>
    )
}

export default styled(OurStockBuyPage)`

margin-top: 60px;
padding-top: 10px;
overflow: scroll;
width: 100vw;
margin-left: auto;
margin-right: auto;
text-align: center;
display: grid;
grid-template-rows: 50px 1fr;
background-color: var(--blue);
color: white;
place-content: center;

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
    box-shadow: 0 4px 8px 0 rgba(255,255,255,0.2);
    transition: 0.3s;
  
    border-radius: 5px;
    
    grid-gap: 20px;
    
    position: relative;
   display: grid;
   

    
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(255,255,255,0.2);
  }
.card img{
    width: 100%;
    height: 100%;
    z-index: 3;
    border-radius: 5px;
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