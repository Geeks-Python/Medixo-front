import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';

function Doctors() {
    const [token, setToken] = useState('');
    const [doctorData, setDoctorData] = useState([]);
    useEffect(() => {
        setToken('hi');
        const config = {
            method: "POST",
            url: "http://127.0.0.1:8000/auth/login/",
            data: {
                "username": "3",
                "password": "3"
            }

        }
        axios(config).then(data => {
            setToken(data.data.access);
            // console.log(data.data.access);
        });
        console.log(token)

        handel();
    }, []);

    const handel = () => {
        const config = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/doctor/",
            headers: { 'Authorization': 'Bearer ' + token },

        }
        axios(config).then(res => {
            setDoctorData(res.data);
            console.log(res.data);

        });
        console.log(doctorData);

    }

    return (
        <div>
            {
                doctorData.map((doctor) => {
                    return (
                        <>
                            <div class="card">
                                <div class="container">
                                    <h4><b>{doctor.name}</b></h4>
                                    <p>Adreess : {doctor.city}, {doctor.town} , {doctor.building_number} , {doctor.street}</p>
                                    <button>Book Appointment</button>
                                </div>
                            </div>


                        </>
                    )
                })
            }

            
        </div>

    )
}

export default Doctors

