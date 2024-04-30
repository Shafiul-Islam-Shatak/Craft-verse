import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const MyArtCard = ({ userArt , userArts ,setUserArts}) => {
    const { _id, item_name, sub_catagory, image, price, rating, time, customaization, stock } = userArt;
    
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://craft-verse-server.vercel.app/craft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            console.log(userArts);
                            const remain = userArts.filter(art => art._id !== _id)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            setUserArts(remain)

                        }
                    })
            }
        });

    }



    return (

        <div className="card w-96 bg-base-100 shadow-xl mb-5 " data-aos="flip-left">
            <Tooltip id="delete"></Tooltip>
            <Tooltip id="edit"></Tooltip>
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
                <div className='flex justify-between mb-1'>
                    <Link to={`/update-craft/${_id}`}>
                        <BiSolidMessageSquareEdit className='w-12 h-12 tooltip tooltip-left' data-tooltip-id='edit' data-tooltip-content='Upadte Craft'></BiSolidMessageSquareEdit>
                    </Link>
                    <MdDelete onClick={() => handleDelete(_id)} className='w-12 h-12 tooltip tooltip-left' data-tooltip-id='delete' data-tooltip-content='Delete Craft'></MdDelete>
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
MyArtCard.propTypes = {
    userArt: PropTypes.object,
    userArts: PropTypes.object,
    setUserArts: PropTypes.object
}


export default MyArtCard;