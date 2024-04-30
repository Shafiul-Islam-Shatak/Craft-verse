import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { Link } from 'react-router-dom';



const CraftCard = ({ art }) => {
    const { _id, item_name, sub_catagory, image, price, rating, time, customaization, stock } = art;


    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5" data-aos="flip-left">
            <figure className="px-5 pt-5">
                <div className='w-72 h-72 lg:h-80 lg:w-80'>
                    <img src={image} alt={item_name} className="rounded-xl mx-auto max-w-72 max-h-72" />

                </div>
            </figure>
            <div className="px-5 pt-3 pb-3">
                <h2 className="card-title mb-2">{item_name}</h2>
                <button className="btn btn-outline btn-success mb-2 rounded-3xl">Catagory : {sub_catagory}</button>
                <div className='flex items-center space-x-10 mb-2'>
                    <div className='flex items-center'>
                        <BsCurrencyDollar></BsCurrencyDollar>
                        <h2>{price}</h2>
                    </div>
                    <div className='flex items-center'>
                        <MdOutlineStarOutline></MdOutlineStarOutline>
                        <h2>{rating}</h2>
                    </div>
                </div>
                <div className='flex items-center space-x-10 mb-2'>
                    <div className='flex items-center'>
                        <MdAccessTime></MdAccessTime>
                        <h2>{time}</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2>Availability :</h2>
                        <h2>- {stock}</h2>
                    </div>
                </div>
                <div className='flex items-center space-x-10 mb-2'>
                    <div className='flex items-center'>
                        <h2>Customization :</h2>
                        <h2>- {customaization}</h2>
                    </div>
                </div>
                <div className="card-actions ">
                    <Link to={`/craft-details/${_id}`} className='w-full'>
                        <button className="btn w-full  bg-[#C4A880] bg-opacity-60">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
CraftCard.propTypes = {
    art: PropTypes.object
}

export default CraftCard;