import React, { Component } from 'react'

export default class welcome extends Component {
  render() {
    return (
      <div>
        <div class="bg-light">
          <div class="page-section pb-0">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 py-3  ">
                  <h1>Why choose the Medixo Center?<br /> </h1>
                  <p class="text-grey mb-4">We offer something different from other practices care that doesn’t end when you leave our clinic. We want to help you stay healthy even when you’re not here – by showing you how to avoid sickness, manage chronic conditions, and giving you the information and support you need to achieve better health.</p>

                  <a class="main_btn mr-10" href="/aboutus">View More</a>
                </div>
                <div class="col-lg-6 " >
                  <div class="img-place custom-img-1">
                    <img src="/bg-doctor.png" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
