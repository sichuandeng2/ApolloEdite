import gql from 'graphql-tag'

// 查找所有人员薪资
const GQLListAll = gql`
{
  nameList{
    id
    name
    price
  }
}
`;

// 新增人员信息
const GQLInert = gql`
  mutation addNameMutation($input:NameInput){
    addName(input:$input){
      id
      name
      price
    }
  }
`

// 修改人员信息
const GQLUpdata = gql`
{
  updateName(input:{
    id:55,
    name:"dd",
    price:66
  }){
    id
    name
    price
  
  }
}
`

export {
  GQLListAll,
  GQLUpdata,
  GQLInert
}