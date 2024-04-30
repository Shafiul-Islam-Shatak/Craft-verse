import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyArtCard from "../Components/MyArtCard";

const MyArt = () => {
    const [userArts , setUserArts] =useState([])
    const { email } = useParams();
    console.log(email);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
        fetch(`https://craft-verse-server.vercel.app/craft/${user.email}`)
        .then(res =>res.json())
        .then(data=> setUserArts(data))
    }, [user])
    console.log(userArts);


    return (
        <div>
            <Helmet>
                <title>
                    Craft Verse-My Art
                </title>
            </Helmet>
            <div>
            <div data-aos="fade-up" className='-z-30 relative'>
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10">My Arts & Crafts</h2>
                    <p className="text-lg px-3 md:w-3/4 mx-auto text-center mb-10 md:mt-10   mt-3">Discover exquisite handcrafted creations blending artistry and innovation. Each piece intricately designed to evoke emotion and inspire wonder. Explore the unique collection and bring a touch of creativity into your life.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto ">
                {
                    userArts.map(userArt => <MyArtCard
                    key={userArt._id}
                    userArt={userArt}
                    ></MyArtCard>)
                }

            </div>


        </div>
    );
};

export default MyArt;