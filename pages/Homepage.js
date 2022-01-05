import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/rihan/navbar"
import Fotterr from "../components/rihan/footer"
import Doctorcard from "../components/rihan/doctorcard"
import Services from "../components/rihan/services"
import Welcome from "../components/rihan/welcome"

export default class Homepage extends Component {
  render() {
    return (
      <body class="body font-sans antialiased text-gray-900 bg-white ">
        <main class="main w-full">

          <Navbar />

          <section class="home_banner_area">
            <div class="banner_inner d-flex align-items-center">
              <div class="container">
                <div class="banner_content row ">
                  <div class="col-lg-12 " id="first-P" >
                    <h1>Welcome </h1>
                    <p>We're here when you need us. For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.</p>
                    {/* <a class="main_btn mr-10" href="#">get started</a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Welcome />

        <Services />

        < Doctorcard />

        <Fotterr />

      </body>
    )
  }
}
