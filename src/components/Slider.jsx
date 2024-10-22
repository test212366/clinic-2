import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../imgs/slide 1.png'
import { useEffect, useState } from 'react';
import { apiSender } from '../utils/api';

function Slider(props) {
	const [slides, setSlides] = useState([])


	useEffect(() => {
		(async () => {
			const data = await apiSender('slides')
			setSlides(() => data)
		})();
	}, []) 

 

	return (
		<section className='wrapper__swiper'>
					<Swiper
						spaceBetween={0}
						slidesPerView={1.}
						centeredSlides={true}
						initialSlide={1}
						breakpoints={{
							// when window width is >= 640px
							1700: {
							  slidesPerView: 2.3,
							},
							1530: {
								slidesPerView: 1.9,
							 },
							 1380: {
								slidesPerView: 1.8,

							 },
							 1230: {
								slidesPerView: 1.5,

							 },
							 1000: {
								slidesPerView: 1.6,
							 },
							925: {
								slidesPerView: 1.4
							},
							900: {
								slidesPerView: 1.3
							},
							810: {
								slidesPerView: 1.9

							},
							680: {
								slidesPerView: 1.6

							},
							590: {
								slidesPerView: 1.4

							},
							540: {
								slidesPerView: 1.3

							},
							480: {
								slidesPerView: 1.25

							}, 
							420: {
								slidesPerView: 1.28	
							},
							390: {
								slidesPerView: 1.2	

							},
							360: {
								slidesPerView: 1.15
							}
						 }}
					>
						{slides.map((slide, i) => 
							<SwiperSlide key={i}>
								<img width='600px' src={slide1} alt="Slide" />
								<div className='slider__desc'>
									<h6>ИНФОРМАЦИЯ НА <span>ИЗОБРАЖЕНИИ</span></h6>
									<p>Информация на изображении Информация на изображении Информация на изображении Информация на изображении Информация на изображении </p>
									<svg width="331" height="88" viewBox="0 0 331 88" fill="none" xmlns="http://www.w3.org/2000/svg">
										<line y1="0.5" x2="251" y2="0.5" stroke="#B5B5B5"/>
										<line x1="251.367" y1="0.66086" x2="311.367" y2="65.6609" stroke="#B5B5B5"/>
										<circle cx="318.5" cy="75.5" r="12" stroke="#B5B5B5"/>
										<circle cx="318.5" cy="75.5" r="6.5" fill="#B5B5B5"/>
										</svg>

								</div>
							</SwiperSlide>
						)}
						 
				
					</Swiper>
				</section>
	
	);
 }
 
 export default Slider;