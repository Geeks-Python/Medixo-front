
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Login({ submitHandler }) {

  const [credintials, setCredintials] = useState({ username: '', password: '' });
  const usernameChangeHandler = (e) => {
    setCredintials({ username: e.target.value })
  }

  const passwordChangeHandler = (e) => {
    setCredintials({ ...credintials, password: e.target.value });
  }
  
  return (
    <div>
      <>
        <div className="login-left" />

        <div className="login-right">
          <div className="login-form">

            <form className="mt-36 " onSubmit={e => submitHandler(e, credintials)} method='post'>
              <h1>Login</h1>
              <label className="required" htmlFor="username">
                <input className="input" name="username" type="text" id="username" placeholder="username" required onChange={usernameChangeHandler} />
              </label>
              <br></br>
              <label className="required" htmlFor="password">
                <input className="input" name="password" id="password" type="password" placeholder="Password" required onChange={passwordChangeHandler} />
              </label>
              <br></br>

              <button type="submit">LOGIN</button>
            </form>
            <span>
              Register ?

              {' '}
              <Link href="/PatientRegisterPage">Patient</Link>
              {' or '}
              <Link href="/DoctorRegisterPage">Doctor</Link>
            </span>
          </div>
        </div>

      </>
    </div>
  )
}

export default Login
