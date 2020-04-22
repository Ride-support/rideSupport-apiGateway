export const usersTypeDef = `
type User {
    _id: String!
    telefono: String!
    nombre: String!
    reserva: [Reserva]!
}
type Reserva {
    _id: String!
    tipoServicio: String!
    fechaServicio: String!
    horaServicio: String!
    lugarServicio: String!
}
input UserInput {
    telefono: String!
    nombre: String!
}
input ReservaInput{    
    tipoServicio: String!
    fechaServicio: String!
    horaServicio: String!
    lugarServicio: String!
}

input ServiceInput {
    tipoServicio: String!
    fechaServicio: String!
    horaServicio: String!
    lugarServicio: String!
}`;

export const usersQueries = `
    allUsers: [User]
    userById(id: String!): User!
    ping: String!
    reservaById(id: String!): [Reserva]!
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
    updateUser(id: String!, user: UserInput!): User!
    deleteUser(id: String!): String
    createReserva(id: String!, reserva: ReservaInput!): Reserva!

`;