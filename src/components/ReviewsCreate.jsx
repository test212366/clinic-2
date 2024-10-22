import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'


function ReviewsCreate(props) {
 


	return (
		<Create title='Создать Отзыв' {...props}>
			<SimpleForm>
				<TextInput  source='id' />

				<TextInput source='userName' />
				<TextInput multiline source='description' />
 
 


			</SimpleForm>


		</Create>
	
	);
 }
 
 export default ReviewsCreate;