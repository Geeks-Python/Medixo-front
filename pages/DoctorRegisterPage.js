import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import DoctorClinick from './DoctorClinick'
const DoctorRegisterPage = () => {

	const [doctorData, setDoctorData] = useState("");
	const [pass, setPass] = useState("");
	const handleCreateDoctor = (e) => {
		e.preventDefault();
    setPass(e.target.password.value)
		const config = {
			method: "POST",
			url: "http://127.0.0.1:8000/auth/register/",
			data: {
				username: e.target.username.value,
				password: e.target.password.value,
				password2: e.target.rePassword.value,
				email: e.target.email.value,
				first_name: e.target.firstName.value,
				last_name: e.target.lastName.value,
				is_staff: true,
				is_superuser: false,
			},
		};

		axios(config).then((res) => {
			setDoctorData(res.data);
		});
		// console.log(doctorData.id)
		// window.location.href = "./DoctorClinick";
	};

	return (
		<>
			{doctorData == "" ?(
				<section>
					<div className="doctor-register-left" />
					<div className="doctor-register-right">
						<div className="doctor-register-form">
							<form className="mt-30 " onSubmit={handleCreateDoctor}>
								<h1 className='m-10'> Doctor Registration</h1>
								<label className="required" htmlFor="username">
									<input
										name="username"
										type="text"
										id="name"
										placeholder="username"
										required
									/>
								</label>
								<br></br>

								<label htmlFor="image">
									<input
										name="firstName"
										type="text"
										id="firstName"
										placeholder="firstName"
									/>
								</label>
								<br></br>

								<label htmlFor="image">
									<input
										name="lastName"
										type="text"
										id="lastName"
										placeholder="lastName"
									/>
								</label>

								<br></br>

								<label className="required" htmlFor="email">
									<input
										name="email"
										type="email"
										id="email"
										placeholder="Email address"
										required
									/>
								</label>
								<br></br>

								<label className="required" htmlFor="password">
									<input
										name="password"
										id="password"
										type="password"
										placeholder="Password"
										required
									/>
								</label>

								<br></br>

								<label className="required" htmlFor="password">
									<input
										name="rePassword"
										id="rePassword"
										type="password"
										placeholder="Re-Password"
										required
									/>
								</label>

								<button type="submit">Register</button>
							</form>
							{/* {userInfo.error ? (<div className="error-class"><p>{userInfo.error}</p></div>) : null} */}
							<span>
								{"Already registered? "}
								<Link href="/">Click Here</Link>
							</span>
						</div>
					</div>
				</section>
			): <DoctorClinick doctorData = {doctorData}  pass = {pass}/>}
		</>
	);
};

export default DoctorRegisterPage;
