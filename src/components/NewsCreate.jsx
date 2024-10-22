import {Create, SimpleForm, TextInput, DateInput, FileInput, FileField} from 'react-admin'


function NewsCreate(props) {
 


	return (
		<Create title='Создать Новость' {...props}>
			<SimpleForm>
				<TextInput  source='id' />
				<TextInput source='title' />
				<TextInput multiline source='body' />
				<FileInput source='img' label='Image' accept="image/*">
					<FileField source='src' title='title' />
				</FileInput>
 
				<DateInput label='Published' source='createdAt' />
			</SimpleForm>
		</Create>
	);
 }
 
 export default NewsCreate;