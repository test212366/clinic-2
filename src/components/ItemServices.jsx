import { useEffect, useState } from "react";
import ItemService from "./ItemService";

 
 

function ItemServices(props) {
	const [servicesItems, setServicesItems] = useState([])


	useEffect(() => {
		(async () => {
			const json = await fetch('http://localhost:5000/services') 
			const data = await json.json()
			setServicesItems(() => data)
		 
		})();
		


	}, []) 
	console.log(servicesItems)


	return (
		<div className='percent__items_service'>
			{servicesItems.map((item, index) => <ItemService key={index} id={item.id}/>)}	
		</div>
	);
 }
 
 export default ItemServices;