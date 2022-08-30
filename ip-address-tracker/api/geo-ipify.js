import axios from "axios";

export default async function handler(request, response) {
	try {
		const geoLocationFromIp = await axios.get('https://geo.ipify.org/api/v2/country,city', {
			headers: {
				"Connection": "keep-alive",
				"content-type": "application/json"
			},
			params: {
				apiKey: process.env.REACT_APP_GEO_API_KEY,
				ipAddress: request.query.ipAddress
			}
		});

		response.status(200).json({ 
			...geoLocationFromIp.data 
		});
	} catch (error) {
		if (error.response.status === 422)
			response.status(422).json(error.response.data);
		else 
			response.status(500).json({ message: 'Something went wrong' });
	}
	
}