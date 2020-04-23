import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allServicesM: (_) =>
			generalRequest(`${URL}`, 'GET'),
			//serviceById: (_, { id }) =>
			//generalRequest(`${URL}/${id}`, 'GET'),
			//generalRequest(`${URL}`, 'GET'),
		serviceByIdM: (_, { id }) =>
			generalRequest(`${URL}/services/${id}`, 'GET'),
		

		//allServices: (_) =>
			//getRequest(URL, ''),
			//serviceById: (_, { id }) =>
			//generalRequest(`${URL}/${id}`, 'GET'),
			//generalRequest(`${URL}`, 'GET'),	
	},
	
	Mutation: {
		createServiceM: (_, { service }) =>
			generalRequest(`${URL}`, 'POST', service),
		updateServiceM: (_, { service }) =>
			generalRequest(`${URL}`, 'PUT', service),
		deleteServiceM: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
