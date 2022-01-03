import React, { Component } from 'react'

import { MdPayment } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { SiCoursera } from "react-icons/si";
import { GiPlatform } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";
export default class services extends Component {
    render() {
        return (
            <div>




<section class="services text-center section" id="services">
            <div class="headTitle">
              <h2>OUR SERVICES</h2>
              <svg width="180px" height="20px" class="ml-8">
                <line 
                  x1="0"
                  y1="10"
                  x2="180"
                  y2="10"
                  stroke="#9e9e9e"
                  stroke-width="1px"
                ></line>
                <line
                  x1="50"
                  y1="10"
                  x2="130"
                  y2="10"
                  stroke="#2196f3"
                  stroke-width="5px"
                ></line>
              </svg>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12  ">
                  <div class="content ">
                    <i class="fa fa-book ">
                      <MdPayment class="svgHome  " />
                    </i>
                    <h3 class="pt-2" >Payment Methods</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>



                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="content">
                    <i class="fa fa-adjust ">
                      <SiCoursera class="svgHome " />
                    </i>
                    <h3 class="pt-2">Wide Open Sources</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>



                <div class="col-lg-4 col-md-6 col-sm-12 ">
                  <div class="content">
                    <i class="fa fa-american-sign-language-interpreting ">
                      <GiPlatform class="svgHome "/>
                    </i>
                    <h3 class="pt-2">Different Platforms</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>



                <div class="col-lg-4 col-md-6 col-sm-12 ">
                  <div class="content">
                    <i class="fa fa-clone">
                      <GiOpenBook class="svgHome "/>
                    </i>
                    <h3 class="pt-2">Learning Materials</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>



                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="content">
                    <i class="fa fa-gitlab">
                      <FaBlog class="svgHome "/>
                    </i>
                    <h3 class="pt-2">Blogs,News, and Articles</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>


                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="content">
                    <i class="fa fa-google-wallet">
                      <BiSupport class="svgHome "/>
                    </i>
                    <h3 class="pt-2">Support</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div> 


              </div>
            </div>
          </section>








                  {/*<section class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 ">
          



             <div class="mt-24 text-center md:flex md:flex-wrap md:-mx-4">
              <div class="md:w-1/2 md:px-4 lg:w-1/4">
                <div class="p-8 bg-white border border-gray-300 rounded-lg">

                  <img src="images/teeth-whitening.svg" alt="" class="h-20 mx-auto" />

                  <h4 class="mt-4 text-xl font-bold">Teeth Whitening</h4>
                  <p class="mt-1">Let us show you how our experience.</p>
                  <a href="#" class="block mt-4">Read More</a>
                </div>
              </div>
              <div class="mt-4 md:w-1/2 md:px-4 md:mt-0 lg:w-1/4">
                <div class="p-8 bg-white border border-gray-300 rounded-lg">
                  <img src="images/oral-surgery.svg" alt="" class="h-20 mx-auto" />

                  <h4 class="mt-4 text-xl font-bold">Physical therapy</h4>
                  <p class="mt-1">Let us show you how our experience.</p>
                  <a href="#" class="block mt-4">Read More</a>
                </div>
              </div>

              <div class="mt-4 md:w-1/2 md:px-4 md:mt-0 lg:w-1/4">
                <div class="p-8 bg-white border border-gray-300 rounded-lg">
                  <img src="images/oral-surgery.svg" alt="" class="h-20 mx-auto" />

                  <h4 class="mt-4 text-xl font-bold">Physical therapy</h4>
                  <p class="mt-1">Let us show you how our experience.</p>
                  <a href="#" class="block mt-4">Read More</a>
                </div>
              </div>

              <div class="mt-4 md:w-1/2 md:px-4 md:mt-0 lg:w-1/4">
                <div class="p-8 bg-white border border-gray-300 rounded-lg">
                  <img src="images/oral-surgery.svg" alt="" class="h-20 mx-auto" />

                  <h4 class="mt-4 text-xl font-bold">Physical therapy</h4>
                  <p class="mt-1">Let us show you how our experience.</p>
                  <a href="#" class="block mt-4">Read More</a>
                </div>
              </div>

              <div class="mt-4 md:w-1/2 md:px-4 md:mt-0 lg:w-1/4">
                <div class="p-8 bg-white border border-gray-300 rounded-lg">
                  <img src="images/oral-surgery.svg" alt="" class="h-20 mx-auto" />

                  <h4 class="mt-4 text-xl font-bold">Physical therapy</h4>
                  <p class="mt-1">Let us show you how our experience.</p>
                  <a href="#" class="block mt-4">Read More</a>
                </div>
              </div>
            </div>
          </section> */}
            </div>
        )
    }
}
