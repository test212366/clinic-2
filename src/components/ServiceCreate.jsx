import {Create, SimpleForm, TextInput, DateInput, FileInput, FileField} from 'react-admin'


function ServiceCreate(props) {
 


	return (
		<Create title='Создать Услугу' {...props}>
			<SimpleForm>
				<TextInput  source='id' />

				<TextInput source='title' />
				<TextInput multiline source='body' />
				<TextInput multiline source='worker' />
				<TextInput multiline source='workerDescription' />
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>

				
				<DateInput label='Published' source='publishedAt' />


			</SimpleForm>


		</Create>
	
	);
 }
 
 export default ServiceCreate;