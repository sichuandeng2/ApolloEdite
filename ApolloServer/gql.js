const { gql } = require('apollo-server')
const typeDefs = gql`
    type Name {
        id:Int
        name:String
        price:Int
    }

   
    type Query {
        names:[Name]
    }
    type Mutation {
        addName(id:Int, name:String, price:Int): Name
      }
`
module.exports = typeDefs