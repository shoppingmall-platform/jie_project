import {React,useState} from 'react'
import { Grid, Box, Paper, Button, Table, TableRow, TableCell, FormControl, Select } from '@mui/material'
import { TableBar } from '@mui/icons-material'
import BBox from '../../component/BBox'

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
          marginTop: 2,
          bgcolor: '#ffffff', // 흰색 배경
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // 부드러운 그림자
          border: '1px solid #e0e0e0',
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

export default ProductList