import {Edit, SimpleForm, TextInput, DateInput, FileInput, FileField} from 'react-admin'


function ServiceEdit(props) {
 


	return (
		<Edit title='Изменить Услугу' {...props}>
			<SimpleForm>
				<TextInput disabled source='id' />

				<TextInput source='title' />
				<TextInput multiline source='body' />
				<TextInput multiline source='worker' />
				<TextInput multiline source='workerDescription' />
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>

				<DateInput label='Published' source='publishedAt' />


			</SimpleForm>


		</Edit>
	
	);
 }
 
 export default ServiceEdit;