import { Grid, Box, Paper, Divider} from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'


//상품 대시보드 
//상품 현황 박스 - 전체 등록 상품 n개, 판매 중인 상품 n개, 품절 상품 , 삭제 상품
const ProductMain = () => {

  const Item = styled(Paper)(({ theme }) => ({
    height:100,
    
    backgroundColor: '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  
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
      <p style={{ fontSize: '25px' , marginLeft:'-60%'}}>상품 대시보드</p>
      <Box
        sx={{
          width: '70%',
          height: 400,
          borderRadius: 1,
          bgcolor: '#dcdcdc',
          display: 'flex',
          
          alignContent:'center',
          marginTop: 2,
          flexDirection:'column'
        }}
      >
        <span style={{ fontSize:'20px', margin:30}}>상품 현황</span> 
        <Divider/>
        <Box sx={{ width: '90%',height:'100%',margin:'5%', display:'flex'}}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '100%',marginLeft:'25px',display:'flex', justifyContent:'center', alignContent:'center'}}>
            <Grid item xs={6}>
              <Item>전체 등록 상품<p style={{fontSize:30, marginTop:12, color:'black'}}>5개</p></Item>
            </Grid>
            <Grid item xs={6}>
              <Item>판매 중인 상품<p style={{fontSize:30, marginTop:12, color:'black'}}>5개</p></Item>
            </Grid>
            <Grid item xs={6}>
              <Item>품절 상품<p style={{fontSize:30, marginTop:12, color:'red'}}>5개</p></Item>
            </Grid>
            <Grid item xs={6}>
              <Item>삭제 상품<p style={{fontSize:30, marginTop:12, color:'red'}}>5개</p></Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default ProductMain