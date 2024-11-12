import {React,useState} from 'react'
import { Grid, Box, Paper, Button, Table, TableRow, TableCell, FormControl, Select } from '@mui/material'
import BBox from '../../component/BBox'

const ProductManage = () => {
  return (
    <div
      style={{
        width: '100%',           
        height: '100vh',        
        display: 'flex',        
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: 70, 
      }}
    >
      <p style={{ fontSize: '25px' , marginLeft:'-60%'}}>상품 관리</p>
      <BBox width="70%" height = "300px" >
        
    
      </BBox>
      <BBox width="70%" height = "300px" >
        
    
      
        <Table>
          <TableRow>
            <TableCell align='center'>
              검색 분류
            </TableCell>
            <TableCell>
              

            </TableCell>
          </TableRow>
        </Table>
        
       
      </BBox>
      <Box marginTop={2}>
        <Button>검색</Button>
        <Button>초기화</Button>
      </Box>
      <BBox width="70%" height = "300px" >
        
    
      </BBox>
      <div style={{height:200}}/>
    </div>
  )
}

export default ProductManage