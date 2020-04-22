import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	gServicesMutations,
	gServicesQueries,
	gServicesTypeDef
} from './auth/get-services/typeDefs';

import gServicesResolvers from './auth/get-services/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		gServicesTypeDef
	],
	[
		gServicesQueries
	],
	[
		gServicesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		gServicesResolvers
	)
});
