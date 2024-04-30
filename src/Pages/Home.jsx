import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../Components/CraftCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'animate.css';



// Import Swiper styles
import 'swiper/css'
// Import Swiper styles
import 'swiper/css';
import Review from "../Components/Review";

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

            {/* craft section */}
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

            {/* Catagory section */}

            <div>
                <div>
                    <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl  text-center mb-10 mt-10">Our Categories</h2>
                </div>
                <div className="mx-auto mb-10">
                    <Swiper className=' mx-auto'
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4500 }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {/* slider 1 */}
                        <SwiperSlide className="mx-auto">
                            <div>
                                <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/premium-photo/painting-sunset-ocean-generative-ai_87646-23137.jpg?w=1060" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> Landscape Painting</h2>
                                        <p>Landscape painting captures nature essence, evoking emotion through colors, forms, and atmospheric elements on canvas.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#C4A880] w-full">View Catagories</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* slider 2 */}
                        <SwiperSlide className="mx-auto">
                            <div>
                                <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/young-woman-tablet-device-tech-generative-ai_188544-19479.jpg?t=st=1714407081~exp=1714410681~hmac=5101505bd2a4fa67acd0930d6e493a2ec87f4776ddbe6e4ed41b89fec87e62aa&w=1060" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Portrait Drawing</h2>
                                        <p>Portrait painting captures essence, character, and emotion, immortalizing subjects in strokes of vivid artistry.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#C4A880] w-full">View Catagories</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* slider 3 */}
                        <SwiperSlide className="mx-auto">
                            <div>
                                <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/premium-photo/watercolor-illustration-change-seasons-winter-spring-summer-autumn-wide-banner-background-ai_93995-24013.jpg?w=1060" alt="Watercolor Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Watercolor Painting</h2>
                                        <p>Watercolor painting: fluid, vibrant, delicate strokes capturing ephemeral beauty, blending pigments in translucent layers.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#C4A880] w-full">View Catagories</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* slider 4 */}
                        <SwiperSlide className="mx-auto">
                            <div>
                                <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?t=st=1714407555~exp=1714411155~hmac=5be630d669ed11db9f8d914da3913a3bc1aee8e13904739ac94f4abc4bcb7a8a&w=1060" alt="Oil Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Oil Painting</h2>
                                        <p>Oil painting: timeless art form, rich textures, vibrant colors, capturing moments with brushstrokes, evoking emotions.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#C4A880] w-full">View Catagories</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* slider 5 */}
                        <SwiperSlide className="mx-auto">
                            <div>
                                <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/premium-photo/cropped-image-person-drawing-paper_1048944-3280274.jpg?w=1060" alt="Oil Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Charcoal Sketching</h2>
                                        <p>Expressive monochrome art, charcoal sketching captures depth, emotion, and detail with smudges and strokes.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#C4A880] w-full">View Catagories</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider 6 */}
                        <SwiperSlide className="mx-auto">
                            <div>
                                <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/premium-photo/small-cute-smile-monkey-coloring-page-kids-coloring-book-animals-drawing-line-art_712249-253.jpg?w=1060" alt="Oil Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Cartoon Drawing</h2>
                                        <p>Cartoon drawing: whimsical lines, vibrant colors, storytelling through exaggerated characters, bringing imagination to life.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#C4A880] w-full">View Catagories</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>

            {/* Review section */}
            <Review></Review>
        </div>
    );
};

export default Home;