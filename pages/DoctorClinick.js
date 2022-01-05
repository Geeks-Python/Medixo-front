import React, { useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const DoctorClinick = (props) => {

//   const [doctorData , setDoctorData]=useState()
  const handleCreateClinic = async (e) => { 
    e.preventDefault();
    const conf = {
        
        method: "POST",
        url: "http://127.0.0.1:8000/auth/login/",
        data: {
           username  :props.doctorData.username,
           password :props.pass,
        }
    }
    let token ;
    await axios(conf).then(res => {
          token = res.data.access
         
        })

        const decoded = jwtDecode(token)

    const config = {
        
        method: "POST",
        url: "http://127.0.0.1:8000/api/v1/doctor/",
        headers: { "Authorization": `Bearer ${token}` },
        data: {
            name :e.target.name.value,
            speciality : e.target.speciality.value,
            email :e.target.email.value,
            phone_number : e.target.phone_number.value,
            city : e.target.city.value,
            town :e.target.town.value,
            building_number : e.target.building_number.value,
            street : e.target.street.value,
            user :decoded.user_id,
            img :e.target.img.value,
            opening_hours : [9,10,11,12],
        }
    }
    
    await axios(config)


    window.location.href = '/'
}



  return (
    <section>
      <div className="doctor-register-left" />
      <div className="doctor-register-right">
        <div className="doctor-register-form">

        <form  className="mt-30 " onSubmit={handleCreateClinic} >
        <h1 className='m-10'> Please Enter Your Clicnic Information</h1>
          <label className="required" htmlFor="name">
            <input name="name" type="text" id="name" placeholder="name"  required />
          </label>
          <br></br>

          <label htmlFor="speciality">
            <input name="speciality" type="text" id="speciality" placeholder="speciality"  />
          </label>
          <br></br>


          <label htmlFor="email">
            <input name="email" type="email" id="email" placeholder="email"  />
          </label>
          
          <br></br>

          <label className="required" htmlFor="phone_number">
            <input name="phone_number" type="text" id="phone_number" placeholder="phone_number"  required />
          </label>
          <br></br>

          <label className="required" htmlFor="city">
            <input name="city" id="city" type="text" placeholder="city"  required />
          </label>

          <br></br>

          <label className="required" htmlFor="town">
            <input name="town" id="town" type="text" placeholder="town"  required /> <br/>
          </label>
           
          <label className="required" htmlFor="building_number">
            <input name="building_number" id="building_number" type="text" placeholder="building_number"  required /> <br/>
          </label>

          <label className="required" htmlFor="street">
            <input name="street" id="street" type="text" placeholder="street"  required /> <br/>
          </label>

          {/* <label className="required" htmlFor="user">
            <input name="user" id="user" type="text" placeholder="user"  required /><br/>
          </label>  */}

          <label className="required" htmlFor="img">
            <input name="img" id="img" type="text" placeholder="img"  required /> <br/>
          </label>

          <label className="required" htmlFor="opening_hours">
            {/* <input name="opening_hours" id="opening_hours" type="text" placeholder="opening_hours"  required /> */}
          </label>

          <button type="submit">Register</button>
        </form> 
        {/* {userInfo.error ? (<div className="error-class"><p>{userInfo.error}</p></div>) : null} */}
        <span>
          {'Already registered? '}
          <Link href="/">Click Here</Link>
        </span>
        </div>
      </div>
    </section>
  );
};


export default DoctorClinick;
