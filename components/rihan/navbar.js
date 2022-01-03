import React, { Component } from 'react'


// import { FaFacebookF } from "react-icons/fa";


export default class navbar extends Component {
    render() {
        return (
            <div>
<header class="header trans_400">
		<div class="header_content d-flex flex-row align-items-center jusity-content-start trans_400">

			<div class="logo">
				<a href="#">
					<div><span>MEDIXO</span></div>
					<div></div>
				</a>
			</div>
			<nav class="main_nav">
				<ul class="d-flex flex-row align-items-center justify-content-start">
					<li class="active"><a href="index.html">Home</a></li>
					<li><a href="/aboutus">About us</a></li>
					<li><a href="services.html">Services</a></li>
					<li><a href="blog.html">News</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
			<div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto">
			
			</div>
		</div>
	</header>
            </div>
        )
    }
}
