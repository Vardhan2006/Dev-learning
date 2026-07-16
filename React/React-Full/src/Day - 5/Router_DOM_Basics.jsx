import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from "./Nav";

function Router_DOM_Basics() {
  return (
    <div>
      
      <Nav/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Router_DOM_Basics