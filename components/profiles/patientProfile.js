import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';

const PatientProfile = (props) => {
    const [appointments, setShowAppointments] = useState(false);
    const [myData, setShowMyData] = useState([]);
    const [token, setToken] = useState(false);
    const [myAppointments, setMyAppointments] = useState([]);

    useEffect(() => {
        getDataHandler()
    }, [])
    const getDataHandler = async () => {
        const storageToken = JSON.parse(window.localStorage.getItem("token"))
        setToken(storageToken)
        const decoded = jwtDecode(storageToken)
        setShowMyData(decoded);
    }

    const getAppointmentData = async () => {

        const config = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/doctor/appointment/",
            headers: { 'Authorization': 'Bearer ' + token },
        };
        await axios(config).then(res => {
            const finalData = res.data.filter(data => data.patient_id == myData.user_id);
            setMyAppointments(finalData);
        });
    }

    const ShowAppointmentsHandler = () => {
        setShowAppointments(true);
    }

    return (
        <>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />
                <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
                <link rel="stylesgeet" href="https://rawgit.com/creativetimofficial/material-kit/master/assets/css/material-kit.css" />
            </head>

            <body class="profile-page">


                <div class="page-header header-filter" data-parallax="true" ></div>
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="container pb-20">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile">
                                        <div class="avatar">
                                            <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                                        </div>
                                        <div class="name">
                                            <h3 className="text-gray-400 mt-7 font-semibold">{props.profileData.name}</h3>
                                            <h6 className=" my-9 ">{props.profileData.email}</h6>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="description text-center">
                            </div>
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile-tabs">
                                        <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                            <li class="nav-item">
                                                <button className='pb-10' onClick={() => { ShowAppointmentsHandler(); getAppointmentData() }}>
                                                    <a class={appointments ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">assignment</i>
                                                        Appointments
                                                    </a>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {appointments &&

                                <div class="appointmentsContainer py-10 ">
                                    <ul class="responsive-table">
                                        <li class="table-header">
                                            <div class="col col-1">Doctor Name</div>
                                            <div class="col col-2">Date</div>
                                            <div class="col col-3">Time</div>
                                            <div class="col col-4">Location</div>
                                        </li>

                                        {myAppointments.map(apt => {
                                            console.log(myAppointments);
                                            return (
                                                <li class="table-row">
                                                    <div class="col col-1" data-label="Job Id">{apt.Doctor_name}</div>
                                                    <div class="col col-2" data-label="Customer Name">{apt.patient_name}</div>
                                                    <div class="col col-3" data-label="Amount">{apt.hour}:00 to {parseInt(apt.hour) + 1}:00</div>
                                                    <div class="col col-4" data-label="Payment Status">{apt.clinic_location}</div>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>




            </body>
        </>
    )
}

export default PatientProfile
