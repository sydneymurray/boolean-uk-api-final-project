import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import BuyPage from './pages/BuyPage'
import {Redirect, Route, Switch} from "react-router"

import './App.css'

function App() {
 
  return (
    <div className="App">
      
      <Switch >
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/" exact>
        <Redirect to="/home"/>
        </Route>
        <Route  path="/buy">
          <BuyPage/>
        </Route>
      </Switch>


    </div>
  )
}

export default App
