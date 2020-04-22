import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCars: (_) =>
			getRequest(URL, ''),
		carByPlates: (_, { platesNumber }) =>
			generalRequest(`${URL}/${plateNumber}`, 'GET'),
	},
	Mutation: {
		createCar: (_, { car }) =>
			generalRequest(`${URL}`, 'POST', car),
		updateCar: (_, { plateNumber, car }) =>
			generalRequest(`${URL}/${plateNumber}`, 'PUT', car),
		deleteCar: (_, { plateNumber }) =>
			generalRequest(`${URL}/${plateNumber}`, 'DELETE')
	}
};

export default resolvers;
