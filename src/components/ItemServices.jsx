import { useEffect, useState } from "react";
import ItemService from "./ItemService";
import {apiSender} from '../utils/api'

 
 

function ItemServices(props) {
	const [servicesItems, setServicesItems] = useState([])


	useEffect(() => {
		(async () => {
			const data = await apiSender('services')
			setServicesItems(() => data)
		})();
	}, []) 
 

	return (
		<div className='percent__items_service'>
			{servicesItems.map((item, index) => <ItemService key={index} id={item.id}/>)}	
		</div>
	);
 }
 
 export default ItemServices;