import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
// import 'sweetalert2/src/sweetalert2.scss'


const AddCraft = () => {
    const { user } = useContext(AuthContext)
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
        fetch('https://craft-verse-server.vercel.app/craft', {
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
            <div className="bg-[#F8F5F0] bg-opacity-50 py-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-5">Add Your Craft Here</h2>
                <div className="w-3/4 mx-auto my-10">
                    <form onSubmit={hanldeAddCraft}>
                        {/* row 1 */}
                        <div className="md:flex md:mb-8 md-5">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Craft Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="item_name" placeholder="Craft Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control  md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text ">Sub-Catagory</span>
                                </label>
                                <label className="input-group w-full">
                                    <label className="input  input-bordered grow flex items-center gap-2 w-full">
                                        <select name="catagory" className="grow ">
                                            <option value="">Not Selected</option>
                                            <option value="Landscape Painting">Landscape Painting</option>
                                            <option value="Portrait Drawing">Portrait Drawing</option>
                                            <option value="Watercolour Painting">Watercolour Painting</option>
                                            <option value="Oil Painting">Oil Painting</option>
                                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                                        </select>
                                    </label>
                                </label>
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="md:flex md:mb-8 md-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <label className="input-group">
                                    <input type="url" name="photoURL" placeholder="https://" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="price" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>

                        {/* row 3 */}
                        <div className="md:flex md:mb-8 md-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="Rate your craft" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="time" placeholder="Processing time" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className="md:flex md:mb-8 md-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Stock</span>
                                </label>
                                <label className="input-group">
                                    <label className="input input-bordered flex grow items-center gap-2">
                                        Stock Status :
                                        <select name="stock" className="grow" >
                                            <option value="">Not Selected</option>
                                            <option value="In stock">In Stock</option>
                                            <option value="Made in order">Made in Order</option>
                                        </select>
                                    </label>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <label className="input-group">
                                    <label className="input input-bordered flex grow items-center gap-2">
                                        <select name="customaization" className="grow">
                                            <option value="">Not Selected</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </label>
                                </label>
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="md:flex md:mb-8 md-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="user_name" defaultValue={user ? user.displayName : ''} placeholder="User Name" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" defaultValue={user ? user.email : ''} placeholder="Email" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>

                        {/* row 6 */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" placeholder="Write a short description" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add Craft" className="btn btn-block bg-[#C4A880]" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCraft;