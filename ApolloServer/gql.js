const { gql } = require('apollo-server')
const typeDefs = gql`
    type Name {
        id:String
        name:String
        price:String
    }
    type Names{
        names:[Name]
    }
    type Query {
        nameList:[Name]
    }
    input NameInput {
        id:String,
        name:String,
        price:String
    }
    type Mutation {
        # addName(id:String,name:String,price:String): Name,
        addName(input:NameInput): Name,
        updateName(input:NameInput): Name,
        deleteName(input:NameInput): Name
      }
`
module.exports = typeDefs