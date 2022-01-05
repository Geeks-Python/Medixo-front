
import axios from 'axios'
import React from 'react'

const Register = () => {
    const handleCreateUser = (e) => { 
        e.preventDefault();

        const config = {
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_BACK_END}auth/register/`,
            data: {
                username: e.target.username.value,
                password: e.target.password.value,
                password2: e.target.rePassword.value,
                email: e.target.email.value,
                first_name: e.target.firstName.value,
                last_name: e.target.lastName.value,
                is_staff: false,
                is_superuser: false,
            }
        }

        axios(config)
    }
    return (
        <div>
            <form onSubmit={handleCreateUser} className='flex flex-col items-center justify-center min-h-screen py-2 bg-slate-600 p-7'>
                <div className="user-box">
                    <input type="text" name="username" required />
                    <label>username</label>
                </div>
                <div className="user-box">
                    <input type="text" name="password" required />
                    <label>password</label>
                </div>
                <div className="user-box">
                    <input type="text" name="rePassword" required />
                    <label>confirm password</label>
                </div>
                <div className="user-box">
                    <input type="text" name="firstName" required />
                    <label>First Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="lastName" required />
                    <label>Last Nama</label>
                </div>
                <div className="user-box">
                    <input type="email" name="email" required />
                    <label>Email</label>
                </div>
                <input type="submit" placeholder='register' />


            </form>
        </div>
    )
}

export default Register
