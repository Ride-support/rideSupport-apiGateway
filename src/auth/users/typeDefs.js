export const usersTypeDef = `
type User {
    _id: ID!
    telefono: String!
    nombre: String!
    reserva: [Reserva]!
}
type Reserva {
    idServicio: ID!
    tipoServicio: String!
    fechaServicio: String!
    horaServicio: String!
    lugarServicio: String!
}
input UserInput {
    telefono: String!
    nombre: String!
}
input ServiceInput {
    tipoServicio: String!
    fechaServicio: String!
    horaServicio: String!
    lugarServicio: String!
}`;

export const usersQueries = `
    allUsers: [User]
    userById(id: Int!): User!
    ping: String!
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
    updateUser(id: Int!, user: UserInput!): User!
    deleteUser(id: Int!): Int
`;