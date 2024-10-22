import news from '../imgs/news.png'
import newsprev from '../imgs/news prev.png'
import { useEffect, useState } from 'react';
import { apiSender } from '../utils/api';



function NewsReviews(props) {
	const [newsState, setNews] = useState([]),
		[reviews, setReviews] = useState([])


	useEffect(() => {
		(async () => {
			const data = await apiSender('news')
			setNews(() => data)
			const dataRew = await apiSender('reviews')
			setReviews(() => dataRew)
		})();
	}, []) 



	return (
		<>
			<p className='reviews__bg_text'>НАШИ ОТЗЫВЫ</p>
				<div className='reviews__container'>
					<div className='container__review'>
						<div className='wrapper__review'>
							<h6>Отзывы Клиентов</h6>
							<div className='review__items'>

								{reviews.map((review, i) =>
									<div key={i} className='review__item'>
											
											<div>Кристина</div>
									
										<p>Врачи большие профессионалы. Очень приятны в общении. Приятно удивило кафе со вкусностями. Хотя обычно ожидание не долгое, но сама забота о больных подкупает. Спасибо за хороший сервис!</p>
									</div>
								)}
			 
							</div>
						</div>
						<svg className='corner__review' width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="37" y1="37.5" y2="37.5" stroke="white" strokeWidth="2"/>
							<line x1="35.994" x2="35.994" y2="37" stroke="white" strokeWidth="2"/>
							</svg>

						<svg className='reviews__svg' width="598" height="731" viewBox="0 0 598 731" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_bd_72_5)">
							<path d="M4 37.7744L535.173 8.11511C546.201 7.49931 555.641 15.9405 556.257 26.969L593.442 692.932L62.2695 722.591C51.241 723.207 41.8014 714.766 41.1856 703.737L4 37.7744Z" fill="#C4C4C4"/>
							</g>
							<g filter="url(#filter1_bd_72_5)">
							<path d="M18 22.2803L549.675 3.69889C560.714 3.31309 569.976 11.9492 570.362 22.9881L593.658 689.581L61.9829 708.163C50.944 708.548 41.6824 699.912 41.2966 688.873L18 22.2803Z" fill="#E4E4E4"/>
							</g>
							<g filter="url(#filter2_bd_72_5)">
							<path d="M42 0H574C585.046 0 594 8.95431 594 20V687H62C50.9543 687 42 678.046 42 667V0Z" fill="white"/>
							</g>
							<defs>
							<filter id="filter0_bd_72_5" x="-6" y="-1.9165" width="609.442" height="734.539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_72_5"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="effect1_backgroundBlur_72_5" result="effect2_dropShadow_72_5"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_72_5" result="shape"/>
							</filter>
							<filter id="filter1_bd_72_5" x="8" y="-6.31348" width="595.658" height="724.489" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_72_5"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="effect1_backgroundBlur_72_5" result="effect2_dropShadow_72_5"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_72_5" result="shape"/>
							</filter>
							<filter id="filter2_bd_72_5" x="32" y="-10" width="572" height="707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_72_5"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="effect1_backgroundBlur_72_5" result="effect2_dropShadow_72_5"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_72_5" result="shape"/>
							</filter>
							</defs>
						</svg>

					</div>
					<div className="welcome__title_description shadow news__clin"></div>
					<div className='clinic__news'>
						<div className='clinic__data'>
							<p>13.04.23</p>
						</div>
						<h6>Новости Клиники</h6>
						<div className='prevNews'>
							<p>Предыдущая Новость</p>
							<img src={newsprev} alt="newsPrev" />

						</div>
						<div>
							{newsState.map((newitem, i) => <div key={i}>
								<img src={news} alt="newsLast" />
								<p className='news__additional'>Дополнительный текст с каким либо значением Дополнительный текст с каким либо значением Дополнительный текст с каким либо значением Дополнительный текст с каким либо значением Дополнительный текст с каким либо </p>
								
							</div>)}

						</div>
						 
					 <button className='moreNews'>БОЛЬШЕ НОВОСТЕЙ</button>
					</div>

					 
				</div>
			 

		
		</>
	
	);
 }
 
 export default NewsReviews;