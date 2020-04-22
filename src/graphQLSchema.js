import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './auth/users/typeDefs';

import {
	servicesMutations,
	servicesQueries,
	servicesTypeDef
} from './services/typeDefs';

import usersResolvers from './auth/users/resolvers';
import servicesResolvers from './services/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		servicesTypeDef,
		usersTypeDef
	],
	[
		usersQueries,
		servicesQueries
	],
	[
		usersMutations,
		servicesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		servicesResolvers,
		usersResolvers
	)
});

