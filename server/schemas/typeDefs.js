const { gql } = require("apollo-server-express");

// create typeDefs for queries and mutations
const typeDefs = gql`
  type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Books]
  }

  type Query {
    me: user
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// exports
module.exports = typeDefs;
