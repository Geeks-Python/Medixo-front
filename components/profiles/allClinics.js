import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const AllClinics = (props) => {

    const [allClinics, setAllClinics] = useState([]);

    useEffect(() => {

        getData();

    }, [allClinics]);

    const getData = () => {
        const getConfig = {
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BACK_END}api/v1/doctor/`,
            headers: { 'Authorization': 'Bearer ' + props.accessToken },
        };
        axios(getConfig).then(res => {
            setAllClinics(res.data)
        });
    };

    const handleDelete = async (id) => {
        const config = {
            method: "DELETE",
            url: `process.env.NEXT_PUBLIC_BACK_ENDapi/v1/doctor/${id}/`,
            headers: { 'Authorization': 'Bearer ' + props.accessToken },
        };
        await axios(config).then(getData());

    };
    return (
        <div className="w-full">
            <div class="appointmentsContainer py-10 w-full">
                <ul class="responsive-table w-full">
                    <li class="table-header">
                        <div class="col col-1">Clinic ID</div>
                        <div class="col col-2">Clinic Name</div>
                        <div class="col col-3">Clinic Phone Number</div>
                        <div class="col col-4">Clinic Email</div>
                        <div class="col col-4">Speciality</div>

                    </li>

                    {allClinics.map(clnc => {
                        return (<div className=" w-full">
                            <li class="table-row  w-full">
                                <div class="col col-1">{clnc.id}</div>
                                <div class="col col-2">{clnc.name}</div>
                                <div className="col col-3 ">{clnc.phone_number}</div>
                                <div className="col col-4 ">{clnc.email}</div>
                                <div className="col col-4 ">{clnc.speciality}</div>
                            </li>

                            <div>
                                <button className="text-red-900 relative bottom-20 float-right" onClick={() => { handleDelete(clnc.id) }}><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />  </svg>
                                </button>
                            </div>
                        </div>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default AllClinics
