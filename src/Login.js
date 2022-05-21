import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import {auth} from 'firebase/compat/auth';
import 'firebase/compat/firestore';


function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault();

		//some fancy firebase shiiiiiit!
	}


	const register = e => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//it successfully created a new user with email and password
				console.log(auth);
			})
			.catch(error => alert(error.message))

		//do some fancy firebase register shiiiiitt...
	}

	return (
		<div className="login">
			<Link to= '/'>
				<img
				className="login__logo" 
				src="data:image/png;base64,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"/>
			</Link>

			<div className='login__container'>
				<h1>Sign In</h1>

				<form>
					<h5>E-mail</h5>
					<input type='text' value={email} onChange=
					{e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type='password' value={password} onChange=
					{e => setPassword(e.target.value)}/>

					<button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
				</form>

				<p>
					By signing-in you agree to the MianMarket terms and conditions. Please see our Privacy Notice, Our Cookies Notice and our Interest-Based Ads Notice.
				</p>

				<button onClick={register} className='login__registerButton'>Register your MianMarket Account</button>
			</div>
		</div>
	)
}

export default Login;