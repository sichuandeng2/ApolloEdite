// let option = require('./components/knex')
// let knex =require('knex')(option)


// let getList = async function(){
//     let names = []
//    await knex.from('cars').select('*')
//     .then((rows)=> {
        
//         for(row of rows)
//         {   
//             let item ={
//                 id:row['id'],
//                 name:row['name'],
//                 price:row['price']
//             }
//             names.push(item)
//         }
//      console.log("成功")
//     })
//     .catch((err)=>{console.log('err'+);throw err})
//     .finally(()=>knex.destroy())
//     return names
// }

// let addList = async function(data){
//    await knex.from('cars').insert(data)
//     .then(()=> {
//         console.log("添加数据成功")
//     })
//     .catch((err)=>{console.log('err');throw err})
//     .finally(()=>knex.destroy())
 
// }

let getList =[
    {
        id:1,
        name:"张三",
        price:500
    }
]
let name ={
    name:"发多少",
    id:152,
    price:66
}

module.exports = {
    Query: {
        nameList:()=>getList,
        name:()=>name
    },

    Mutation:{
        addName:(parent,paras)=>{
            console.log("接受参数"+parent,paras)
            // addList(paras)
            // names.push({id,name,price})
            // console.log(names)
            return 
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