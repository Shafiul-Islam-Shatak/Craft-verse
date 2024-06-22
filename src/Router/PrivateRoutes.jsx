import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { ClimbingBoxLoader } from "react-spinners";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16">
                <ClimbingBoxLoader color="#36d7b7" />
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.object.isRequired
}


export default PrivateRoutes;