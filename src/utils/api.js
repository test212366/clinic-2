

export const apiSender = async (path, body, method, isAuth) => {
	try { 
		let json
		if(!body) {
			json = await fetch(`http://localhost:8080/api/med-clinic/${path}`) 
			

		} else {
			console.log(method)
			json = await fetch(`http://localhost:8080/api/med-clinic/${path}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method,
				body: JSON.stringify(body)
			}) 

		}
		const data = await json.json()
		return data
	 
	} catch(e) {
		console.error(e)
	}
	 
}