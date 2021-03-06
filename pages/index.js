import { useState , useEffect } from 'react';
import Login from '../components/loginPage/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage'
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BACK_END;
const tokenUrl = baseUrl + 'auth/login/';


export default function Home() {
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
