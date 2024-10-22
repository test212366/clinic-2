import {Create, SimpleForm, TextInput, DateInput, Edit} from 'react-admin'


function SectionTechnologiesEdit(props) {
 


	return (
		<Edit title='Изменить Секцию' {...props}>
			<SimpleForm>
				<TextInput disabled source='id' />

				<TextInput source='title' />
  


			</SimpleForm>


		</Edit>
	
	);
 }
 
 export default SectionTechnologiesEdit;