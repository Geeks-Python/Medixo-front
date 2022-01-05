import React, { useState } from 'react';
import Link from 'next/link'

const DoctorRegisterPage = () => {

  return (
    <section>
      <div className="doctor-register-left" />
      <div className="doctor-register-right">
        <div className="doctor-register-form">

          <form className="mt-36 ">
          <h1 > Doctor Registration</h1>


            <label className="required" htmlFor="name">
              <input name="name" type="text" id="name" placeholder="Your Full Name"  required />
            </label>
            <br></br>

            <label className="required" htmlFor="specialization">
              <input name="specialization" type="text" id="specialization" placeholder="Specialization"  required />
            </label>
            <br></br>

            <label className="required" htmlFor="experience">
              <input name="experience" type="number" id="experience" placeholder="Experience (in Years)"  required />
            </label>
            <br></br>

            <label className="required" htmlFor="fee">
              <input name="fee" type="number" id="fee" placeholder="Consulation Fee (in USD)"  required />
            </label>
            <br></br>

            <label htmlFor="image">
              <input name="image" type="text" id="image" placeholder="Image url"  />
            </label>
            <br></br>

            <label className="required" htmlFor="email">
              <input name="email" type="email" id="email" placeholder="Email address"  required />
            </label>
            <br></br>

            <label className="required" htmlFor="password">
              <input name="password" id="password" type="password" placeholder="Password"  required />
            </label>

            <button type="submit">Register</button>
          </form>
          {/* {userInfo.error ? (<div className="error-class"><p>{userInfo.error}</p></div>) : null} */}
          <span>
            {'Already registered? '}
            <Link href="/">Click Here</Link>
          </span>
        </div>
      </div>
    </section>
  );
};


export default DoctorRegisterPage;
