const { gql } = require("apollo-server-express");

// create typeDefs for queries and mutations
const typeDefs = gql`
  type Book {
    _id: ID
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
    savedBooks: [Book]
  }

  input savedBookInput {
    description: String
    title: String!
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBookInput!): User
    removeBook(bookId: ID!): User
  }
`;

// exports
module.exports = typeDefs;
