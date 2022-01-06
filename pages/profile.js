import React from 'react'
import DoctorProfile from '../components/profiles/doctorProfile'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import PatientProfile from '../components/profiles/patientProfile';
import AdminProfile from '../components/profiles/adminProfile';
import Navbar from '../components/rihan/navbar';



const Profile = () => {
    const [appointmentData, setAppointmentData] = useState([]);
    const [profileData, setProfileData] = useState([]);
    const [allClinics, setAllClinics] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const [decodedData, setDecodedData] = useState('')
    useEffect(async () => {
        const storageToken = JSON.parse(window.localStorage.getItem("token"))

        const decoded = jwtDecode(storageToken)
        setDecodedData(decoded)
        setAccessToken(storageToken)
        const config = {
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BACK_END}api/v1/doctor/appointment/`,
            headers: { 'Authorization': 'Bearer ' + storageToken },
        };

        await axios(config).then(res => {
            const finalData = res.data.filter(data => data.doctor_id == decoded.user_id);
            setAppointmentData(finalData);
        });

        const configAddress = {
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BACK_END}api/v1/doctor/`,
            headers: { 'Authorization': 'Bearer ' + storageToken },
        };
        let finalData;
        await axios(configAddress).then(res => {
            finalData = res.data.filter(data => data.user == decoded.user_id);
            setProfileData(finalData);
            setAllClinics(res.data)
        });

    }, []);
    return (
        <>
            <Navbar />
            {decodedData.is_admin &&
                <AdminProfile
                    allClinics={allClinics}
                    appointmentData={appointmentData}
                    profileData={decodedData}
                    accessToken={accessToken}
                />

            }
            {(!decodedData.is_admin && decodedData.is_doctor) &&
                <DoctorProfile
                    appointmentData={appointmentData}
                    profileData={profileData}
                    accessToken={accessToken}
                    decodedData={decodedData}
                />

            }
            {(!decodedData.is_admin && !decodedData.is_doctor) &&
                <PatientProfile
                    profileData={decodedData}
                />
            }
        </>
    )
}

export default Profile
