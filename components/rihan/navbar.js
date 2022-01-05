import React, { Component } from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'



// import axios from 'axios';
import { MdLogout } from "react-icons/md";


import jwtDecode from "jwt-decode";
import axios from "axios";

const navbar = () => {

   const [name, setName] = useState("");
	
	 useEffect(() => { 
		const tokendata = JSON.parse(window.localStorage.getItem('token'))
		
		const  decodeddata = jwtDecode(tokendata)
		console.log(decodeddata)

		
		console.log(setName(decodeddata.name))
	
		},[])

	const logout = (e) => {
		localStorage.clear();
		window.location.reload();
	};
	console.log(name)
	

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



						<ul class="d-flex flex-row align-items-center justify-content-start">
							<li class="active">
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="/aboutus">About us</a>
							</li>
							<li>
								<a href="services.html">Services</a>
							</li>
							<li>
								<a href="blog.html">News</a>
							</li>
							<li>
								<a href="contact.html">Contact</a>
							</li>
							<li>
								<a style={{ cursor: "pointer" }} onClick={logout}>
									logout
								</a>
							</li>
							<li>
								<a style={{ cursor: "pointer" }}>
								{name}
								</a>
							</li>
							<li>
								<a style={{ cursor: "pointer" }}>sign up</a>
							</li>
						</ul>
					</nav>
					<div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto"></div>
				</div>
			</header>
		</div>
	);
};
export default navbar;
