import {Admin, Resource, ListGuesser, TextInput} from 'react-admin'
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
 

 


const dataProvider = jsonServerProvider('http://localhost:5000/');


 

function AdminComp() {

	return (
		<>
 
			<Admin dataProvider={dataProvider} loginPage={Login}>
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