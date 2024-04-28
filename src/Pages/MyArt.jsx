import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
// import MyArtCard from "../Components/MyArtCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyArt = () => {
    const arts = useLoaderData();
    const [userArts, setUserArt] = useState([])
    // console.log(userArts);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        arts.forEach(art => {

            if (art.userEmail === user.email) {
                console.log(art.userEmail);
                setUserArt(art);
                console.log(userArts);
            }

        });
    }, []);
    return (
        <div>
            <Helmet>
                <title>
                    Craft Verse-My Art
                </title>
            </Helmet>
            <div>
                <h2>Your art :{userArts.length}</h2>
               
            </div>


        </div>
    );
};

export default MyArt;