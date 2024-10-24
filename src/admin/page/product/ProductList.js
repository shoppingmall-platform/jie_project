import {React,useState} from 'react'
import { Grid, Box, Paper, Button, Table, TableRow, TableCell, FormControl, Select } from '@mui/material'
import { TableBar } from '@mui/icons-material'


const ProductList = () => {


 

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
      <p style={{ fontSize: '25px' , marginLeft:'-60%'}}>상품 목록</p>
      <Box
        sx={{
          width: '70%',
          height: 80,
          borderRadius: 1,
          bgcolor: '#dcdcdc',
          marginTop: 2,
          display:'flex',
          flexDirection:'row',
          gap:4,
          alignItems:'center',
          paddingLeft:4,
          fontSize:'15px'
        }}
      >
        <p> 전체 : n개 </p>
        <p> 판매함 : n개</p>
        <p> 판매안함 : n개</p>
        <p> 진열함 : n개</p>
        <p> 진열안함 : n개</p>
      </Box>
      <Box
        sx={{
          width: '70%',
          height: 300,
          borderRadius: 1,
          bgcolor: '#dcdcdc',
          marginTop: 2,
        }}
      >
        <Table>
          <TableRow>
            <TableCell align='center'>
              검색 분류
            </TableCell>
            <TableCell>
              

            </TableCell>
          </TableRow>
        </Table>
        
       
      </Box>
      <Box>
        <Button>검색</Button>
        <Button>초기화</Button>
      </Box>
      <Box
        sx={{
          width: '70%',
          height: 400,
          borderRadius: 1,
          bgcolor: '#dcdcdc',
          marginTop: 2,
        }}
      >
        
    
      </Box>
      <div style={{height:200}}/>
    </div>
  )
}

export default ProductList