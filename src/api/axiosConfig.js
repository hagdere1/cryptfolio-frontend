const env = 'dev';

export const axiosConfig = (token) => {
	const fullToken = 'Token token=' + (token ? token : "");

  const urls = {
    dev: 'http://localhost:3000/api/v1',
    prod: 'http://localhost:3000/api/v1'
  }

	return {
		baseURL: urls[env],
		headers: {
			'Content-Type': 'application/json',
			'Authorization': fullToken
		}
	}
}
