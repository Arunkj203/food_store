import "./Hero.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import bg from "../../../images/pexels-pixabay-372882.jpg"


const Hero = () => {
	return (
		<section className="hero-section bg-indigo-600  ">

			<Swiper
				// spaceBetween={30}
				centeredSlides={true}
				loop={true}
				// autoplay={{
				// 	delay: 2900,
				// 	disableOnInteraction: false,
				// }}
				// pagination={{
				// 	clickable: true,
				// }}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide className="slide1">

					<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white p-5 relative">Feel the <br /> Home Food  Experience</h1>



				</SwiperSlide>


				<SwiperSlide className="slide2 relative">
					<div className="absolute inset-0 flex items-center justify-start  ml-5">
						<div className="flex flex-col">
							<p className="text-white text-7xl">Satisfy Your Cravings</p>
							<p className="text-white text-6xl">Daily Briyani Offerings for 4+!</p>
						</div>
					</div>

				</SwiperSlide>


				<SwiperSlide className="slide3">Slide 3</SwiperSlide>

			</Swiper>
		</section>
	);
};

export default Hero;
