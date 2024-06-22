import { useLoaderData } from "react-router-dom";
import CraftCard from "../../Components/CraftCard";

const LandScapeCat = () => {
    const LandsCapeArts = useLoaderData()
    return (
        <div>
            <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl text-center mb-10 mt-10 dark:text-[#E1CFA6]">All Landscape Painting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto  ">
                {
                    LandsCapeArts.map(art=>
                        <CraftCard
                        key={art.id}
                        art = {art}
                        ></CraftCard>
                    )
                }
            </div>
        </div>
    );
};

export default LandScapeCat;