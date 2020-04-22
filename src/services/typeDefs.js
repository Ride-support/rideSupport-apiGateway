export const servicesTypeDef = `
type Service {
    
    company_id: Int!
    type_service: String!
    company_name: String!
    company_location: String!
    prices_service: String!
    shedule_service : String!
}

type ServiceR {
    
    Idcompany: String
    Service: String
    Name: String
    Location: String
    Prices: String
    Shedule: String
    
    }
    
type Response {
        Mensaje:String
    }

input ServiceInput {
    
    company_id: Int!
    type_service: String!
    company_name: String!
    company_location: String!
    prices_service: String!
    shedule_service : String!
}`;



export const servicesQueries = `
    allServices: [ServiceR]!
    serviceById(id: Int!): ServiceR!
`;

export const servicesMutations = `
    createService(service: ServiceInput!): Response!
    updateService(service: ServiceInput!): Response!
    deleteService(id: Int!): String!
`;
