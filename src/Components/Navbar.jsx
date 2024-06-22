import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import 'animate.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Log Out successful!");
            })
            .catch();
    }

    const navlinks = <>
        <li><Link to='/' className="dark:text-white">Home</Link></li>
        <li><Link to='/all-art' className="dark:text-white">All Art</Link></li>
        <li><Link to='/add-craft' className="dark:text-white">Add Art & Craft</Link></li>
        <li><Link to='/my-art' className="dark:text-white">My Art & Craft</Link></li>
        <li><Link to='/reg' className="dark:text-white">Registration</Link></li>
    </>;

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="navbar bg-[#C4A880] bg-opacity-20 dark:bg-gray-800 animate__animated animate__fadeInDown">
            <Tooltip id="profile"></Tooltip>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 dark:bg-gray-900 rounded-box w-52">
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
                <label className="flex cursor-pointer gap-2 mr-5" onClick={toggleTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" value={theme} checked={theme === 'dark'} className="toggle theme-controller" readOnly />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {user && (
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" ">
                            <img className="rounded-full max-w-10 tooltip tooltip-left" data-tooltip-id='profile' data-tooltip-content={user?.displayName} src={user ? user.photoURL : ''} alt="" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 dark:bg-gray-900 rounded-box w-52 absolute -translate-x-40">
                            <li><h1 onClick={handleLogOut} className="font-bold dark:text-white">Log Out</h1></li>
                        </ul>
                    </div>
                )}
                {!user && (
                    <Link to='/login'>
                        <h1 className="btn font-bold dark:text-white">Log in</h1>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
