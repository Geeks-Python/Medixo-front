import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from "next/link"
import Navbar from "../components/rihan/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Fotterr from "../components/rihan/footer"




function Doctors() {
    const [token, setToken] = useState('');
    const [doctorData, setDoctorData] = useState([]);

    useEffect(() => {
        handel()
    }, []);

    const handel = async () => {
        const configToken = {
            method: "POST",
            url: "http://127.0.0.1:8000/auth/login/",
            data: {
                "username": "3",
                "password": "3"
            }
        }

        let to;
        await axios(configToken).then(data => {
            setToken(data.data.access);
            to = data.data.access
        });

        const config = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/doctor/",
            headers: { 'Authorization': 'Bearer ' + to },

        }
        await axios(config).then(res => {
            setDoctorData(res.data);
            console.log(res.data);

        });
    }

    return (
        <div>
             <Navbar />
            <div>


            <section class="home_banner_area2">
            <div class="banner_inner d-flex align-items-center">
              <div class="container">
                <div class="banner_content row ">
                  <div class="col-lg-12 " id="first-c" >
                    <h1>Meet Our  Doctors </h1>
                    <p>The doctor of the future will give no medicine but will interest his patients in the care of the human frame, in diet and in the cause and prevention of disease.</p>
                    {/* <a class="main_btn mr-10" href="#">get started</a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>


                


            
                <div className='flex w-full'>

                    {
                        doctorData.map((doctor) => {
                            return (
                                <div class="card">

                                    <div class="imgBox">
                                        <img src={doctor.img} alt="doctor img" class="mouse" />
                                    </div>

                                    <div class="contentBox">
                                        <h3>{doctor.name}</h3>
                                        <h2 class="price">{doctor.speciality}</h2>
                                        <p class="address" ><b>Address:</b> {doctor.city}, {doctor.town}, building: {doctor.building_number}, {doctor.street} </p>
                                        <Link href={`appoinments/${doctor.id}`}><a class="buy">book apointment</a></Link>

                                    </div>


                                </div>
                            )

                        })
                    }



                </div>
            </div>

            <Fotterr/>
        </div>
    )
}

export default Doctors

