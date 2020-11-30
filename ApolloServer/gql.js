const { gql } = require('apollo-server')
const typeDefs = gql`
    type Name {
        id:Int
        name:String
        price:Int
    }
    type Names{
        names:[Name]
    }
    type Query {
        nameList:[Name]
    }
    input NameInput {
        id:Int,
        name:String,
        price:Int
    }
    type Mutation {
        addName(id:Int,name:String,price:Int): Name,
        updateName(input:NameInput): Name,
        deleteName(input:NameInput): Name
      }
`
module.exports = typeDefs