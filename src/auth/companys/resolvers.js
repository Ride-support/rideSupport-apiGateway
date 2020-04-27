import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, endpoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCompanys: (_) =>
			getRequest(URL, ''),
		companyById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createCompany: (_, { company }) =>
			generalRequest(`${URL}`, 'POST', company  ),
		updateCompany: (_, { id, company  }) =>
			generalRequest(`${URL}/${id}`, 'PUT', company ),
		deleteCompany: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE'),
		loginCompany: (_,{company }) =>
			generalRequest(`${URL}/login`, 'POST',company)
	}
};

export default resolvers;