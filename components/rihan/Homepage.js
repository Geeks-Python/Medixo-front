import React, { Component } from 'react'
import Image from 'next/image'

import Navbar from "./navbar"
import Fotterr from "./footer"
import Doctorcard from "./doctorcard"

import Services from "./services"
import Description from "./description"

import Welcome from "./welcome"







export default class Homepage extends Component {
  render() {
    return (

      <body class="body font-sans antialiased text-gray-900 bg-white ">
       
        


        <main class="main w-full">
        <Navbar />


          <section class="home_banner_area">
            <div class="banner_inner d-flex align-items-center">
              <div class="container">
                <div class="banner_content row">
                  <div class="col-lg-12" id="first-P" >
                    <h1>Welcome </h1>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some
                      for as low as each.</p>
                    <a class="main_btn mr-10" href="#">get started</a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* <div class="bg-gray-100">
            <section class="relative flex items-center min-h-screen px-4 py-48 overflow-hidden bg-blue-600 cover bg-blue-teal-gradient sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
              <div class="absolute top-0 left-0 z-0 h-full">
                <img src="https://www.aarogyasevahealthcard.com/storage/media/image/poster.jpg" alt="hello" class="object-cover w-full h-full opacity-10" />
              </div>

              <div class="relative z-10 lg:w-3/4 xl:w-2/4 h-100 lg:mt-16">
                <div >
                  <h1  class="text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                   Welcome,</h1>
                  <p class="mt-4 text-xl leading-snug text-blue-100 md:text-2xl">Welcome to  our web site Office of Medixo
                    ,
                    where
                    trust
                    and comfort are priorities.</p>
                  <a href="#" class="inline-block px-8 py-4 mt-8 font-semibold text-white bg-teal-500 rounded">Book
                    Appointment</a>
                </div>
              </div>
            </section>
          </div> */}
        </main>










        <Welcome />

        {/* <Description /> */}

        <Services />




        < Doctorcard />






        <Fotterr />

      </body>
    )
  }
}
