import React from "react";
import { useState } from "react";
import styled from "styled-components"


function SearchCar({className}){

    const [searchinput, setSearchInput] = useState("")

    function searchBar(e){
        e.preventDefault()
        console.log(searchinput)
        setSearchInput("")
        
    }

    return(
        <section className={className}>
        <h2>Search Through Our Stock</h2>
        <div className="searchBarSection">
            <form onSubmit={searchBar}>
                <input type="text" placeholder="FORD MUSTANG" className="searchBar" value={searchinput} onChange={(e) => setSearchInput(e.target.value)} />
                <button onClick={searchBar}>Search</button>
            </form>
        </div>
        </section>
    )
}

export default styled(SearchCar)`

display: grid;
place-content: center;
grid-gap: 20px;
height: calc(100vh - 175px);

h2{
    font-size: 2.5rem;
    color: var(--blue);
}

.searchBarSection{
    margin-bottom: 200px;
}

.searchBar{
    width: 100%;
    padding: 7px;
    border-radius: 10px;
    border: 1px solid lightgrey
}

form{
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-gap: 20px;
  
}

button{
    border-radius: 10px;
   border: 1px solid lightgrey;
   background-color: #E8810C;
   color: white;
}
`