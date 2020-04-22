export const gServicesTypeDef = `
type Vehicle {
    id: Int!
    VehicleType_id: Int!
    plate: String!
    brand: String!
    model: String!
    mainColor: String!
    secondaryColor: String!
}

input VehicleInput {
    VehicleType_id: Int!
    plate: String!
    brand: String!
    model: String!
    mainColor: String!
    secondaryColor: String!
}

type VehicleType {
    id: Int!
    name: String!
}

input VehicleTypeInput {
    name: String!
}

type Service {
    id: Int!
    ServiceType_id: Int!
    VehicleType_id: Int!
    description: String!
    openingTime: String!
    closingTime: String!
    cost: String!
    location: String!
}

input ServiceInput {
    ServiceType_id: Int!
    VehicleType_id: Int!
    description: String!
    openingTime: String!
    closingTime: String!
    cost: String!
    location: String!
}

type ServiceType {
    id: Int!
    name: String!
}

input ServiceTypeInput {
    name: String!
}

`;

export const gServicesQueries = `

    allVehicles: [Vehicle]!
    vehicleById(id: Int!): Vehicle!

    allVehicleTypes: [VehicleType]!
    vehicleTypeById(id: Int!): VehicleType!

    allServices: [Service]!
    serviceById(id: Int!): Service!

    allServiceTypes: [ServiceType]!
    serviceTypeById(id: Int!): ServiceType!

    vehicleByType(id: Int!): [Vehicle]!
    serviceByVehicle(id: Int!): [Service]!
    serviceByType(id: Int!): [Service]!
`;

export const gServicesMutations = `
    createVehicle(vehicle: VehicleInput!): Vehicle!
    updateVehicle(id: Int!, vehicle: VehicleInput!): Vehicle!
    deleteVehicle(id: Int!): Int


    createVehicleType(vehicleType: VehicleTypeInput!): VehicleType!
    updateVehicleType(id: Int!, vehicleType: VehicleTypeInput!): VehicleType!
    deleteVehicleType(id: Int!): Int

    createService(service: ServiceInput!): Service!
    updateService(id: Int!, service: ServiceInput!): Service!
    deleteService(id: Int!): Int

    createServiceType(serviceType: ServiceTypeInput!): ServiceType!
    updateServiceType(id: Int!, serviceType: ServiceTypeInput!): ServiceType!
    deleteServiceType(id: Int!): Int
`;
