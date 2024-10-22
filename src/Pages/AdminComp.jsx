import {Admin, Resource, ListGuesser, TextInput, Logout} from 'react-admin'
import ServicesList from '../components/ServicesList'
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from 'ra-data-simple-rest';
import ServiceCreate from '../components/ServiceCreate';
import ServiceEdit from '../components/ServiceEdit';
import ReviewsList from '../components/ReviewsList';
import ReviewsEdit from '../components/ReviewsEdit';
import ReviewsCreate from '../components/ReviewsCreate';
import NewsList from '../components/NewsLIst';
import NewsEdit from '../components/NewsEdit';
import NewsCreate from '../components/NewsCreate';
import SlidesList from '../components/SlidesList';
import SlidesEdit from '../components/SlidesEdit';
import SlidesCreate from '../components/SlidesCreate';
import SectionServiceList from '../components/SectionServiceList';
import SectionServiceEdit from '../components/SectionServiceEdit';
import SectionTechnologiesList from '../components/SectionTechnologiesList';
import SectionTechnologiesEdit from '../components/SectionTechnologiesEdit';
import Login from './Login';
import DoctorsList from '../components/DoctorsList';
import DoctorsCreate from '../components/DoctorsCreate';
 

 


const dataProvider = jsonServerProvider('http://localhost:8080/api/med-clinic');

const authProvider = {

	login: () => {
		const token = localStorage.getItem('token')
		if(token) {
			console.log(token)
			return token	
		} else {
			// return throw new Error()
		}
	},
	logout: () => {
		localStorage.removeItem('token')
		localStorage.removeItem('username')
		localStorage.removeItem('password')
		window.location.reload();


		return Promise.resolve()
	},
	checkError: (error) => {
		const status = error.status;
		if (status === 401 || status === 403) {
			 // Удаление токена при ошибке авторизации
			 localStorage.removeItem('token');
			 return Promise.reject();
		}
		return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
	checkAuth: () => {
		// Проверка, есть ли токен в localStorage
		return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
 
}
 

function AdminComp() {

	return (
		<>
 
			<Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={Login}>
				<Resource name='doctors' list={DoctorsList} create={DoctorsCreate} edit={SectionTechnologiesEdit} />
				
				<Resource name='services' edit={ServiceEdit} create={ServiceCreate} list={ServicesList} />
				<Resource name='slides' list={SlidesList} edit={SlidesEdit} create={SlidesCreate} />
				<Resource name='reviews' list={ReviewsList} edit={ReviewsEdit} create={ReviewsCreate} />
				<Resource name='news' list={NewsList} edit={NewsEdit} create={NewsCreate} />
				
				<Resource name='sectionService' list={SectionServiceList} edit={SectionServiceEdit} />
				<Resource name='sectionTechnologies' list={SectionTechnologiesList} edit={SectionTechnologiesEdit} />
				<Resource name='sectionAbout' list={SectionTechnologiesList} edit={SectionTechnologiesEdit} />
				<Resource name='sectionWelcome' list={SectionTechnologiesList} edit={SectionTechnologiesEdit} />




			</Admin>
		</>
	 
	);
 }
 
 export default AdminComp;