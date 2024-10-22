import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, Filter, ImageField} from 'react-admin'



const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
	</Filter>
 );


function NewsList(props) {
 


	return (
		<List {...props} filters={<PostFilter />}> 
			<Datagrid >
				<TextField source='id' />
				<TextField source='title' />
				<TextField source='body' />
 
				<ImageField source="img" title="title" />
				<DateField source='publishedAt' />
				<EditButton basepath='/admin' />
				<DeleteButton basepath='/admin' />

			</Datagrid>

		</List>
	
	);
 }
 
 export default NewsList;