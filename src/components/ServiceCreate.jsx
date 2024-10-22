import { useEffect, useState } from 'react';
import {Create, SimpleForm, TextInput, DateInput, FileInput, FileField, SelectInput, SelectArrayInput} from 'react-admin'
import { apiSender } from '../utils/api';


function ServiceCreate(props) {
	const [doctors, setDoctors] = useState([])


	
	useEffect(() => {
		(async () => {
			const data = await apiSender('doctors')
			setDoctors(() => data)
		})();
	}, []) 
	// [
	// 	{
	// 		"id": "550e8400-e29b-41d4-a716-446655440000",
	// 		"name": "Алексей",
	// 		"surname": "Смирнов",
	// 		"patronymic": "Иванович",
	// 		"specialization": "Терапевт",
	// 		"bio": "Врач с 10-летним стажем работы в области внутренней медицины.",
	// 		"services": [
	// 		  "string"
	// 		]
	// 	 },
	// 	 {
	// 		"id": "550e8400-e29b-41d4-a716-12",
	// 		"name": "Никитоска",
	// 		"surname": "Смирнов",
	// 		"patronymic": "Иванович",
	// 		"specialization": "Терапевт",
	// 		"bio": "Врач с 10-летним стажем работы в области внутренней медицины.",
	// 		"services": [
	// 		  "string"
	// 		]
	// 	 }
	// ]


	return (
		<Create title='Создать Услугу' {...props}>
			<SimpleForm>
				<TextInput  source='id' />

				<TextInput source='title' />
				<TextInput multiline source='body' />
 
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>

				<SelectArrayInput 
					source='doctors'
					label='Врачи'
					choices={doctors.map((doctor) => ({
						id: doctor.id,
						name: doctor.name,
						surname: doctor.surname,
						patronymic: doctor.patronymic,
						specialization: doctor.specialization,
						bio: doctor.bio,
					 
					}))}
				/>

				
				<DateInput label='Published' source='createdAt' />


			</SimpleForm>


		</Create>
	
	);
 }
 
 export default ServiceCreate;