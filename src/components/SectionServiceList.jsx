import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, Filter} from 'react-admin'


 


function SectionServiceList(props) {
 


	return (
		<List {...props} > 
			<Datagrid >
				<TextField source='id' />
				<TextField source='title' />
				<EditButton basepath='/admin' />
			 

			</Datagrid>

		</List>
	
	);
 }
 
 export default SectionServiceList;