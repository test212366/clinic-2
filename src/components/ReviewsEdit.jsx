import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'


function ReviewsEdit(props) {
 


	return (
		<Edit title='Изменить Комментарий' {...props}>
			<SimpleForm>
				<TextInput disabled source='id' /> 
				<TextInput source='userName' />
				<TextInput multiline source='description' />

			</SimpleForm>


		</Edit>
	
	);
 }
 
 export default ReviewsEdit;