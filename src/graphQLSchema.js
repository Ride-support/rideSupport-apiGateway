import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
}from './auth/users/typeDefs'

import {
	carsMutations,
	carsQueries,
	carsTypeDef
} from './cars/typeDefs';

import {
	driversMutations,
	driversQueries,
	driversTypeDef
} from './auth/drivers/typeDefs';

import {
	servicesMutations,
	servicesQueries,
	servicesTypeDef
} from './services/typeDefs';

import {
  mapMutations,
	mapQueries,
	mapTypeDef
} from './map/coordinate/typeDefs';

import {
	companysMutations,
	companysQueries,
	companysTypeDef
} from './auth/companys/typeDefs';

import usersResolvers from './auth/users/resolvers';
import servicesResolvers from './services/resolvers';
import mapResolvers from './map/coordinate/resolvers';
import driversResolvers from './auth/drivers/resolvers';
import companysResolvers from './auth/companys/resolvers';
import carResolvers from './cars/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		carsTypeDef,
 		companysTypeDef,
		driversTypeDef,
		servicesTypeDef,
		mapTypeDef,
   		usersTypeDef

	],
	[
		carsQueries,
 		companysQueries,
		driversQueries,
		usersQueries,
		mapQueries,
		servicesQueries

	],
	[
		carsMutations,
		companysMutations,
		driversMutations,
		usersMutations,
		servicesMutations,
		mapMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		carResolvers,
		companysResolvers,
		driversResolvers,
		servicesResolvers,
		mapResolvers,
		usersResolvers
    )
});

