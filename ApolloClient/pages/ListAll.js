import { useQuery, gql } from '@apollo/client'
import TabelRender from './Table'
import {Box, Text, Button} from 'viviui'
import {GQLListAll} from '../components/gql'
import InsertName from '../components/InsertName'
// import {useState} from 'react'
function ListAll (){

  function ExchangeRates() {
    // const [dataList,setDataList] = useState(null);
    const { loading, error, data } = useQuery(GQLListAll);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    // console.log(loading, error, data)
    // setDataList(data)
    return (
      <Box mx="auto" w="1050px" textAlign="center" >
        <Text mt="60px" fontSize="28px" marginBottom="38px">姓名列表</Text>
        <Button>新增</Button>
        <InsertName></InsertName>
        <TabelRender value={data}></TabelRender>
      </Box>
    )
  }
  return <ExchangeRates></ExchangeRates>
}
export default ListAll