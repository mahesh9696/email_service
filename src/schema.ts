export default `
    type Mail {
        id: ID!
        message: String!
        subject: String!
        senderEmail: String
        recieverEmail: String!
        readStatus: Boolean
        sentStatus: Boolean
    }
    type Query {
        mails: [Mail],
        mail(id: Int!): Mail
    }
    type Mutation {
        sendEmail(message: String!, subject:String!, recieverEmail:String!): Mail!
        deleteEmail(id: Int!): Mail
    }
`