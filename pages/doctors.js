import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from "next/link"


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
            <div>
                <img src='https://www.childrensmedgroup.com/cmg-media/uploads/2020/08/join-our-team-childrens-med-group.png'alt="doctorimg" class="doctorwall" />
                <div >
                    <h1 className='doctorsH1'>Meet Our Experience Doctors</h1>
                    <p className='doctorsp'> “Medicine cure diseases put only doctors can cure patients."</p>
                </div>
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
        </div>
    )
}

export default Doctors

