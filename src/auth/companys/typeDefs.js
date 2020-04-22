export const companysTypeDef = `
type Company {
    id: Int!
    email: String!
    password: String!
    name: String!
    city: String!
    address: String!
    phone: Int!
    manager: String!
}
input CompanyInput {
    email: String!
    password: String!
    name: String!
    city: String!
    address: String!
    phone: Int!
    manager: String!
}`;


export const companysQueries = `
    allCompanys: [Company]!
    companyById(id: Int!): Company!
`;
export const companysMutations = `
    createCompany(company: CompanyInput!): Company!
    updateCompany(id: Int!, company: CompanyInput!): Company!
    deleteCompany(id: Int!): Int
`;