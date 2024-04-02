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
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				// pagination={{
				// 	clickable: true,
				// }}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide className="slide1">

					<h1 className="text-7xl text-white p-5 relative">Feel the <br /> Home Food  Experience</h1>



				</SwiperSlide>
				<SwiperSlide className="slide2">Slide 2</SwiperSlide>
				<SwiperSlide >Slide 3</SwiperSlide>

			</Swiper>
		</section>
	);
};

export default Hero;
