import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''), //
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		reservaById:(_, { id }) =>
			generalRequest(`${URL}/${id}/reservas`, 'GET'),
		ping: (_) => {
			return "Pong"
		},
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL}/${id}/`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE'),
		createReserva:  (_, {id, reserva}) =>
			generalRequest(`${URL}/${id}/reservas`, 'POST', reserva)
	}
};

export default resolvers;