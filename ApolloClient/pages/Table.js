import{Box, Table, TableHead, TableBody, TableCell, TableRow,Text } from 'viviui'
function TableRender({value}){
  
  function DeleteName(paras){
    // console.log(paras)
    
  }

  function ChangeName(paras){
    // console.log(paras)
  }

  return (
    <Box>
     <Table>
       <TableHead>
         <TableRow>
          <TableCell style={{border:'1px solid #333',padding:"3px 6px"}}>id</TableCell>
          <TableCell style={{border:'1px solid #333',padding:"3px 6px"}}>name</TableCell>
          <TableCell style={{border:'1px solid #333',padding:"3px 6px"}}>price</TableCell>
          <TableCell style={{border:'1px solid #333',padding:"3px 6px"}}>删除</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
          {
            value.nameList.map((item,index) => (
              <TableRow key={index} textAlign='center'>
                <TableCell  style={{border:'1px solid #333',padding:"3px 6px"}}>{item.id}</TableCell >
                <TableCell  style={{border:'1px solid #333',padding:"3px 6px"}}>{item.name}</TableCell >
                <TableCell  style={{border:'1px solid #333',padding:"3px 6px"}}>{item.price}</TableCell >
                <TableCell  style={{border:'1px solid #333',padding:"3px 6px"}}>
                  <Box display="flex" justifyContent="center">
                    <Text color='#4299E1' cursor='pointer' paddingRight="10px" onclick={ChangeName(item)}>编辑</Text>
                    <Text color='#4299E1' cursor='pointer' onclick={DeleteName(item.id)}>删除</Text>
                  </Box>
                </TableCell >
              </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </Box>
  ) 
}

export default TableRender