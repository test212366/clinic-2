import {Edit, SimpleForm, TextInput, DateInput, FileInput, FileField} from 'react-admin'


function SlidesEdit(props) {
 


	return (
		<Edit title='Изменить Слайд' {...props}>
			<SimpleForm>
				<TextInput disabled source='id' />

				<TextInput source='title' />
				<TextInput multiline source='body' />
 
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>
  


			</SimpleForm>


		</Edit>
	
	);
 }
 
 export default SlidesEdit;