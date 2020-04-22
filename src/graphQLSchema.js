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
	mapMutations,
	mapQueries,
	mapTypeDef
} from './map/coordinate/typeDefs';

import usersResolvers from './auth/users/resolvers';
import mapResolvers from './map/coordinate/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		mapTypeDef,
		usersTypeDef,
	],
	[
		usersQueries,
		mapQueries
	],
	[
		usersMutations,
		mapMutations
	],
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		mapResolvers,
		usersResolvers
		)
});
