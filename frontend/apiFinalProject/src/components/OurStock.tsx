import React from "react";
import styled from "styled-components"
import {FaStar} from "react-icons/fa"



function OurStock({className}){
    return (
        <section className={className} id="stock">
            <h2>Our Stock</h2>
           <div className="slider">
               <div className="child">
                   <div className="card">
                       <img src="/src/images/afordmustang.jpeg" alt="stock" className="stockCardImg"/>
                       <h3 className="carPrice">£15000</h3>
                   </div>
               </div>
               <div className="child">
               <div className="card"></div>
               </div>

               <div className="child">
               <div className="card"></div>
               </div>
               <div className="child">
               <div className="card"></div>
               </div>
               <div className="child">
               <div className="card"></div>
               </div>
               <div className="child">
               <div className="card"></div>
               </div>
               <div className="child">
               <div className="card"></div>
               </div>
               <div className="child">
               <div className="card"></div>
               </div>

           </div>
            <div className="customerReviews">
                <h2>Customer Reviews</h2>
                <div className="review">
                <p className="reviewPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex aliquam ipsam quae fugiat ratione sapiente rem. Ex ipsum reprehenderit repudiandae at in, harum voluptatum quisquam quas tenetur fugit quibusdam!</p>
                
                    <ul  className="reviewStars">
                        <li><FaStar/></li>
                        <li ><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                    </ul>
                    
                    </div>

              
            </div>

        </section>
    )


}

export default styled(OurStock)`

display: grid;
grid-template-rows: 40px 1fr 1fr;
grid-gap: 20px;
background-color: var(--blue);
padding: 30px;
place-items: center;
color: white;
h2{
    text-align: center;
}

.slider{
    width: 100%;
    scroll-snap-type: x mandatory;
    display: grid;
    grid-template-columns: repeat(10, minmax(400px , 1fr));
    grid-gap: 60px;
    padding: 20px;
    height: 100%;
    overflow-x: scroll;
   
}

.child{
    scroll-snap-align: center;

    place-content: center;
    grid-gap: 20px;
}

.card{
    box-shadow: 0 4px 8px 0 rgba(255,255,255,0.2);
  transition: 0.3s;

  border-radius: 5px;
    height: 300px;
    border-radius: 5px;
    display: grid;
    position: relative;


}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(255,255,255,0.2);
  }
  

.stockCardImg{
   width: 100%;
   height: 100%;
   z-index: 5;
}

.carPrice{
    z-index: 10;
    align-self: end;
    justify-self: center;
    position: absolute;
    margin-bottom: 30px;
    font-size: 2rem;
    color: white;
    
}

.reviewPara{
    text-align: center;
}

.reviewStars{
    list-style-type: none;
    place-self: end;
    margin-right: 55px;
}


.reviewStars li {
    display: inline-block;
    color: yellow;
    font-size: 1.2rem;
}

.customerReviews{
    display: grid;
    grid-template-rows: 50px 50px;
}

.review{
    display: grid;

}





`