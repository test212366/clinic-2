import {Create, SimpleForm, TextInput, DateInput, FileInput, FileField, ArrayInput, TextField} from 'react-admin'


function DoctorsCreate(props) {
 


	return (
		<Create title='Создать Доктора' {...props}>
			<SimpleForm>
				<TextInput source='name' />
				<TextInput source='surname' />
				<TextInput source='patronymic' />
				<TextInput source='specialization' />
				<TextInput source='bio' />
	 
		  
 
				 
			</SimpleForm>
		</Create>
	);
 }
 
 export default DoctorsCreate;