import React, { Component } from 'react'
import Navbar from "./navbar"
import Fotterr from "./footer"

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";



export default class aboutus extends Component {
    render() {
        return (
            <div>
                <Navbar />
<div class="about">

                <div class="container ">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U0251F096MA-aca476eb1c4d-512" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Rihan Foudeh</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://github.com/RihanFoudeh/" target="_blank" class="fa fa-github" aria-hidden="true"><AiFillGithub/>  </a></li>
                                   
                                    <li><a href="https://www.linkedin.com/in/rihan-foudeh-58919b216/" target="_blank" class="fa fa-linkedin" aria-hidden="true"><AiFillLinkedin/> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U0257UCLHU1-b6685d77b995-512" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">yousef alramli</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://www.linkedin.com/in/yousef-alramli/" target="_blank" class="fa fa-facebook" aria-hidden="true"><AiFillLinkedin/>  </a></li>
                                   
                                    <li><a href="https://github.com/yousef-alramli" target="_blank" class="fa fa-linkedin" aria-hidden="true"><AiFillGithub/> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U023KC0TXB6-b2d56b18c464-512" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Salsabil Mislat</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://www.linkedin.com/in/salsabil-mislat/" target="_blank" class="fa fa-facebook" aria-hidden="true"><AiFillLinkedin/>  </a></li>
                                   
                                    <li><a href="https://github.com/salsabilmislat" target="_blank" class="fa fa-linkedin" aria-hidden="true"><AiFillGithub/> </a></li>
                                </ul>
                            </div>
                        </div>



                        <div class="col-12 col-sm-6 col-md-4 col-lg-4  ml-40 ">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U025V7UUV7H-9d7451b854ba-512" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Ahmed Al-anaswah</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://www.linkedin.com/in/ahmed-alanasweh/" target="_blank" class="fa fa-facebook" aria-hidden="true"><AiFillLinkedin/>  </a></li>
                                   
                                    <li><a href="https://github.com/Ahmed-Alanaswah" target="_blank" class="fa fa-linkedin" aria-hidden="true"><AiFillGithub/> </a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-4 ml-40">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://ca.slack-edge.com/TNGRRLUMA-U0269V3NQ6N-f46da6b79151-512" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">mohammed alsamaki</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://github.com/mohammedalsamki" target="_blank" class="fa fa-facebook" aria-hidden="true"><AiFillLinkedin/>  </a></li>
                                   
                                    <li><a href="https://github.com/mohammedalsamki" target="_blank" class="fa fa-linkedin" aria-hidden="true"><AiFillGithub/> </a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                       

                    </div>
                </div>


                <Fotterr />
            </div>
        )
    }
}
