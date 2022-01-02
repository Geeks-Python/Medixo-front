
import React from 'react'

import Link from 'next/link'
import { useState } from 'react';
import Header from '../components/Header';


function Login({submitHandler}) {





    const [credintials, setCredintials]=useState({username:'', password:''});
    const usernameChangeHandler =(e)=>{
        console.log(e.target.value);
        setCredintials({username:e.target.value})
        console.log(credintials);
    }

    const passwordChangeHandler =(e)=>{
        console.log(e.target.value);
        setCredintials({...credintials, password:e.target.value});
        console.log(credintials);
    }


    
    return (
        <div>
            <Header/>

            <>        
             <div className="login-left" />
            <div className="login-right"> 
            <div className="login-form">
     
           
            <form className="mt-36 " onSubmit={e=>submitHandler(e,credintials)} method='post'>
            <h1>Login</h1>
              <label className="required" htmlFor="username">
                <input name="username" type="text" id="username" placeholder="username"  required  onChange={usernameChangeHandler}/>
              </label>
      <br></br>
              <label className="required" htmlFor="password">
                <input name="password" id="password" type="password" placeholder="Password"  required onChange={passwordChangeHandler} />
              </label>
      
              <select  >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
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
