import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Review = () => {
    const { user } = useContext(AuthContext)


    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const userReview = {name , rating, review};
        console.log(userReview);
        // post data to backend
        fetch('https://craft-verse-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Thanks , Review Added",
                        icon: "success"
                    });
                    form.reset();
                }
            })

    }
    return (
        <div className="mx-auto mb-10 mt-10 lg:mt-20">
            <div>
                <div >
                    <div >
                        <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-5 mt-10">Please gives a Review and Rating</h2>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                            <form className="card-body" onSubmit={handleAddReview}>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="userName" placeholder="" defaultValue={user?.displayName} required className="input input-bordered w-full " />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Ratting</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="rating" placeholder="rate us" className="input input-bordered w-full " />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="review" placeholder="Write a Review" className="textarea textarea-bordered textarea-lg w-full" />
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#C4A880] dark:text-[#E1CFA6]">Post</button>
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