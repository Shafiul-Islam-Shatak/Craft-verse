import PropTypes from 'prop-types';
const CraftCard = ({ art }) => {
    // const crafts = useLoaderData();
    const { item_name, sub_catagory,  image, price, rating, time, customaization, stock, userName, userEmail, description } = art;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={item_name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
CraftCard.propTypes = {
    art: PropTypes.object
}

export default CraftCard;