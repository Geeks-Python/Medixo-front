import axios from 'axios';
import React from 'react'
import { useState, useEffect, setState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AdminCreateUser from './admitCreateUser';
import ShowAllUsers from './showAllUsers';
import AllClinics from './allClinics';

const AdminProfile = (props) => {
    const [createProfile, setCreateProfile] = useState(false);
    const [showAllUsers, setShowAllUsers] = useState(false);
    const [showAllClinics, setShowAllClinics] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const createProfileHandler = () => {
        setCreateProfile(true);
        setShowAllUsers(false);
        setShowAllClinics(false);
    };
    const showAllUsersHandler = () => {
        setCreateProfile(false);
        setShowAllUsers(true);
        setShowAllClinics(false);
    };
    const showAllClinicsHandler = () => {
        setCreateProfile(false);
        setShowAllUsers(false);
        setShowAllClinics(true);
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
                                            <h3 className="text-gray-400 mt-7 font-semibold">{props.profileData.name}</h3>
                                            <h6 className="text-gray-700 my-9  ">{props.profileData.email}</h6>
                                            <h6 className='text-4xl font-bold text-pink-900'>Admin</h6>
                                            <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble"></i></a>
                                            <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                                            <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile-tabs">
                                        <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                            <li class="nav-item">
                                                <button onClick={createProfileHandler}>
                                                    <a class={createProfile ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">person</i>
                                                        Create new profile
                                                    </a>
                                                </button>
                                            </li>
                                            <li class="nav-item">
                                                <button onClick={showAllUsersHandler}>
                                                    <a class={showAllUsers ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">list</i>
                                                        All Users
                                                    </a>
                                                </button>
                                            </li>
                                            <li class="nav-item">
                                                <button onClick={showAllClinicsHandler}>
                                                    <a class={showAllClinics ? "nav-link active" : "nav-link"} role="tab" data-toggle="tab">
                                                        <i class="material-icons">local_pharmacy</i>
                                                        All Clinics
                                                    </a>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {createProfile && <AdminCreateUser />}
                            {showAllUsers && <ShowAllUsers accessToken={props.accessToken} />}
                            {showAllClinics && <AllClinics accessToken={props.accessToken} allClinics={props.allClinics} />}
                        </div>
                    </div>
                </div>




            </body>
        </>
    )
}

export default AdminProfile
