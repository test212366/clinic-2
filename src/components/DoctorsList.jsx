import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, Filter, ImageField} from 'react-admin'



const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
	</Filter>
 );


function DoctorsList(props) {
 


	return (
		<List {...props} filters={<PostFilter />}> 
			<Datagrid >
				<TextField source='name' />
				<TextField source='surname' />
				<TextField source='patronymic' />
				<TextField source='specialization' />
				<TextField source='bio' />
 
				
				
				<EditButton basepath='/admin' />
				<DeleteButton basepath='/admin' />

			</Datagrid>

		</List>
	
	);
 }
 
 export default DoctorsList;