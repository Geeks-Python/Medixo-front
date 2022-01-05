import axios from 'axios';
import React from 'react'
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import Navbar from "../../components/rihan/navbar"
import Fotterr from "../../components/rihan/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

const token = async () => {
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
        to = data.data.access
    });
    return to
}

export const getStaticPaths = async () => {

    let cred;
    await token().then(res => {
        cred = {
            headers: { "Authorization": `Bearer ${res}` }
        }
    });

    const res = await fetch("http://127.0.0.1:8000/api/v1/doctor/", cred)
    const data = await res.json()

    const paths = data.map(doctor => {
        return {

            params: { id: doctor.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let cred;
    await token().then(res => {
        cred = {
            headers: { "Authorization": `Bearer ${res}` }
        }
    });
    const res = await fetch(`http://127.0.0.1:8000/api/v1/doctor/${id}/`, cred);
    const data = await res.json();
    return {
        props: { appointment: data }
    }
}


const Detail = ({ appointment }) => {
    const [patientData, setpatientData] = useState("")
    const [accses, setAccses] = useState("")

    useEffect(async () => {

        decoder();
    }, [])

    const decoder = () => {
        const storageToken = JSON.parse(window.localStorage.getItem("token"))
        setAccses(storageToken);
        const decoded = jwtDecode(storageToken)
        setpatientData(decoded)

    }

    const appointmentSubmit = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            url: `http://127.0.0.1:8000/api/v1/doctor/appointment/`,
            headers: { "Authorization": `Bearer ${accses}` },
            data: {
                patient_id: patientData.user_id,
                patient_name: patientData.name,
                Doctor_name: appointment.name,
                hour: e.target.hour.value,
                date: e.target.date.value,
                doctor_id: appointment.user,
                clinic_location: `${appointment.city}, ${appointment.town}, ${appointment.building_number}, ${appointment.street}`
            },
        }
        axios(config)
    }
    return (
<>
<Navbar/>
        <div className='flex'>
            <div class="doctorInfo">
                <div class="cards">
                    <div class="cards__image-container">
                        <img class="cards__image img" src={appointment.img} alt="" />
                    </div>

                    <svg class="cards__svg" viewBox="0 0 800 500">

                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#57ccc3" />
                        <path class="cards__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                    </svg>

                    <div class="cards__content text-center">
                        <h1 class="cards__title">Dr. {appointment.name}</h1>
                        <h3>{appointment.speciality}</h3>
                        <h4><b className='text-white' >Address: </b>{appointment.city}, {appointment.town}, building: {appointment.building_number}, {appointment.street} </h4>
                    </div>
                </div>
            </div>

            <div class="signupSection">
                <div class="info">
                    <h2 className="m-5 ">Opening Hours</h2>
                    <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                    <p className='float-left ml-8'>Saturday-Thursday</p>
                    <p className='float-right mr-8'>09:00 to 06:00</p>

                    <h2 className=" mt-14 mb-7">Contact Informations</h2>
                    <h4><b className='text-white'>Phone: </b>{appointment.phone_number}</h4>
                    <h4><b className='text-white'>Email: </b>{appointment.email}</h4>
                </div>

                <form class="signupForm" onSubmit={appointmentSubmit}>
                    <h2>Make appointment</h2>
                    <ul class="noBullet">
                        <li>
                            <label for="username"></label>
                            <input type="date" class="inputFields" id="username" name="date" required />
                        </li>
                        <li>
                            <select id="hour" name="hour" class="inputFields" required>
                                {
                                    appointment.opening_hours.map(hour => {
                                        return <option value={hour}>{hour}:00 to {hour + 1}:00</option>
                                    })
                                }
                            </select>
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Confirm" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <Fotterr/>

        </>
    )
}

export default Detail
