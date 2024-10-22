import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, Filter} from 'react-admin'



const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
	</Filter>
 );


function ReviewsList(props) {
 


	return (
		<List {...props} filters={<PostFilter />}> 
			<Datagrid >
				<TextField source='id' />
				<TextField source='userName' />
				<TextField source='description' />

				<EditButton basepath='/admin' />
				<DeleteButton basepath='/admin' />

			</Datagrid>

		</List>
	
	);
 }
 
 export default ReviewsList;