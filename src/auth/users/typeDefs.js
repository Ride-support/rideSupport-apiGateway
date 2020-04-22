export const carsTypeDef = `
type Car {
    plateNumber: String!
    model: String!
    brand: String!
}
input CarInput {
    plateNumber: String!
    model: String!
    brand: String!
}`;

export const carsQueries = `
    allCars: [Car]!
    carByPlates(plateNumber: String!):Car!
`;

export const carsMutations = `
    createCar(car: CarInput!):Car!
    updateCar(plateNumber: String!, car: CarInput!): Car!
    deleteCar(plateNumber: String!): String
`;
