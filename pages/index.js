import Head from 'next/head'
import { useState } from 'react';
import Login from '../components/loginPage/Login'
import PatientRegisterPage from './PatientRegisterPage'
import DoctorRegisterPage from './DoctorRegisterPage'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from '../components/doctors'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Section from '../components/Section'

const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + 'api/token/';
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

        <DoctorRegisterPage token={token} />


      </div>
      <div className="">

        <Header />
        <Main />
        <Doctors />
        <Section />
        <Footer />

      </div>
    </main>
  )
}
