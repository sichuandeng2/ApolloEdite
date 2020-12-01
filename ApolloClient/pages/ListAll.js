import { useQuery, gql } from '@apollo/client'
import TabelRender from './Table'
import {Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader,ModalCloseButton,ModalBody,ModalFooter} from 'viviui'
import {GQLListAll} from '../components/gql'
import InsertName from '../components/InsertName'
import {useState,useDisclosure} from 'react'
function ListAll (){

  function ExchangeRates() {
    // const { isOpen, onOpen, onClose } = useDisclosure(null);
    const [isOpen,setOpen] = useState(null)
    // let isOpen=false;
    function onOpen(){
     setOpen(true) 
    }
    function onClose(){
      setOpen(false) 
    }
    const { loading, error, data } = useQuery(GQLListAll);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <Box mx="auto" w="1050px" textAlign="center" >
        <Text mt="60px" fontSize="28px" marginBottom="38px">姓名列表</Text>
        {/* <Button>新增</Button> */}
        
        <TabelRender value={data}></TabelRender>

        <Button onClick={onOpen}>新增</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>新增</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InsertName />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
  return <ExchangeRates></ExchangeRates>
}
export default ListAll