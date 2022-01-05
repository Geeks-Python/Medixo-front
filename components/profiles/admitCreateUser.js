import React from 'react';
import axios from 'axios';

const AdminCreateUser = () => {
    const handleCreateUser = (e) => {
        e.preventDefault();

        let configRole = [false, false];
        if (e.target.userType.value == "doctor") {
            configRole = [true, false]
        } else if (e.target.userType.value == "admin") {
            configRole = [true, true]
        };
        const storageToken = JSON.parse(window.localStorage.getItem("token"));
        const config = {
            method: "POST",
            url: "http://127.0.0.1:8000/auth/register/",
            headers: { 'Authorization': 'Bearer ' + storageToken },
            data: {
                username: e.target.userName.value,
                password: e.target.password.value,
                password2: e.target.repassword.value,
                email: e.target.mail.value,
                first_name: e.target.firstName.value,
                last_name: e.target.lastName.value,
                is_staff: configRole[0],
                is_superuser: configRole[1],
            }
        }

        axios(config)
        
    }

    return (
        <form onSubmit={handleCreateUser} autocomplete="off" class="form">
            <div class="title">Welcome</div>
            <div class="subtitle">Let's create your account!</div>

            <div class="input-container ic2">
                <select name='userType' class="input" autocomplete="none">
                    <option value="user">Choose type</option>
                    <option value="user">User</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                </select>
                <div class="cut cut-short"></div>
                <label for="userType" class="placeholder">Choose User type</label>
            </div>
            <div class="input-container ic1">
                <input name='userName' id="userName" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="userName" class="placeholder">User Name</label>
            </div>
            <div class="input-container ic1">
                <input name='firstName' id="firstname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="firstName" class="placeholder">First name</label>
            </div>
            <div class="input-container ic2">
                <input autocomplete="off" name='lastName' id="lastname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Last name</label>
            </div>
            <div class="input-container ic2">
                <input autocomplete="off" name='mail' id="lastname" class="input" type="email" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Email</label>
            </div>
            {/* <div class="input-container ic2">
                <input name='email' id="email" class="input" type="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
            </div> */}
            <div class="input-container ic2">
                <input name='password' id="password" class="input" type="password" placeholder=" " autocomplete="new-password" />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Password</label>
            </div>
            <div class="input-container ic2">
                <input name='repassword' id="email" class="input" type="password" placeholder=" " autocomplete="new-password" />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Confirm Password</label>
            </div>
            <button type="text" class="submit">submit</button>
        </form>
    )
}

export default AdminCreateUser
