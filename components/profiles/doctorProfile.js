import axios from 'axios';
import React from 'react'
import { useState, useEffect, setState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DoctorProfile = (props) => {
    const [showInfo, setShowInfo] = useState(true);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showMyClinic, setShowMyClinic] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const showInfoHandler = () => {
        setShowInfo(true);
        setShowSchedule(false);
        setShowMyClinic(false);
    };
    const showScheduleHandler = () => {
        setShowInfo(false);
        setShowSchedule(true);
        setShowMyClinic(false);
    };
    const showMyClinicHandler = () => {
        setShowInfo(false);
        setShowSchedule(false);
        setShowMyClinic(true);
    };

    const updateHandeler = async (e) => {
        e.preventDefault();

        const configPut = {
            method: "PUT",
            url: `http://127.0.0.1:8000/api/v1/doctor/${props.profileData[0].id}/`,
            headers: { 'Authorization': 'Bearer ' + props.accessToken },
            data: {
                id: props.profileData[0].id,
                name: props.profileData[0].name,
                speciality: props.profileData[0].speciality,
                email: e.target.email.value,
                phone_number: e.target.phone_number.value,
                city: e.target.city.value,
                town: e.target.town.value,
                building_number: e.target.building_number.value,
                street: e.target.street.value,
                img: e.target.img.value,
                opening_hours: props.profileData[0].opening_hours,
                user: props.profileData[0].user,

            }
        };
        await axios(configPut)
    };
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
                        <div class="container pb-28">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile">
                                        <div class="avatar">
                                            <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                                        </div>
                                        <div class="name">
                                            <h3 class="text-gray-400 mt-7 font-semibold">{props.decodedData.name}</h3>
                                            <h6>{props.decodedData.email}</h6>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile-tabs">
                                        <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                            <li class="nav-item">
                                                <button onClick={showInfoHandler}>
                                                    <a class={showInfo ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">person</i>
                                                        My Profile
                                                    </a>
                                                </button>
                                            </li>
                                            <li class="nav-item">
                                                <button onClick={showScheduleHandler}>
                                                    <a class={showSchedule ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">assignment</i>
                                                        Schedule
                                                    </a>
                                                </button>
                                            </li>
                                            <li class="nav-item">
                                                <button onClick={showMyClinicHandler}>
                                                    <a class={showMyClinic ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">local_pharmacy</i>
                                                        my Clinic
                                                    </a>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {showMyClinic &&
                                <div >
                                    <div className='w-2/4 shadow-2xl text-center shadow-slate-500 rounded-xl clinicInfo '>
                                        <img src={props.profileData[0].img} />
                                        <p><b>Name: </b>{props.profileData[0].name}</p>
                                        <p><b>Email: </b>{props.profileData[0].email}</p>
                                        <p><b>Phone NO.: </b>{props.profileData[0].phone_number}</p>
                                        <p><b>Adress: </b>{props.profileData[0].city}, {props.profileData[0].town}, St. {props.profileData[0].street}, Building: {props.profileData[0].building_number}</p>
                                    <button onClick={() => { setShowModal(true) }}>Edit</button>
                                    </div>
                                    <Modal show={showModal} onHide={() => { setShowModal(false) }}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Your Information</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form onSubmit={(e) => { updateHandeler(e) }}>

                                                <Form.Group className="mb-3">
                                                    <Form.Label>YOUR Email</Form.Label>
                                                    <Form.Control type="text" name="email" placeholder="your Email" defaultValue={props.profileData[0].email} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Clinic Phone Number</Form.Label>
                                                    <Form.Control type="text" name="phone_number" placeholder="your Clinic Phone Number" defaultValue={props.profileData[0].phone_number} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>City Name</Form.Label>
                                                    <Form.Control type="text" name="city" placeholder="your City Name" defaultValue={props.profileData[0].city} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Town name</Form.Label>
                                                    <Form.Control type="text" name="town" placeholder="your Town Name" defaultValue={props.profileData[0].town} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Street Name</Form.Label>
                                                    <Form.Control type="text" name="street" placeholder="your Street Name" defaultValue={props.profileData[0].street} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Building Number</Form.Label>
                                                    <Form.Control type="text" name="building_number" placeholder="your Building Number" defaultValue={props.profileData[0].building_number} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Image</Form.Label>
                                                    <Form.Control type="text" name="img" placeholder="your Image" defaultValue={props.profileData[0].img} />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                </div>
                            }
                            {showSchedule &&

                                <div class="appointmentsContainer py-10 ">
                                    <ul class="responsive-table">
                                        <li class="table-header">
                                            <div class="col col-1">Apointment No.</div>
                                            <div class="col col-2">Patient Name</div>
                                            <div class="col col-3">Date</div>
                                            <div class="col col-4">Time</div>
                                        </li>

                                        {props.appointmentData.map(apt => {
                                            return (
                                                <li class="table-row">
                                                    <div class="col col-1" data-label="Job Id">{apt.id}</div>
                                                    <div class="col col-2" data-label="Customer Name">{apt.patient_name}</div>
                                                    <div class="col col-3" data-label="Amount">{apt.date}</div>
                                                    <div class="col col-4" data-label="Payment Status">{apt.hour}:00 to {parseInt(apt.hour) + 1}:00</div>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            }
                            {showInfo && <div>vds</div>}
                        </div>
                    </div>
                </div>




            </body>
        </>
    )
}

export default DoctorProfile
