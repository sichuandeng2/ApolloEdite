const {ApolloServer} = require('apollo-server')
let typeDefs = require('./gql')
let resolvers = require('./resolvers')


const server = new ApolloServer({typeDefs,resolvers})
server.listen().then(({ url }) => {
    console.log(`server at ready at ${url}`)
})



// console.log('test')
// const options = {
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: 'jerry',
//         password: '',
//         database: 'test'
//     }
// }
// const knex = require('knex')(options);
// knex.schema.createTable('cars', (table) => {
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// }).then(() => console.log("table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// const cars = [
//     { name: 'Audi', price: 52642 },
//     { name: 'Mercedes', price: 57127 },
//     { name: 'Skoda', price: 9000 },
//     { name: 'Volvo', price: 29000 },
//     { name: 'Bentley', price: 350000 },
//     { name: 'Citroen', price: 21000 },
//     { name: 'Hummer', price: 41400 },
//     { name: 'Volkswagen', price: 21600 },
// ]

// knex('cars').insert(cars).then(() => console.log("data inserted"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

// knex.from('cars').select("*")
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['id']} ${row['name']} ${row['price']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });


// knex.from('information_schema.tables').select('table_name')
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['table_name']}`);
//         }
//     })
//     .catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });