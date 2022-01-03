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
    const [allData,setAllData]=useState([]);

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
        setAllData(props.doctorData)
        setShowSchedule(false);
        setShowMyClinic(true);
    };

    const updateHandeler = async (e) => {
        e.preventDefault();
        console.log(props.accessToken);

        const configPut = {
            method: "PUT",
            url: `http://127.0.0.1:8000/api/v1/doctor/${props.doctorData[0].id}/`,
            headers: { 'Authorization': 'Bearer ' + props.accessToken },
            data: {
                id: props.doctorData[0].id,
                name: props.doctorData[0].name,
                speciality: props.doctorData[0].speciality,
                email: e.target.email.value,
                phone_number: e.target.phone_number.value,
                city: e.target.city.value,
                town: e.target.town.value,
                building_number: e.target.building_number.value,
                street: e.target.street.value,
                img: e.target.img.value,
                opening_hours: props.doctorData[0].opening_hours,
                user: props.doctorData[0].user,
                
            }
        };
        await axios(configPut).then(res=>{
            console.log(res.data);
        });
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
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto">
                                    <div class="profile">
                                        <div class="avatar">
                                            <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                                        </div>
                                        <div class="name">
                                            <h3 class="title">Christian Louboutin</h3>
                                            <h6>Designer</h6>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="description text-center">
                                <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
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
                                <div class="artboard">
                                    <div class="clinicCard">

                                        <div class="clinicCard__side clinicCard__side--back">
                                            <div class="clinicCard__cover">
                                                <h4 class="clinicCard__heading">
                                                    {/* <span class="clinicCard__heading-span">Skill Set</span> */}
                                                </h4>
                                            </div>
                                            <div class="clinicCard__details">
                                                <ul>
                                                    {/* <li></li> */}
                                                    {props.doctorData.map(address => {
                                                        return (
                                                            <li>DR. {address.name} Clinic <br /> {address.street} . Apartment  {address.building_number} <br /> {address.city} , {address.town}  </li>

                                                        )
                                                    })}

                                                </ul>

                                                <button onClick={()=>{setShowModal(true)}}>Edit</button>
                                                <div>
                                                    <Modal show={showModal} onHide={()=>{setShowModal(false)}}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Your Information</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Form  onSubmit={(e)=>{updateHandeler(e)}}>
                                                                
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>YOUR Email</Form.Label>
                                                                    <Form.Control type="text" name="email"  placeholder="your Email" defaultValue={props.doctorData[0].email} />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>Clinic Phone Number</Form.Label>
                                                                    <Form.Control type="text" name="phone_number" placeholder="your Clinic Phone Number" defaultValue={props.doctorData[0].phone_number} />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>City Name</Form.Label>
                                                                    <Form.Control type="text" name="city" placeholder="your City Name" defaultValue={props.doctorData[0].city} />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>Town name</Form.Label>
                                                                    <Form.Control type="text" name="town" placeholder="your Town Name" defaultValue={props.doctorData[0].town} />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>Street Name</Form.Label>
                                                                    <Form.Control type="text" name="street" placeholder="your Street Name" defaultValue={props.doctorData[0].street} />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>Building Number</Form.Label>
                                                                    <Form.Control type="text" name="building_number" placeholder="your Building Number" defaultValue={props.doctorData[0].building_number} />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>Image</Form.Label>
                                                                    <Form.Control type="text" name="img" placeholder="your Image" defaultValue={props.doctorData[0].img} />
                                                                </Form.Group>
                                                                <Button variant="primary" type="submit">
                                                                    Submit
                                                                </Button>
                                                            </Form>
                                                        </Modal.Body>
                                                    </Modal>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="clinicCard__side clinicCard__side--front">
                                            <div class="clinicCard__theme">
                                                <div class="clinicCard__theme-box">
                                                    {/* <p class="clinicCard__subject">Web Developer</p> */}
                                                    <p class="clinicCard__title">Clinic Address</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                            {showSchedule &&

                                <div class="appointmentsContainer py-10 ">
                                    {/* <h2 className='appointmentsH2'>Responsive Tables Using LI <small>Triggers on 767px</small></h2> */}
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
                            {/* // <div class="tab-content tab-space">
                                //     <div class="tab-pane active text-center gallery" id="studio">
                                //         <div class="row">
                                //             <div class="col-md-3 ml-auto">
                                //                 <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80" class="rounded" />
                                //             </div>
                                //             <div class="col-md-3 mr-auto">
                                //                 <img src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded" />
                                //             </div>
                                //         </div>
                                //     </div>
                                //     <div class="tab-pane text-center gallery" id="works">
                                //         <div class="row">
                                //             <div class="col-md-3 ml-auto">
                                //                 <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80" class="rounded" />  					</div>
                                //             <div class="col-md-3 mr-auto">
                                //                 <img src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80" class="rounded" />
                                //             </div>
                                //         </div>
                                //     </div>
                                //     <div class="tab-pane text-center gallery" id="favorite">
                                //         <div class="row">
                                //             <div class="col-md-3 ml-auto">
                                //                 <img src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80" class="rounded" />
                                //             </div>
                                //             <div class="col-md-3 mr-auto">
                                //                 <img src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded" />
                                //                 <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded" />
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                             */}


                        </div>
                    </div>
                </div>




            </body>
        </>
    )
}

export default DoctorProfile
