import PropTypes from 'prop-types';

const SingleReview = ({revieww}) => {
    const {name, rating, review}= revieww;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
                <div className="card-actions">
                    <button className="btn bg-[#C4A880] ">Rating : {rating}</button>
                </div>
            </div>
        </div>
    );
};

SingleReview.propTypes = {
    revieww: PropTypes.object
}

export default SingleReview;