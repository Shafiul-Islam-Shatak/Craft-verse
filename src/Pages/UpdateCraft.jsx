import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {
    const craft = useLoaderData();
    const {item_name} = craft
    return (
        <div>
            <h2>{item_name}</h2>
        </div>
    );
};

export default UpdateCraft;