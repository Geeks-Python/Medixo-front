import React, { Component } from 'react'
import Image from 'next/image'

import Navbar from "./navbar"
import Fotterr from "./footer"
import Doctorcard from "./doctorcard"

import Services from "./services"
import Description from "./description"






export default class Homepage extends Component {
  render() {
    return (

      <body class="body font-sans antialiased text-gray-900 bg-white ">
        <Navbar />

        <main class="main w-full">




          <div class="bg-gray-100">
            <section class="relative flex items-center min-h-screen px-4 py-48 overflow-hidden bg-blue-600 cover bg-blue-teal-gradient sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
              <div class="absolute top-0 left-0 z-0 h-full">
                <img src="https://www.aarogyasevahealthcard.com/storage/media/image/poster.jpg" alt="hello" class="object-cover w-full h-full opacity-10" />
              </div>

              <div class="relative z-10 lg:w-3/4 xl:w-2/4 h-100 lg:mt-16">
                <div>
                  <h1 class="text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">A better life starts with a
                    beautiful
                    smile.</h1>
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
          </div>

          <Description />

          <Services />





          < Doctorcard />





        </main>
        <Fotterr />

      </body>
    )
  }
}
