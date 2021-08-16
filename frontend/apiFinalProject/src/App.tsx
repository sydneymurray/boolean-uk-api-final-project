import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import {Redirect, Route, Switch} from "react-router"

import './App.css'

function App() {
 
  return (
    <div className="App">
      
      <Switch >
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/">
        <Redirect to="/home"/>
        </Route>
      </Switch>


    </div>
  )
}

export default App
