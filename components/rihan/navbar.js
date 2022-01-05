import React, { Component } from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'



// import axios from 'axios';
import { MdLogout } from "react-icons/md";


import jwtDecode from "jwt-decode";
import axios from "axios";

const navbar = () => {

//    const [name, setName] = useState("");
	
// 	 useEffect(() => { 
// 		const tokendata = JSON.parse(window.localStorage.getItem('token'))
// 		// const  decodeddata = jwtDecode(tokendata)
// 		// console.log(decodeddata)	
// 		},[])

	const logout = (e) => {
		localStorage.clear();
		window.location.reload();
	};
	

	return (
		<div>
			<header class="header trans_400">
				<div class="header_content d-flex flex-row align-items-center jusity-content-start trans_400">

					<div class="logo">
						<a href="#">
							<div>
								<span>MEDIXO</span>
							</div>
							<div></div>
						</a>
					</div>
					<nav class="main_nav">



					<ul class="nave d-flex flex-row align-items-center justify-content-start">
							<li class=""><a href="/">Home</a></li>
							<li><a href="/doctors">Doctors</a></li>
							<li><a href="blog.html">News</a></li>
							<li><a href="/aboutus"> About us</a></li>
							<li><a href="/profile">Profile</a></li>
							<li class="aa"  ><a style={{ 'cursor': 'pointer' }}  onClick={logout}> Logout </a></li>
							{/* <li><a style={{ 'cursor': 'pointer' }} >  </a></li> */}
							{/* <li><a style={{'cursor':'pointer'}} >sign up</a></li> */}
						</ul>
					</nav>
					<div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto"></div>
				</div>
			</header>
		</div>
	);
};
export default navbar;
