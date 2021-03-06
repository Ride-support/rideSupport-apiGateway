export const driversTypeDef = `
type Driver {
    id: Int!
    email: String!
    password: String!
    name: String!
    lastname: String!
    age: Int!
    address: String!
    phone: Int!
    vehicle: String!
}
type ResponseDriver{
    token:String!,
    message:String!,
    driver:Driver!,
    error:String!
}
input DriverInput {
    email: String!
    password: String!
    name: String!
    lastname: String!
    age: Int!
    address: String!
    phone: Int!
    vehicle: String!
}
input DriverLogin {
    email: String!
    password: String!
}`;

export const driversQueries = `
    allDrivers: [Driver]!
    driverById(id: Int!): Driver!
`;

export const driversMutations = `
    createDriver(driver: DriverInput!): ResponseDriver!
    updateDriver(id: Int!, driver: DriverInput!): Driver!
    deleteDriver(id: Int!): Int
    loginDriver(driver: DriverLogin!): ResponseDriver!
`;

