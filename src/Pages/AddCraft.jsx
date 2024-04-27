import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'


const AddCraft = () => {
    const hanldeAddCraft = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const sub_catagory = form.catagory.value;
        const image = form.photoURL.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const userName = form.user_name.value;
        const userEmail = form.email.value;
        const customaization = form.customaization.value;
        const description = form.description.value;
        const craft = { item_name, sub_catagory, image, price, rating, time, customaization, stock, userName, userEmail, description };
        console.log(craft);

        // post data to backend
        fetch('http://localhost:7000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation !!",
                        text: "Succesfully Craft Added",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>
                    Craft Verse-Add Craft
                </title>
            </Helmet>
            <div className="bg[#F4F3F0]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-5">Add Your Craft Here</h2>
                <div className="w-3/4 mx-auto">
                    <form onSubmit={hanldeAddCraft}>
                        <div className='space-y-3 lg:space-y-5'>

                            <div className="lg:flex lg:justify-between lg:space-x-5 space-y-3 lg:space-y-0">
                                <label className="input input-bordered grow flex items-center gap-2">
                                    Craft Name :
                                    <input type="text" name="item_name" className="grow" placeholder="Your Craft Name Here" />
                                </label>
                                <label className="input input-bordered grow flex items-center gap-2">
                                    Sub-Catagory :
                                    <select name="catagory" className="grow">
                                        <option value="">Not Selected</option>
                                        <option value="Landscape Painting">Landscape Painting</option>
                                        <option value="Portrait Drawing">Portrait Drawing</option>
                                        <option value="Watercolour Painting">Watercolour Painting</option>
                                        <option value="Oil Painting">Oil Painting</option>
                                        <option value="Charcoal Sketching">Charcoal Sketching</option>
                                        <option value="Cartoon Drawing">Cartoon Drawing</option>
                                    </select>
                                </label>
                            </div>

                            <div className="lg:flex lg:justify-between lg:space-x-5 space-y-3 lg:space-y-0">
                                <label className="input input-bordered flex grow items-center gap-2">
                                    Image :
                                    <input type="url" name="photoURL" className="grow" placeholder="https://" />
                                </label>
                                <label className="input input-bordered grow flex items-center gap-2">
                                    Price :
                                    <input type="text" name="price" className="grow " placeholder="4000" />
                                </label>

                            </div>
                            <div className="lg:flex lg:justify-between lg:space-x-5 space-y-3 lg:space-y-0">

                                <label className="input input-bordered flex grow items-center gap-2">
                                    Rating :
                                    <input type="number" name="rating" className="grow" placeholder="Rate Your Craft" />
                                </label>
                                <label className="input input-bordered flex grow items-center gap-2">
                                    Processing Time :
                                    <input type="text" name="time" className="grow" placeholder="In weeks" />
                                </label>
                            </div>
                            <div className="lg:flex lg:justify-between lg:space-x-5 space-y-3 lg:space-y-0 ">
                                <label className="input input-bordered flex grow items-center gap-2">
                                    Customization :
                                    <select name="customaization" className="grow">
                                        <option value="">Not Selected</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </label>
                                <label className="input input-bordered flex grow items-center gap-2">
                                    Stock Status :
                                    <select name="stock" className="grow" >
                                        <option value="">Not Selected</option>
                                        <option value="Yes">In Stock</option>
                                        <option value="No">Made in Order</option>
                                    </select>
                                </label>

                            </div>
                            <div className="lg:flex lg:justify-between lg:space-x-5 space-y-3 lg:space-y-0">
                                <label className="input input-bordered flex grow items-center gap-2">
                                    User Name :
                                    <input type="text" name="user_name" className="grow" placeholder="Your Name Here" />
                                </label>
                                <label className="input input-bordered flex grow items-center gap-2">
                                    User Email :
                                    <input type="email" name="email" className="grow" placeholder="Your Email Here" />
                                </label>
                            </div>
                            <label className="input input-bordered flex grow items-center gap-2">
                                Description :
                                <input type="text" name="description" className="grow" placeholder="Write a short description" />
                            </label>

                        </div>
                        <br />
                        <input className="grow btn w-full bg-orange-300" type="submit" value="Add" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCraft;