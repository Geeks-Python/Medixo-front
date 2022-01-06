import React, { Component } from 'react'

const navbar = () => {


	const logout = (e) => {
		localStorage.clear();
		window.location.reload();
		window.location.href = '/'
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
						</ul>
					</nav>
					<div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto"></div>
				</div>
			</header>
		</div>
	);
};
export default navbar;
