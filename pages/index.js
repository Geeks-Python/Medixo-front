import Head from 'next/head'
import { useState } from 'react';
import Login from '../components/loginPage/Login'
// import PatientRegisterPage from './PatientRegisterPage'
// import DoctorRegisterPage from './DoctorRegisterPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage'
// import Aboutus from '../components/rihan/aboutus'

import axios from 'axios';


const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + 'auth/login/';
export default function Home() {

  const [token, setToken] = useState('');

  const submitHandler = async (e, credintials) => {
    e.preventDefault();
    axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
    });
    console.log(token)
  }

  if (!token) return <Login submitHandler={submitHandler} />

  return (
    
    <main className="App">
      <div className="right-container">

        <Homepage token={token} />
    {/* <Homepage/> */}
      </div>
      
    </main>
  )
}
