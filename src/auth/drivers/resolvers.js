import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allDrivers: (_) =>
			getRequest(URL, ''),
		driverById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET')
	},
	Mutation: {
		createDriver: (_, { driver }) =>
			generalRequest(`${URL}`, 'POST', driver ),
		updateDriver: (_, { id, driver }) =>
			generalRequest(`${URL}/${id}`, 'PUT', driver ),
		deleteDriver: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
