import React, { useState } from 'react'
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectName, logout, selectEmail } from './features/counter/counterSlice';
import Nav from './Nav';

function Dashboard() {
  return (
    <>
           <Nav />
            </>
  )
}

export default Dashboard