import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons/ai";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => {
	return (
		<div class="page-section pb-0">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 py-3 wow fadeInUp">
						<h1>
							Welcome to Medixo
						</h1>
						<p class="text-grey mb-4">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Accusantium aperiam earum ipsa eius,
							inventore nemo labore eaque porro consequatur ex aspernatur.
							Explicabo, excepturi accusantium! Placeat voluptates esse ut optio
							facilis!
						</p>
						<a href="about.html" class="learn-more btn btn-primary">
							Learn More
						</a>
					</div>
					<div class="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
						<div class="img-place custom-img-1">
							<img src="https://assets.setmore.com/website/v2/images/industry-pages/doctors/smiling-doctor-client-using-setmore.png" alt="image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
