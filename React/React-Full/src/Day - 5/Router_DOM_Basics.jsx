import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Router_DOM_Basics() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default Router_DOM_Basics