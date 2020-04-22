export const mapTypeDef = `

type Insertion {
    InsertedID: String!
}

type Distance {
    _id: String!
    km: Float!
}

type Cardinal {
    _id: String!
    latitude: Float!
    longitude: Float!
}
input CardinalInput {
    latitude: Float!
    longitude: Float!
}`;

export const mapQueries = `
    allCoordinates: [Cardinal]!
    coordinateById(_id: String!): Cardinal!
    obtainDistance(lat:Float! lon:Float!): [Distance]!
`;

export const mapMutations = `
    createCardinal(cardinal: CardinalInput!): Insertion!
    deleteCardinal(id: String!): String
`;