import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;