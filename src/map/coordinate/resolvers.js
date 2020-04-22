import { generalRequest, getRequest } from '../../utilities';
import { mapUrl, mapPort, mapEntryPoint } from './server';

const URL = `http://${mapUrl}:${mapPort}/${mapEntryPoint}`;
console.log(URL)
const resolvers = {
	Query: {
		allCoordinates: (_) =>
		generalRequest(`${URL}`, 'GET'),
        coordinateById: (_, { id }) =>
            generalRequest(`${URL}/${id}`, 'GET'),
        obtainDistance: (_, {lat}, {lon}) =>
            generalRequest(`${URL}/${lat}/${lon}`, 'GET'),
	},
	Mutation: {
		createCardinal: (_, { cardinal }) =>
			generalRequest(`${URL}`, 'POST', cardinal),
        deleteCardinal: (_, { _id }) =>
			generalRequest(`${URL}/${_id}`, 'DELETE')
	}
};

export default resolvers;