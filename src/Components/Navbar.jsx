import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import 'animate.css';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const {user} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Log Out succesfull !");
            })
            .catch()
    }

    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-art'>All Art</Link></li>
        <li><Link to='/add-craft'>Add Craft</Link></li>
        <li><Link to='/reg'>Registration</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 animate__animated animate__fadeInDown ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img className="w-24" src="https://i.ibb.co/nmdHbLt/Aesthetic-and-Elegant-Creative-Craft-Design-Studio-Logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className=" ">
                            <img className="rounded-full max-w-10 tooltip tooltip-left" data-tip='your profile' src={user ? user.photoURL : ''} alt="" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 absolute -translate-x-40 ">
                            <li><Link to='/profile'>{user.displayName }</Link></li>
                            <li><Link to='/update-profile'>Update Profile</Link></li>
                            <li><h1 onClick={handleLogOut} className="font-bold">Log Out</h1></li>
                        </ul>
                    </div>


                }
                {
                    user ? '' :
                        <Link to='/login'>
                            <h1 className="btn font-bold">Log in</h1>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;