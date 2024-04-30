import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Review = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="mx-auto">
            <div>
                <div >
                    <div >
                        <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-5 mt-10">Please gives a Review and Rating</h2>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                            <form className="card-body">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="userName" placeholder="" defaultValue={user.displayName} required className="input input-bordered w-full " />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Ratting</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="price" placeholder="rate us" className="input input-bordered w-full " />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="price" placeholder="Write a Review" className="textarea textarea-bordered textarea-lg w-full" />
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;