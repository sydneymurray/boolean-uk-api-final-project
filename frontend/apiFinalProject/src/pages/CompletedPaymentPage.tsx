import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {FcApproval} from "react-icons/fc";
import {useHistory} from "react-router-dom";

function CompletedPayment({className}){

    const history = useHistory()

    function userClick(e){
        history.push("/home")
    }
    return (
        <>
        <Header/>
       <section className={className}>
        <h1>Payment Successfull</h1>
        <FcApproval className="icon"/>
        <a onClick={userClick} className="button">Home</a>
        </section>
        </>
    )
}

export default styled(CompletedPayment)`

display: grid;
place-items: center;
grid-template-columns: 250px 50px;
grid-gap: 10px;
place-content: center;



.icon{
    font-size: 2.5rem;
}

.button{
    background-color: var(--blue);
    padding: 7px;
    border-radius: 5px;
    color: white;
}

.button:hover{
    background-color: white;
    border: 1px solid var(--blue);
    color: var(--blue);
    padding: 6px;
   
}
`