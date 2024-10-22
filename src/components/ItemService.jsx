import { useNavigate } from "react-router-dom";
import serviceOne from '../imgs/service 1.png'
 

function ItemService({id}) {
	const navigate = useNavigate()


	return (
		<>
			<div onClick={() => navigate(`/service/${id}`)} className='percent__item_service'>
				<img width='330px' src={serviceOne} alt="serviceOne" />
			</div>
		</>
	);
 }
 
 export default ItemService;