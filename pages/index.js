import Head from 'next/head'
// import Register from '../components/register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Section from '../components/Section'
export default function Home() {
  return (
    <div className="">
      
      <Header />
      <Main />
      <Section/>
      <Footer />
    </div>
  )
}
