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

const Detail = (props) => {
    return (
        <div>
            Hello {props.appointment.name}
        </div>
    )
}

export default Detail
