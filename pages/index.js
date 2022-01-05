import Head from 'next/head'
import { useState,useEffect } from 'react';
import Login from '../components/loginPage/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from '../components/rihan/Homepage'

import axios from 'axios';

if (typeof window !== 'undefined') {
  var tokenn = JSON.parse(localStorage.getItem("token"))
}

const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + 'auth/login/';
export default function Home() {
  console.log(tokenn);
  const [token, setToken] = useState('');
  useEffect(()=> {
    const tokendata = window.localStorage.getItem('token')
    setToken(JSON.parse(tokendata))
 },[])

  useEffect(()=> {
     window.localStorage.setItem('token',JSON.stringify(token))
  })


  const submitHandler = async (e, credintials) => {
    e.preventDefault();
    axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
    });
  }

  if (!token) return <Login submitHandler={submitHandler} />
  return (

    <main className="App">
      <div className="right-container">

        <Homepage token={token} />
    
      </div>
      
    </main>
  )
}
