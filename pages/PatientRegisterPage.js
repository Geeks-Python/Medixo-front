import React, { useState } from 'react';
import Link from 'next/link'
import axios from 'axios'




const PatientRegisterPage = () => {

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log({
      username: e.target.username.value,
      password: e.target.password.value,
      password2: e.target.rePassword.value,
      email: e.target.email.value,
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      is_staff: false,
      is_superuser: false,
    });
    const config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BACK_END}auth/register/`,
      data: {
        username: e.target.username.value,
        password: e.target.password.value,
        password2: e.target.rePassword.value,
        email: e.target.email.value,
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        is_staff: false,
        is_superuser: false,
      }
    }
    await axios(config)
    window.location.href = '/'

  }

  return (
    <section>
      <div className="patient-register-left" />
      <div className="patient-register-right">
        <div className="patient-register-form">

          <form className="mt-30 " onSubmit={handleCreateUser}>
            <h1> Patient Registration</h1>
            <label className="required" htmlFor="username">
              <input name="username" type="text" id="name" placeholder="username" required />
            </label>
            <br></br>

            <label htmlFor="image">
              <input name="firstName" type="text" id="firstName" placeholder="firstName" />
            </label>
            <br></br>

            <label htmlFor="image">
              <input name="lastName" type="text" id="lastName" placeholder="lastName" />
            </label>

            <br></br>

            <label className="required" htmlFor="email">
              <input name="email" type="email" id="email" placeholder="Email address" required />
            </label>
            <br></br>

            <label className="required" htmlFor="password">
              <input name="password" id="password" type="password" placeholder="Password" required />
            </label>

            <br></br>

            <label className="required" htmlFor="password">
              <input name="rePassword" id="rePassword" type="password" placeholder="Re-Password" required />
            </label>

            <button type="submit">Register</button>
          </form>

          <span>
            {'Already registered? '}
            <Link href="/">Click Here</Link>
          </span>
        </div>
      </div>
    </section>
  );
};



export default PatientRegisterPage;
