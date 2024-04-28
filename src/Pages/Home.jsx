import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../Components/CraftCard";

const Home = () => {
    const arts = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>
                    Craft Verse - Home
                </title>
            </Helmet>
            <Banner></Banner>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto ">
                {
                    arts.map(art => <CraftCard
                        key={art._id}
                        art={art}
                    ></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Home;