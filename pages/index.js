import Head from 'next/head'
import Register from '../components/register/register'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Link from 'next/link'

import { useState } from 'react';



// import Login from '../components/loginPage/LoginPageContainer'
import Login from '../components/loginPage/Login'
import PatientRegisterPage from './PatientRegisterPage'

import DoctorRegisterPage from './DoctorRegisterPage'


import axios from 'axios';



const baseUrl ='http://127.0.0.1:8000/';
const tokenUrl = baseUrl+'api/token/';
export default function Home() {
  
  const [token, setToken] = useState('');

  const submitHandler = async (e, credintials)=>{
    e.preventDefault();
    axios.post(tokenUrl,credintials).then(data=>{
      setToken(data.data.access)
    });
    console.log(token)
  }

  if (!token)  return <Login submitHandler={submitHandler}/> 
  return (

    
    <main className="App">
      <div className="right-container">

        <DoctorRegisterPage token={token} />


      </div>


    </main>


  )
}
