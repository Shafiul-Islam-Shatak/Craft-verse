import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import CraftCard from "../Components/CraftCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'animate.css';
import 'swiper/css';
import Review from "../Components/Review";
import OurReviews from "../Components/OurReviews";

const Home = () => {
    const arts = useLoaderData();

    return (
        <div className="">
            <Helmet>
                <title> Craft Verse - Home </title>
            </Helmet>
            <Banner />
            <div data-aos="fade-up">
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl text-center mb-10 mt-10 dark:text-[#E1CFA6]">Our Collections</h2>
                <p className="text-lg px-3 md:w-3/4 mx-auto text-center mb-10 md:mt-10 mt-3 dark:text-gray-300">Our art and craft collection is a testament to global creativity, showcasing diverse traditions and techniques. From vibrant textiles to sculpted ceramics, each piece tells a unique story of human ingenuity and cultural heritage. Explore our treasure trove of expression and immerse yourself in a world of beauty and craftsmanship.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto">
                {arts.slice(0, 6).map(art => (
                    <CraftCard key={art._id} art={art} />
                ))}
            </div>
            <div>
                <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl text-center mb-10 mt-10 dark:text-[#E1CFA6]">Our Categories</h2>
                <div className="mx-auto mb-10">
                    <Swiper
                        className="mx-auto"
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        spaceBetween={50}
                        lidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4500 }}
                        breakpoints={{
                            1024:
                                { slidesPerView: 3, }
                        }}>
                        <SwiperSlide className="mx-auto">
                            <Link to='/landscape-cat'>
                                <div className="card mx-auto w-80 h-80 bg-base-100 dark:bg-gray-800 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/premium-photo/painting-sunset-ocean-generative-ai_87646-23137.jpg?w=1060" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title dark:text-white">Landscape Painting</h2>
                                        <p className="dark:text-gray-300">Landscape painting captures the beauty of nature, from serene countryside scenes to dramatic seascapes, using color, light, and composition, reflecting our worlds beauty and diversity.</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mx-auto">
                            <Link to='/Portrait-Drawing'>
                                <div className="card mx-auto w-80 h-80 bg-base-100 dark:bg-gray-800 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/smoking-girl-painting-ai-generated_268835-8290.jpg?t=st=1719064173~exp=1719067773~hmac=82e26bce6bc16571a41004f5d2fc74ac95a11493ef7e7c2784f032eb5d1639d0&w=996" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title dark:text-white">Portrait-Drawing</h2>
                                        <p className="dark:text-gray-300">Portrait-Drawing captures the beauty of nature, from serene countryside scenes to dramatic seascapes, using color, light, and composition, reflecting our worlds beauty and diversity.</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mx-auto">
                            <Link to='/Watercolour-Painting'>
                                <div className="card mx-auto w-80 h-80 bg-base-100 dark:bg-gray-800 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?t=st=1719064461~exp=1719068061~hmac=9b6d3b7ab8d28561ddd375c243e0a6e3c9310ec351ae765dd25ba506d4a5bd6d&w=900" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title dark:text-white">Watercolour Painting</h2>
                                        <p className="dark:text-gray-300">Watercolour Painting captures the beauty of nature, from serene countryside scenes to dramatic seascapes, using color, light, and composition, reflecting our worlds beauty and diversity.</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mx-auto">
                            <Link to='/Oil-Painting'>
                                <div className="card mx-auto w-80 h-80 bg-base-100 dark:bg-gray-800 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/abstract-pattern-green-white-paint_23-2148078842.jpg?t=st=1719065153~exp=1719068753~hmac=0cc905fbad2007c5d029ea4107503ad163374f4d1a89faf4a8467fafcb77776e&w=1060" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title dark:text-white">Oil Painting</h2>
                                        <p className="dark:text-gray-300">Oil Painting captures the beauty of nature, from serene countryside scenes to dramatic seascapes, using color, light, and composition, reflecting our worlds beauty and diversity.</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mx-auto">
                            <Link to='/Charcoal-Sketching'>
                                <div className="card mx-auto w-80 h-80 bg-base-100 dark:bg-gray-800 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/monochrome-portrait-person-with-double-exposure_23-2149538623.jpg?t=st=1719065653~exp=1719069253~hmac=a8d5445c55032907a4b415ceb57b50b8f0d4ce4c5e44964fb868a7c29df66a46&w=740" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title dark:text-white">Charcoal Sketching</h2>
                                        <p className="dark:text-gray-300">Charcoal Sketching captures the beauty of nature, from serene countryside scenes to dramatic seascapes, using color, light, and composition, reflecting our worlds beauty and diversity.</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="mx-auto">
                            <Link to='/Cartoon-Drawing'>
                                <div className="card mx-auto w-80 h-80 bg-base-100 dark:bg-gray-800 shadow-xl image-full">
                                    <figure><img src="https://img.freepik.com/free-photo/little-fashion-girl-with-bag_71767-100.jpg?t=st=1719065589~exp=1719069189~hmac=cddcfe1bef499f7932be57fd6299c02aad3c542101e5b597568ba95b6fe17f93&w=740" alt="Landscape Painting" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title dark:text-white">Cartoon Drawing</h2>
                                        <p className="dark:text-gray-300">Cartoon Drawing captures the beauty of nature, from serene countryside scenes to dramatic seascapes, using color, light, and composition, reflecting our worlds beauty and diversity.</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
            <div data-aos="fade-up" className="bg-[#C4A880] bg-opacity-10 dark:bg-gray-700">
                <OurReviews />
            </div>
            <div data-aos="fade-up">
                <Review />
            </div>
        </div>
    );
};

export default Home;
