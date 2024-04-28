import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
const MyArtCard = () => {
    const arts =useLoaderData();
    // const {_id, userEmail} = art;
    const [userArts, setUserArt] = useState([])
    const { user} = useContext(AuthContext);

    useEffect(() => {
        // Check if the userEmail matches the user's email
        // if (user && userEmail === user.email) {
        //     // Check if the art with the same _id is not already in userArts
        //     const newUserArt = [...userArts , art]
        //     if (!userArts.find(item => item._id === _id)) {
        //         setUserArt(newUserArt);
        //     }
        // }
        arts.forEach(art => {
            if (art.userEmail === user.email) {
                    setUserArt(art)
                }
        });
    }, []);

    return (
        <div>
            <h2>{userArts.length}</h2>
        </div>
    );
};
MyArtCard.propTypes = {
    art: PropTypes.object
}


export default MyArtCard;