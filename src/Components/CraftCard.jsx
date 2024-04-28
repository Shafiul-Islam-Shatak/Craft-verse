import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";



const CraftCard = ({ art }) => {
    // const crafts = useLoaderData();
    const { item_name, sub_catagory, image, price, rating, time, customaization, stock, userName, userEmail, description } = art;


    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <figure className="px-5 pt-5">
                <div className='w-72 h-72 lg:h-80 lg:w-80'>
                    <img src={image} alt={item_name} className="rounded-xl mx-auto max-w-72 max-h-72" />

                </div>
            </figure>
            <div className="px-5 pt-3 pb-3">
                <h2 className="card-title">{item_name}</h2>
                <h2>Catagory : {sub_catagory}</h2>
                <div className='flex items-center space-x-10'>
                    <div className='flex items-center'>
                        <BsCurrencyDollar></BsCurrencyDollar>
                        <h2>{price}</h2>
                    </div>
                    <div className='flex items-center'>
                        <MdOutlineStarOutline></MdOutlineStarOutline>
                        <h2>{rating}</h2>
                    </div>
                </div>
                <div className='flex items-center space-x-10'>
                    <div className='flex items-center'>
                        <MdAccessTime></MdAccessTime>
                        <h2>{time}</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2>Availability :</h2>
                        <h2>- {stock}</h2>
                    </div>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-block bg-[#C4A880]">View Details</button>
                </div>
            </div>
        </div>
    );
};
CraftCard.propTypes = {
    art: PropTypes.object
}

export default CraftCard;