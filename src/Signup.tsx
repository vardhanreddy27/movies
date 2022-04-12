import React, { useState } from 'react';
import Axios  from 'axios';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Container, Form, Button } from 'react-bootstrap';
import { useAppDispatch } from './app/hooks';

function Signup()
{
const [name,setName]=useState('');
const [password,setPassword]=useState('');
const [email,setEmail]=useState('');
const dispatch = useAppDispatch();

const [phone,setPhone]=useState('');
const sform =async ()=>{
Axios.post("https://gentle-wildwood-96779.herokuapp.com/sinsert",{name:name,email:email,phone:phone,password:password});
const res=await Axios.post("https://gentle-wildwood-96779.herokuapp.com/sinsert",{name:name,email:email,phone:phone,password:password});

};



  return (  
<main className="main">
	<div className="container">
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large">Sign In</h1>
				<p className="text text-normal">Already have account? <span><Link to='/Login'>Login</Link></span>
				</p>
			</div>
			<form className="form">
      <div className="input-control">
					<input type="name" name="name" onChange={(event)=>{setName(event.target.value);}} className="input-field" placeholder="Name"/>
				</div>
        <div className="input-control">
					<input type="email" name="email" onChange={(event)=>{setEmail(event.target.value);}}  className="input-field" placeholder="Email Address" required/>
				</div>
        <div className="input-control">
					<input type="tel" name="phone" onChange={(event)=>{setPhone(event.target.value);}} className="input-field" placeholder="Phone"/>
				</div>
        <div className="input-control">
					<input type="password"     onChange={(event)=>{setPassword(event.target.value);}} name="password" className="input-field" placeholder="Password"/>
				</div>	<div className="input-control">
					<input type="password" name="cpassword" className="input-field" placeholder="Confirm Password"/>
				</div>
				<div className="input-control">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
<p className='d-inline k'>terms & conditions</p>
<Link to="/Login">	<Button type="submit" onClick={sform}  className="input-submit" >Signup</Button></Link>
				</div>
			</form>			
		</section>
		</div></main>

  )
}

export default Signup