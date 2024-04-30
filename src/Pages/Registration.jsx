import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Registration = () => {
    const [regError, setRegError] = useState('');
    const [showPassword, setShowPassword] = useState([]);
    

    const location = useLocation();
    const navigate = useNavigate();

    // setRegError('')
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleRegister = e => {
        setShowPassword('')
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const full_name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        setRegError('');
        if (password.length < 6) {
            setRegError('Your password should at lest 6')
            toast('Your password should at lest 6')
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Your password must have an uppercase')
            toast('Your password must have an uppercase')
            
        }
        else if (!/[a-z]/.test(password)) {
            setRegError('Your password must have a lowercase')
            toast('Your password must have a lowercase')
        }

        else {

            // creating a user 
            createUser(email, password)
                .then(() => {
                    updateUserProfile(full_name, photo).then(() => {
                        navigate(location?.state ? location.state : '/');
                    })
                    Swal.fire("Register Success !!")

                })
                .catch(error => {
                    console.error(error)
                })
        }


    }
    return (

        <div className="hero min-h-screen" >
            <Helmet>
                <title>
                    Craft Verse-Register
                </title>
            </Helmet>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col ">
                        <h2 className="font-bold text-4xl">Register here!!!</h2>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label" >
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="input input-bordered text-black" required />
                                    <label className="label" >
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                                    <label className="label" >
                                        <span className="label-text">Your Photo</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Your Photo URL" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="flex items-center">
                                        <input type={showPassword ? 'password' : 'text'} name="password" placeholder="password" className="input input-bordered text-black w-full" required />
                                        {
                                            showPassword ?
                                                <IoEyeOffSharp onClick={() => { setShowPassword(!showPassword) }} className="-ml-7"></IoEyeOffSharp> :
                                                <FaEye onClick={() => { setShowPassword(!showPassword) }} className="-ml-7"></FaEye>
                                        }
                                    </div>

                                    <label className="label">
                                        <p className="text-black">Already have a account?<Link to='/login' className="text-blue-800 font-semibold">Log in here</Link></p>
                                    </label>
                                    <div><p className="text-red-500">{regError}</p></div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Registration;