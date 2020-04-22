import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allServices: (_) =>
			generalRequest(`${URL}`, 'GET'),
			//serviceById: (_, { id }) =>
			//generalRequest(`${URL}/${id}`, 'GET'),
			//generalRequest(`${URL}`, 'GET'),
		serviceById: (_, { id }) =>
			generalRequest(`${URL}/services/${id}`, 'GET'),
		

		//allServices: (_) =>
			//getRequest(URL, ''),
			//serviceById: (_, { id }) =>
			//generalRequest(`${URL}/${id}`, 'GET'),
			//generalRequest(`${URL}`, 'GET'),	
	},
	
	Mutation: {
		createService: (_, { service }) =>
			generalRequest(`${URL}`, 'POST', service),
		updateService: (_, { service }) =>
			generalRequest(`${URL}`, 'PUT', service),
		deleteService: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
