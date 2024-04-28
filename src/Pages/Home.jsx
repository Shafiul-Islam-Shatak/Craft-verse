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
            <div data-aos="fade-up">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10">Our Collections</h2>
                <p className="text-lg px-3 md:w-3/4 mx-auto text-center mb-10 md:mt-10   mt-3">Our art and craft collection is a testament to global creativity, showcasing diverse traditions and techniques. From vibrant textiles to sculpted ceramics, each piece tells a unique story of human ingenuity and cultural heritage. Explore our treasure trove of expression and immerse yourself in a world of beauty and craftsmanship.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto ">
                {
                    arts.map(art => <CraftCard
                        key={art._id}
                        art={art}
                    ></CraftCard>)
                }
            </div>

            <div>
                <div>
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10">Our Featured Recent Post</h2>
                </div>

            </div>
        </div>
    );
};

export default Home;