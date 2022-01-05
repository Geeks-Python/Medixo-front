import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function ShowAllUsers(props) {
    const [allUsers, setAllusers] = useState([])
    useEffect(async () => {
        getUsers()
    }, [allUsers])

    const getUsers = () => {
        let config = {
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BACK_END}auth/register/`,
            headers: { 'Authorization': 'Bearer ' + props.accessToken },
        }
        axios(config).then(res => {
            setAllusers(res.data)
        })
    }
    const handleDelete = (id) => {
        const config = {
            method: "DELETE",
            url: `${process.env.NEXT_PUBLIC_BACK_END}auth/register/${id}/`,
            headers: { 'Authorization': 'Bearer ' + props.accessToken },
        };
        axios(config).then(getUsers());

    };
    return (
        <div class="appointmentsContainer py-10 ">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">User Name</div>
                    <div class="col col-2">User Email</div>
                    <div class="col col-3">User Type</div>
                </li>

                {allUsers.map(apt => {
                    return (
                        <div className=" w-full">
                            <li class="table-row w-full">
                                <div class="col col-1 w-full" data-label="username">{apt.username}</div>
                                <div class="col col-2 w-full" data-label="email Name">{apt.email}</div>
                                {apt.is_superuser && <div className="col col-3 text-red-600 w-full" data-label="Amount">Admin</div>}
                                {(!apt.is_superuser && apt.is_staff) && <div className="col col-3 w-full text-green-600" data-label="Amount">Doctor</div>}
                                {(!apt.is_superuser && !apt.is_staff) && <div className="col col-3 w-full text-blue-600" data-label="Amount">User</div>}
                            </li>
                            <div>
                                <button
                                    className="text-red-900 relative bottom-20 float-right"
                                    onClick={() => { handleDelete(apt.id) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round" strokeWidth={2}
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )
                })}

            </ul >
        </div >
    )
}

export default ShowAllUsers
