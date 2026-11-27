import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";



let data = { "username": "nithu", "pswd": "1234" }


const Login = () => {

    const [userData, setUserData] = useState({ username: "", pswd: "", email: "", agree: false });
    const [preview, setPreview] = useState(null)
    const [message, setMessage] = useState("")
    const navigate = useNavigate();


    const handleImage = (event) =>{
        let {files} = event.target
        if(files[0]){
            setPreview(URL.createObjectURL(files[0]))
        }
    }

    const authentication = (data, currentData) => {
        if (data.username == currentData.username && data.pswd == currentData.pswd) {
            return true
        }
        else {
            return false
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (userData.username === "" || userData.pswd === "") {
            setMessage("Please must Fill the Data")
        } else {
            let result = authentication(data, userData);
            if (result) {
                // window.location.href = "/home";
                navigate("/home");
            } else {
                setMessage("Invalid Details");
            }
        }

    }
    const onChange_ = (event) => {
        if (event.target.type === "checkbox") {
            setUserData({ ...userData, "agree": event.target.checked })
        } else {
            setUserData((prev) => {
                return { ...prev, [event.target.name]: event.target.value }
            })
        }
    }

    return (
        <>
            <div id="Form">
                <h1 className='bg-info p-3 ' style={{ position: 'relative', height: '120px' }}>Registration Form
                    {preview && <img
                        src={preview}
                        id="img"
                        className="rounded rounded-3"
                        style={{ width: '100px', height: '100%', position: 'absolute', top: '0px', right: '0px' }}
                    />}</h1>
                <form action="" onSubmit={onSubmitHandler} >
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            name="username"
                            value={userData.username}
                            onChange={onChange_}

                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={userData.email}
                            onChange={onChange_}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                            value={userData.pswd}
                            onChange={onChange_}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Upload Image:</label>
                        <input
                            type="file"
                            accept='image/*'
                            className="form-control"
                            onChange={handleImage}                            
                        />
                    </div>

                    <div className="checkbox">
                        <label className='mb-2'>
                            <input type="checkbox"
                                className='mx-2'
                                name="agree"
                                checked={userData.agree}
                                onChange={onChange_}
                            />
                            Remember me
                            {userData.agree ?
                                <span className='mx-3 btn btn-success'>Agreed</span> : <span className='mx-3 btn btn-danger'>
                                    Not Agreed</span>}
                        </label>
                    </div>





                    <button type="submit" className="btn btn-primary">Submit</button>
                    {message && <div className="alert alert-danger alert-dismissible">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                        ></button>
                        <strong>Error !</strong> {message}
                    </div>}
                </form>
            </div>
        </>
    )
}

export default Login;