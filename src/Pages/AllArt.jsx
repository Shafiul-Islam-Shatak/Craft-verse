import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../Components/CraftCard";

const AllArt = () => {
    const arts = useLoaderData();
    const { item_name } = arts;
    console.log(item_name);
    return (
        <div>
            <div>
                <Helmet>
                    <title>
                        Craft Verse-All Art
                    </title>
                </Helmet>
                <h3>ALL art {arts.length}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        arts.map(art => <CraftCard
                            key={art._id}
                            art={art}
                        ></CraftCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllArt;