import logo from '../imgs/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = ({ isMain, reviews, news, services, map, send}) => {
	const navigate = useNavigate()

	return (
		<header className='header'>
 
			 
			<nav>

			 <img className='logo' onClick={() => navigate('/')} src={logo} alt="logo" />
				<ul className='ul'>
					{isMain ? <>
						<li onClick={() => {
										reviews.current.scrollIntoView({behavior: "smooth"})
									}}>
							ОТЗЫВЫ КЛИЕНТОВ
						</li>
						<li onClick={() => {
											news.current.scrollIntoView({behavior: "smooth"})
										}}>
							НОВОСТИ
						</li>
						<li onClick={() => {
											services.current.scrollIntoView({behavior: "smooth"})
										}}>
							УСЛУГИ
						</li>
						<li onClick={() => {
											map.current.scrollIntoView({behavior: "smooth"})
										}} >
							МЫ НА КАРТЕ
						</li>
					
					</> : ''}
					 
				</ul>

				<div className='header__btns_login'>
					<button onClick={() => {
						if(isMain) {
							send.current.scrollIntoView({behavior: "smooth"})
						} else {
							navigate('/')
						}
										 
									}}>
						ЗАПИСАТЬСЯ НА ПРИЁМ
					</button>
					<button onClick={() => navigate('/login')}>
						<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.625 13.1377C14.795 13.1377 15.917 12.6564 16.7443 11.7995C17.5716 10.9427 18.0363 9.7806 18.0363 8.56886C18.0363 7.35712 17.5716 6.19502 16.7443 5.33819C15.917 4.48136 14.795 4 13.625 4C12.455 4 11.333 4.48136 10.5057 5.33819C9.67845 6.19502 9.21369 7.35712 9.21369 8.56886C9.21369 9.7806 9.67845 10.9427 10.5057 11.7995C11.333 12.6564 12.455 13.1377 13.625 13.1377ZM13.625 15.1451C7.75987 15.1451 4 18.4973 4 20.1294V23.1772H23.25V20.1294C23.25 18.1556 19.6905 15.1451 13.625 15.1451Z" fill="white"/>
						</svg>
					</button>
				</div>
			</nav>
		</header>



	)
}
export default Header