import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/http-error-404-found-3d-render-illustration_567294-2816.jpg?w=1060)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <Link to='/'>
                        <button className="btn bg-[#C4A880]">Return Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;