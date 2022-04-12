import { Icon } from '@iconify/react'
import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route ,Link,useNavigate } from "react-router-dom";
import Axios from 'axios';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { login, selectCount } from './features/counter/counterSlice';

function Login() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const Sform =async()=>{
	 const res=await   Axios.post("https://gentle-wildwood-96779.herokuapp.com/read",{email:email,password:password,});
	 dispatch(login(res))
	}; 
	 return (
<main className="main">
	<Container>
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large">Sign In</h1>
				<p className="text text-normal">New user? <span><Link to='/'>Create an account</Link></span>
				</p>
			</div>
			<form name="login" className="form">
				<div className="input-control">
					<input type="email" name="email" className="input-field"  onChange={(event)=>{setEmail(event.target.value);}}placeholder="Email Address"/>
				</div>
				<div className="input-control">
					<input type="password" name="password" className="input-field"onChange={(event)=>{setPassword(event.target.value);}}  placeholder="Password"/>
				</div>
				<div className="input-control">
					<a href="#" className="text text-links">Forgot Password</a>
<Link to="/Dashboard"><Button  className="btn btn-primary col-12 mt-3" onClick={Sform}>submit</Button></Link>
				</div>
			</form>
			<div className="striped">
				<span className="striped-line"></span>
				<span className="striped-text">Or</span>
				<span className="striped-line"></span>
			</div>
			<div className="method">
				<div className="method-control">
					<a href="#" className="method-action m">
						<i className="ion ion-logo-google"></i>
						<span><Icon icon="akar-icons:google-fill" color="#db4437" height="25" /> <p className='d-inline'>Sign in with Google</p> </span>
					</a>
				</div>
				<div className="method-control">
					<a href="#" className="method-action m">
					

          <span> <Icon icon="ion:logo-facebook"  height="25"  color="#4267b2" /> <p className='d-inline'>Sign in with Facebook</p>  </span>
					</a>
				</div>
				<div className="method-control">
					<a href="#" className="method-action m">
						<i className="ion ion-logo-apple"></i>
						<span><Icon icon="bxl:apple" height="23" />  <p className='d-inline'>Sign in with Apple</p></span>
					</a>
				</div>
			</div>
		</section>
	</Container>
</main>
  )
}

export default Login