import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from "next/link"
import Navbar from "../components/rihan/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Fotterr from "../components/rihan/footer"
import {useRouter} from 'next/router';



function Doctors() {
    const [doctorData, setDoctorData] = useState([]);
    const router = useRouter()

    useEffect(() => {
        const storageToken = JSON.parse(window.localStorage.getItem("token"))
        handel(storageToken)

    }, []);

    const handel = async (token) => {
        const config = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/doctor/",
            headers: { 'Authorization': 'Bearer ' + token },

        }
        await axios(config).then(res => {
            setDoctorData(res.data);
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
                            console.log(doctor.name);
                            return (

                               
                                <div class="card">
 <div>

           <p>{doctor.name}</p>                         
</div>
                                    <div class="imgBox">
                                        <img src={doctor.img} alt="doctor img" class="mouse" />
                                    </div>

                                    <div class="contentBox">
                                        <h3>{doctor.name}</h3>
                                        <h2 class="price">{doctor.speciality}</h2>
                                        <p class="address" ><b>Address:</b> {doctor.city}, {doctor.town}, building: {doctor.building_number}, {doctor.street} </p>

                                       
//  <Link href={`appoinments/${doctor.id}`}><a class="buy">book apointment</a></Link>
                                        
                                        <button onClick={()=>{router.push({pathname: `/details`,query: {q:doctor.id}})}}><a class="buy">book apointment</a></button>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <Fotterr />
        </div>
    )
}

export default Doctors

