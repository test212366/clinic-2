import {Create, SimpleForm, TextInput, DateInput, FileInput, FileField} from 'react-admin'


function SlidesCreate(props) {
 


	return (
		<Create title='Создать Услугу' {...props}>
			<SimpleForm>
				<TextInput  source='id' />

				<TextInput source='title' />
				<TextInput multiline source='body' />
 
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>

				
 


			</SimpleForm>


		</Create>
	
	);
 }
 
 export default SlidesCreate;