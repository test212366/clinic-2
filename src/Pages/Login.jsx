import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { useLogin, useNotify, Notification } from 'react-admin';
import { apiSender } from "../utils/api";
 

function Login() {
	const navigator = useNavigate()

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const login = useLogin();
	const notify = useNotify();
 
	const handleLogin = async (e) => {
		e.preventDefault();
		// try {
		// 	await login({ username, password });
		// } catch (error) {
		// 	notify('Invalid username or password', { type: 'warning' });
		// }


		if (username.trim() && password.trim()) {
			const data = await apiSender('auth/login', {username: username.trim(), password: password.trim()}, 'POST')
		
			console.log(data)
			if(data.token) {
				login({ username, password }); // Симулируем успешный вход
				localStorage.setItem('login', username)
				localStorage.setItem('password', password)
				localStorage.setItem('token', data.token)

				window.location.reload();
			} else {
				notify('Invalid username or password', { type: 'warning' });
			}
			
		 

		 } else {
			notify('Неправильное имя пользователя или пароль', { type: 'warning' });
		 }
	};

	const handleback =() =>{ 
		 navigator('/')
		
	}
	
	return (
		<section>
			<Header />
			<section className='welcome__section'>
				<div>

				</div>

				<div>
					<section className="welcome__service_item service__login_wrapper">
								<button onClick={handleback} className="welcome__service_button">
									<svg  width="12" height="32" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.0504 0.946248C20.8001 -0.315416 18.773 -0.315416 17.5223 0.946248L1.87339 16.7513C-0.625326 19.2751 -0.624334 23.3644 1.8756 25.8866L17.5338 41.6857C18.7845 42.9473 20.8116 42.9473 22.0623 41.6857C23.3126 40.4241 23.3126 38.3785 22.0623 37.1169L8.66015 23.5944C7.40975 22.3329 7.40975 20.2875 8.66015 19.0256L22.0504 5.51506C23.3011 4.25343 23.3011 2.20788 22.0504 0.946248Z" fill="white"/>
									</svg>
								</button>
								

								<h6>Войти в Админку</h6>	
								<p className="warning">Вход доступен только на ПК, для мобильных устройств панель администратора не предусмотрена.</p>
								<div className="login__wrapper">
									<input onChange={e => setUsername(e.target.value)} type="text" placeholder="Введите Логин..." />
									<input onChange={e => setPassword(e.target.value)} type="text" placeholder="Введите Пароль..." />
									<button onClick={handleLogin}>
										ВОЙТИ 
									</button>
								</div>
								<Notification />
						</section>	
				 
				</div>

			</section>

		</section>
	
	);
 }
 
 export default Login;