import { useLoaderData } from "react-router-dom";
import CraftCard from "../../Components/CraftCard";

const CartoonDrawing = () => {
    const arts = useLoaderData()
    return (
        <div>
            <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl text-center mb-10 mt-10 dark:text-[#E1CFA6]">All Cartoon Drawing</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto '>
                {
                    arts.map(art =>

                    <CraftCard
                    art={art}
                    key = {art.id}
                    ></CraftCard>
                    )
                }
            </div>

        </div>
    );
};

export default CartoonDrawing;