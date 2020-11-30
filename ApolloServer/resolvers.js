let option = require('./components/knex')
let knex =require('knex')(option)

// let names = []
// knex.from('cars').select('*')
// .then((rows)=> {
//     for(row of rows)
//     {   
//         let item ={
//             id:row['id'],
//             name:row['name'],
//             price:row['price']
//         }
//         names.push(item)
//     }
//     // console.log(names)
// })
// .catch((err)=>{console.log('err');throw err})
// .finally(()=>knex.destroy())


let names =[
    {
        id:1,
        name:"张三",
        price:500
    }
]


module.exports = {
    Query: {
        nameList:() => names
    },

    Mutation:{
        addName:(parent,{id,name,price})=>{
            console.log("接受参数"+id,name,price)
            names.push({id,name,price})
            console.log(names)
            return names
        },
        updateName:({id,name,price})=>{
            console.log("接受参数"+id,name,price)
           
            return names
        },
        deleteName:(parent,paras)=>{
            console.log("接受参数"+paras.id)

            return paras
        }
        
    }

} 