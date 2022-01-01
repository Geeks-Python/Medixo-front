import axios from 'axios'
import React from 'react'

function Doctors() {
    const config ={
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/doctor/",
    }
    axios(config).then(res => {
        console.log(res.data);
    })
    return (
        <div>
            
        </div>
    )
}

export default Doctors
