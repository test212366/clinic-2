import {Create, SimpleForm, TextInput, DateInput, Edit} from 'react-admin'


function SectionServiceEdit(props) {
 


	return (
		<Edit title='Изменить Секцию' {...props}>
			<SimpleForm>
				<TextInput disabled source='id' />

				<TextInput source='title' />
  


			</SimpleForm>


		</Edit>
	
	);
 }
 
 export default SectionServiceEdit;