let option = require('./components/knex')
let knex =require('knex')(option)

let names = []
knex.from('cars').select('*')
.then((rows)=> {
    for(row of rows)
    {   
        let item ={
            id:row['id'],
            name:row['name'],
            price:row['price']
        }
        names.push(item)
    }
    console.log(names)
})
.catch((err)=>{console.log('err');throw err})
.finally(()=>knex.destroy())


module.exports = {
    Query: {
        names:() => names
    },
    Mutation:{
        addNmae:(id,name,price)=>{
            console.log(id,name,price)
        }
    }


} 