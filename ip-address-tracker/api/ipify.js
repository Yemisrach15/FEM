import axios from "axios";

export default async function handler(request, response) {
	try {
		const clientIpaddr = await axios.get('https://api.ipify.org', {
			headers: {
				"Connection": "keep-alive",
				"content-type": "application/json"
			},
		});

		response.status(200).json({ ip: clientIpaddr.data });
	} catch (error) {
		response.status(500).json({ message: 'Something went wrong' });
	}
}