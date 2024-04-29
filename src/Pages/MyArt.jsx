import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
// import MyArtCard from "../Components/MyArtCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyArt = () => {
    const [userArts , setUserArts] =useState([])
    const { email } = useParams();
    console.log(email);
    const { user } = useContext(AuthContext);
    // console.log(email);
    // console.log(loginEmail);
    useEffect(() => {
        fetch(`http://localhost:7000/craft/${user.email}`)
        .then(res =>res.json())
        .then(data=> setUserArts(data))
    }, [user])


    return (
        <div>
            <Helmet>
                <title>
                    Craft Verse-My Art
                </title>
            </Helmet>
            <div>
                <h2>Your art :{ userArts.length}</h2>
            </div>


        </div>
    );
};

export default MyArt;