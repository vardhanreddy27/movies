import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Navbar from './Nav';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../src/app/hooks';
import { selectCount } from './features/counter/counterSlice';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import Slideshow from './Slideshow';
function App()
{
    const auth = useAppSelector(selectCount);
//const auth = useSelector((state) => state.auth)
  if(!auth){
  return (  
    <Router><Routes><Route path="/" element={<Signup  />}/>
   <Route path="/Login" element={<Login />}/>
   <Route path="/Dashboard" element={<Dashboard  />}/>
  </Routes> </Router>
     )
}else{ 
  return (  
  <Router>
    <Routes><Route path="/" element={<Dashboard  />}/>
  <Route path="/Dashboard" element={<Dashboard  />}/></Routes>
  </Router>
   )}


}

export default App