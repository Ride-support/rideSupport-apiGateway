import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allVehicles: (_) =>
			getRequest(`${URL}/vehicles`, ''),
		allVehicleTypes: (_) =>
			getRequest(`${URL}/vehicle_types`, ''),
		allServices: (_) =>
			getRequest(`${URL}/services`, ''),
		allServiceTypes: (_) =>
			getRequest(`${URL}/service_types`, ''),
		vehicleById: (_, { id }) =>
			generalRequest(`${URL}/vehicles/${id}`, 'GET'),
		vehicleTypeById: (_, { id }) =>
			generalRequest(`${URL}/vehicle_types/${id}`, 'GET'),
		serviceById: (_, { id }) =>
			generalRequest(`${URL}/services/${id}`, 'GET'),
		serviceTypeById: (_, { id }) =>
			generalRequest(`${URL}/service_types/${id}`, 'GET'),
		vehicleByType: (_, { id }) =>
			generalRequest(`${URL}/vehicle_types/${id}/vehicles`, ''),
		serviceByVehicle: (_, { id }) =>
			generalRequest(`${URL}/vehicle_types/${id}/services`, ''),
		serviceByType: (_, { id }) =>
			generalRequest(`${URL}/service_types/${id}/services`, ''),
	},
	Mutation: {
		createVehicle: (_, { vehicle }) =>
			generalRequest(`${URL}/vehicles`, 'POST', vehicle),
		createVehicleType: (_, { vehicleType }) =>
			generalRequest(`${URL}/vehicle_types`, 'POST', vehicleType),
		createService: (_, { service }) =>
			generalRequest(`${URL}/services`, 'POST', service),
		createServiceType: (_, { serviceType }) =>
			generalRequest(`${URL}/service_types`, 'POST', serviceType),
		updateVehicle: (_, { id, vehicle }) =>
			generalRequest(`${URL}/vehicles/${id}`, 'PUT', vehicle),
		updateVehicleType: (_, { id, vehicleType }) =>
			generalRequest(`${URL}/vehicle_types/${id}`, 'PUT', vehicleType),
		updateService: (_, { id, service }) =>
			generalRequest(`${URL}/services/${id}`, 'PUT', service),
		updateServiceType: (_, { id, serviceType }) =>
			generalRequest(`${URL}/service_types/${id}`, 'PUT', serviceType),
		deleteVehicle: (_, { id }) =>
			generalRequest(`${URL}/vehicles/${id}`, 'DELETE'),
		deleteVehicleType: (_, { id }) =>
			generalRequest(`${URL}/vehicle_types/${id}`, 'DELETE'),
		deleteService: (_, { id }) =>
			generalRequest(`${URL}/services/${id}`, 'DELETE'),
		deleteServiceType: (_, { id }) =>
			generalRequest(`${URL}/service_types/${id}`, 'DELETE')
	}
};

export default resolvers;
