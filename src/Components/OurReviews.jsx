import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const OurReviews = () => {
    const [reviews, setReviwes] = useState([])
    useEffect(() => {
        fetch('https://craft-verse-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviwes(data))
    }, [])
    return (
        <div className="mb-10 lg:mb-20">
            <div>
            <h2 className="text-[#B18B5E]  font-bold text-3xl md:text-5xl  text-center mb-10 mt-10 lg:mt-20">Our Reviews</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto gap-5 ">
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        revieww={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default OurReviews;