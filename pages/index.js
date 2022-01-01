import Head from 'next/head'
import Doctors from '../components/doctors'
import Register from '../components/register'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Register />
      <Doctors/>
    </div>
  )
}
