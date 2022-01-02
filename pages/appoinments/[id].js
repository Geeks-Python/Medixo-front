import axios from 'axios';
import React from 'react'

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

    const credintials = {
        headers: { "Authorization": `Bearer ${to}` }
    }
    return credintials
}


export const getStaticPaths = async () => {

    let cred;
    await token().then(res => {
        cred = res
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
    let cred
    await token().then(res => {
        cred = res
    });
    const res = await fetch(`http://127.0.0.1:8000/api/v1/doctor/${id}/`, cred);
    const data = await res.json();
    return {
        props: { appointment: data }
    }
}

const Detail = ({ appointment }) => {
    return (

        <div className='flex'>
            <div className='doctorInfo'>
                <img src={appointment.img} />
                <h2>{appointment.name}</h2>
                <h3>{appointment.speciality}</h3>
                <h4>{appointment.phone_number}</h4>
                <h4>{appointment.email}</h4>
                <h4><b>Address: </b> {appointment.city}, {appointment.town}, building: {appointment.building_number}, {appointment.street} </h4>
            </div>

            <div class="appointmentForm">
                <form>

                    <div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label" for="date">Date</label>
                                <input id="date" name="date" type="date" class="form-control input-md" />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label" for="time">Preferred Time</label>
                                <select id="time" name="time" class="form-control">
                                    {
                                        appointment.opening_hours.map(hour => {
                                            return <option value={hour}>{hour}:00 to {hour + 1}:00</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <button id="singlebutton" name="singlebutton" class="btn btn-default">Make An Appointment</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Detail
