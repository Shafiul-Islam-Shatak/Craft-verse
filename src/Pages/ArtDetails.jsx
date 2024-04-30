
import { useLoaderData } from "react-router-dom";

const ArtDetails = () => {

    const craft = useLoaderData();
    const { item_name, sub_catagory, image, price, rating, time, description, customaization, stock } = craft;

    return (
        <div className="hero w-3/4 mx-auto ">
            <div className="flex flex-col lg:flex-row">
                <img src={image} />
                <div className="mt-5 lg:mt-10 p-5">
                    <h1 className="text-3xl md:text-5xl font-bold">{item_name}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-outline btn-success mb-2 rounded-3xl">
                        Catagory : {sub_catagory}
                    </button>
                    <div className="flex justify-between font-semibold">
                        <h2>Price : {price}$</h2>
                        <h2>Rating : {rating}</h2>
                    </div>
                    <div className="flex justify-between font-bold">
                        <h2>Customizaiton : {customaization}</h2>
                        <h2>Stock : {stock}</h2>
                    </div>
                    <div>
                        <h2>Preparation Time : {time}</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;