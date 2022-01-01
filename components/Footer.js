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
		// <footer>
		// 	<MDBFooter color="blue" className="footer font-small  ">
		// 		<MDBContainer fluid className="text-center text-md-left">
		// 			<MDBRow className="akhaf">
		// 				<MDBCol className="first" md="3">
		// 					<h3 className="title">Be Future Ready</h3>
		// 					<p>
		// 						You will be able to choose the best doctors with high accuracy
		// 						online.
		// 					</p>
		// 					<form className="subscribe">
		// 						<input type="text" />
		// 						<br />
		// 						<input type="submit" value="Subscribe" />
		// 					</form>
		// 				</MDBCol>
		// 				<MDBCol md="3">
		// 					<ul>
		// 						<h3 className="title">About</h3>
		// 						<li className="list-unstyled">
		// 							<a href="#!">Our Team</a>
		// 						</li>
		// 						<li className="list-unstyled">
		// 							<a href="#!">Clients </a>
		// 						</li>
		// 						<li className="list-unstyled">
		// 							<a href="#!">Press</a>
		// 						</li>
		// 						<li className="list-unstyled">
		// 							<a href="#!">Blog</a>
		// 						</li>
		// 					</ul>
		// 				</MDBCol>
		// 				<MDBCol md="3">
		// 					<ul>
		// 						<h3 className="title">Corporate Training</h3>
		// 						<li className="list-unstyled">
		// 							<a href="#!">Leaders</a>
		// 						</li>
		// 						<li className="list-unstyled">
		// 							<a href="#!">Practitionres</a>
		// 						</li>
		// 					</ul>
		// 				</MDBCol>
		// 				<MDBCol md="3">
		// 					<ul>
		// 						<h3 className="title">Contact Us</h3>
		// 						<li className="contact-us list-unstyled">
		// 							<FaPhoneAlt />
		// 							<p>+(962)555522200</p>
		// 						</li>
		// 						<li className="contact-us list-unstyled">
		// 							<CgMail />
		// 							<p>Medixo@gmail.com</p>
		// 						</li>
		// 						<li className="contact-us list-unstyled">
		// 							<AiFillInstagram />
		// 							<p> Medixo@gmail.com</p>
		// 						</li>
		// 						<li className="contact-us list-unstyled">
		// 							<FaFacebookSquare />

		// 							<p>Medixo@gmail.com</p>
		// 						</li>
		// 					</ul>
		// 				</MDBCol>
		// 			</MDBRow>
		// 		</MDBContainer>
		// 		<div className="footer-copyright text-center py-3">
		// 			<MDBContainer fluid>
		// 				&copy; {new Date().getFullYear()} Copyright:{" "}
		// 				<a href="https://www.mdbootstrap.com"> Medixo </a>
		// 			</MDBContainer>
		// 		</div>
		// 	</MDBFooter>
		// </footer>
        <footer class="page-footer">
        <div class="container">
          <div class="row px-md-3">
            <div class="col-sm-6 col-lg-3 py-3">
              <h5>Company</h5>
              <ul class="footer-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Editorial Team</a></li>
                <li><a href="#">Protection</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-3 py-3">
              <h5>More</h5>
              <ul class="footer-menu">
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Join as Doctors</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-3 py-3">
              <h5>Our partner</h5>
              <ul class="footer-menu">
                <li><a href="#">One-Fitness</a></li>
                <li><a href="#">One-Drugs</a></li>
                <li><a href="#">One-Live</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-3 py-3">
              <h5>Contact</h5>
              <p class="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
              <a href="#" class="footer-link">701-573-7582</a>
              <a href="#" class="footer-link">healthcare@temporary.net</a>
    
              {/* <h5 class="mt-3">Social Media</h5>
              <div class="footer-sosmed mt-3">
                <a href="#" target="_blank"><span class="mai-logo-facebook-f"></span></a>
                <a href="#" target="_blank"><span class="mai-logo-twitter"></span></a>
                <a href="#" target="_blank"><span class="mai-logo-google-plus-g"></span></a>
                <a href="#" target="_blank"><span class="mai-logo-instagram"></span></a>
                <a href="#" target="_blank"><span class="mai-logo-linkedin"></span></a>
              </div> */}
            </div>
          </div>
    
          <hr/>
    
          <p id="copyright">Copyright &copy; 2020 All right reserved.By<a href="https://macodeid.com/" target="_blank">Medixo</a></p>
        </div>
      </footer>
	);
};

export default Footer;
