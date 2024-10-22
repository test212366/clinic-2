import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";


function Service() {
	const params = useParams(),
		navigator = useNavigate()
	console.log(params)


	return (
		<section>
			<Header />
			<section className='welcome__section'>
				<div>

				</div>

				<div>
					<section className="welcome__service_item">
							<button onClick={() => navigator('/')} className="welcome__service_button">
								<svg  width="12" height="32" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22.0504 0.946248C20.8001 -0.315416 18.773 -0.315416 17.5223 0.946248L1.87339 16.7513C-0.625326 19.2751 -0.624334 23.3644 1.8756 25.8866L17.5338 41.6857C18.7845 42.9473 20.8116 42.9473 22.0623 41.6857C23.3126 40.4241 23.3126 38.3785 22.0623 37.1169L8.66015 23.5944C7.40975 22.3329 7.40975 20.2875 8.66015 19.0256L22.0504 5.51506C23.3011 4.25343 23.3011 2.20788 22.0504 0.946248Z" fill="white"/>
								</svg>
							</button>
							

							<h6>Service Title</h6>	
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<p className="date__added">Добавлено: 13.20.20</p>
							<img src="https://ассоль55.рф/upload/iblock/5b3/xeyl55a969fgscd6rscemq0qh0r2crnc.jpg" alt="img_service" />
							<div>
								<h6>Обслуживающий врач</h6>
								<div className="worker__wrapper">
									<p className="worker">Ирина В.Д.</p>
									<p className="worker__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						
								</div>

						 	</div>
					</section>	
				</div>

				 
			</section>

		</section>
	
	);
 }
 
 export default Service;