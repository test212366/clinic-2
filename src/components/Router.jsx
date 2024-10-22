import { Route, Routes, Re, Navigate } from "react-router-dom";
import Main from "../Pages/Main";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import Admin from "../Pages/AdminComp";


function Router() {
	return (
	<>
		{localStorage.getItem('password') && localStorage.getItem('login') ? <Admin /> : 
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/service/:id' element={<Service  />} />
			<Route path='/login' element={<Login  />} />
			<Route path='*' element={<Navigate to='/' replace />} />
	

		</Routes>
		
		}
 
		
		 
		
	</>
	);
 }
 
 export default Router;