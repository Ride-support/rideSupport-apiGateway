import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, endpoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(endpoint.reservas.user, ''), //
		userById: (_, { id }) =>
			generalRequest(`${endpoint.reservas.user}/${id}`, 'GET'),
		reservaById:(_, { id }) =>
			generalRequest(`${endpoint.reservas.user}/${id}/reservas`, 'GET'),
		ping: (_) => {
			return "Pong"
		},
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${endpoint.reservas.user}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${endpoint.reservas.user}/${id}/`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${endpoint.reservas.user}/${id}/`, 'DELETE'),
		createReserva:  (_, {id, reserva}) =>
			generalRequest(`${endpoint.reservas.user}/${id}/reservas`, 'POST', reserva)
	}
};

export default resolvers;