import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	companysMutations,
	companysQueries,
	companysTypeDef
} from './auth/companys/typeDefs';

import companysResolvers from './auth/companys/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		companysTypeDef
	],
	[
		companysQueries
	],
	[
		companysMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		companysResolvers
	)
});
