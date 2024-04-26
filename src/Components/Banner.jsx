// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'animate.css';


// Import Swiper styles
import 'swiper/css'
// Import Swiper styles
import 'swiper/css';
import { Helmet } from 'react-helmet-async';

const Banner = () => {
    return (
        
        <div>
            <Helmet>
                <title>
                    Craft Verse - Home
                </title>
            </Helmet>
            <div className=" min-h-screen" style={{ backgroundImage: 'url(https://wordpress.templatetrip.com/WCMTM01/WCMTM029_kraftiart/landing/assets/images/bg.jpg)' }}>
                <div className=" text-center">
                    <div className="hero min-h-screen bg-transparent">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                        <Swiper className='w-80 md:w-[700px] lg:w-full mx-auto'
                        modules={[Navigation, Pagination, Scrollbar,  Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3500 }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        
                        <SwiperSlide><img className='rounded-2xl' src="https://img.freepik.com/premium-photo/cropped-image-person-drawing-paper_1048944-3280274.jpg?w=1060" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='rounded-2xl' src="https://img.freepik.com/free-photo/tranquil-scene-reflects-beauty-mountain-range-generative-ai_188544-12627.jpg?t=st=1714151894~exp=1714155494~hmac=d0e3702caf35aa0664abf3adc87abca80895ae6c9aa7b286e2297310232fde93&w=1060" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='rounded-2xl ' src="https://img.freepik.com/free-photo/painting-flowers-field_188544-8649.jpg?t=st=1714151961~exp=1714155561~hmac=85839fc85272c3c9c686d46f4b61978cb713aa1f9c656157df4276bf54e2951f&w=1060" alt="" /></SwiperSlide>
                       
                    </Swiper>
                            <div className="lg:pl-8 lg:w-1/2">
                                <h1 className="text-5xl font-bold text-left animate__animated animate__fadeInBottomLeft">Where Creativity Meets Inspiration!</h1>
                                <p className="py-6 text-left animate__animated animate__fadeInBottomRight">Explore a World of Artistic Expression and Imagination at Craft Verse! Discover Handcrafted Treasures, Unleash Your Creativity, and Find Inspiration for Every Crafty Endeavor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;