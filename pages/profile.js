import React from 'react'
import DoctorProfile from '../components/profiles/doctorProfile'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


const Profile = () => {
    const [appointmentData, setAppointmentData] = useState([]);
    const [doctorData, setDoctorData] = useState([]);
    const [accessToken,setAccessToken]=useState('');
    useEffect(async () => {
        const configToken = {
            method: "POST",
            url: "http://127.0.0.1:8000/auth/login/",
            data: {
                "username": "3",
                "password": "3"
            }
        };
        let token
        await axios(configToken).then(data => {
            token = data.data.access;
            setAccessToken(token);
        });

        const decoded = jwtDecode(token)

        const config = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/doctor/appointment/",
            headers: { 'Authorization': 'Bearer ' + token },
        };

        await axios(config).then(res => {
            const finalData = res.data.filter(data => data.doctor_id == decoded.user_id);
            setAppointmentData(finalData);
        });

        const configAddress = {
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/doctor/",
            headers: { 'Authorization': 'Bearer ' + token },
        };
        let finalData;
        await axios(configAddress).then(res => {
            finalData = res.data.filter(data => data.user == decoded.user_id);
            setDoctorData(finalData);
            // console.log(res.data);
        });
        
    }, []);

    return (
        <div>
            <DoctorProfile appointmentData={appointmentData} doctorData={doctorData} accessToken={accessToken} />
        </div>
    )
}

export default Profile
