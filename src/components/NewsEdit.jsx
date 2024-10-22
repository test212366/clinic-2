import {Edit, SimpleForm, TextInput, DateInput, FileInput, FileField} from 'react-admin'


function NewsEdit(props) {
 


	return (
		<Edit title='Изменить Новость' {...props}>
			<SimpleForm>
				<TextInput disabled source='id' />

				<TextInput source='title' />
				<TextInput multiline source='body' />
 
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>

				<DateInput label='Published' source='publishedAt' />

			</SimpleForm>


		</Edit>
	
	);
 }
 
 export default NewsEdit;