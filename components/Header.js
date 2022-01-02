import React from "react";
import { Navbar, NavItem, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
class Header extends React.Component {
	render() {
		return (
			<Navbar className="header-nav" collapseOnSelect expand="lg"  variant="dark">
				<Container>
					<Navbar.Brand href="#home">Medixo</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Home</Nav.Link>
							<Nav.Link href="#pricing">Appointement</Nav.Link>
							<Nav.Link href="/doctors">Doctors</Nav.Link>
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Doctor profile
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">About Us</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
			                    User Profile
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			// <header>

			// 	<nav class="navbar navbar-expand-lg navbar-light shadow-sm">
			// 		<div class="container">
			// 			<a class="navbar-brand" href="#">
			// 				<span class="text-primary">One</span>-Health
			// 			</a>

	

			// 			<button
			// 				class="navbar-toggler"
			// 				type="button"
			// 				data-toggle="collapse"
			// 				data-target="#navbarSupport"
			// 				aria-controls="navbarSupport"
			// 				aria-expanded="false"
			// 				aria-label="Toggle navigation"
			// 			>
			// 				<span class="navbar-toggler-icon"></span>
			// 			</button>

			// 			<div class="collapse navbar-collapse" id="navbarSupport">
			// 				<ul class="navbar-nav ml-auto">
			// 					<li class="nav-item">
			// 						<a class="nav-link" href="index.html">
			// 							Home
			// 						</a>
			// 					</li>
			// 					<li class="nav-item active">
			// 						<a class="nav-link" href="about.html">
			// 							About Us
			// 						</a>
			// 					</li>
			// 					<li class="nav-item">
			// 						<a class="nav-link" href="doctors.html">
			// 							Doctors
			// 						</a>
			// 					</li>
			// 					<li class="nav-item">
			// 						<a class="nav-link" href="blog.html">
			// 							News
			// 						</a>
			// 					</li>
			// 					<li class="nav-item">
			// 						<a class="nav-link" href="contact.html">
			// 							Contact
			// 						</a>
			// 					</li>
			// 					<li class="nav-item">
			// 						<a class="btn btn-primary ml-lg-3" href="#">
			// 							Login / Register
			// 						</a>
			// 					</li>
			// 				</ul>
			// 			</div>
			// 		</div>
			// 	</nav>
			// </header>
		);
	}
}
export default Header;
