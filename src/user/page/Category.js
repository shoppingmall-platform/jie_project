import React from 'react'
import { useParams } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Box , Divider, Typography} from '@mui/material';

//데이터베이스에서 카테고리 id를 url에서 받아오고, id 안에 들어있는 카테고리 name, 상품들을 보여줌
const menuItems = [
    'Best', '[당일발송]', '머슬핏', 'New 5%', 'All', 'Outer', 'Top', 'Shirts', 'Bottom', 'ACC', 'Shoes','[MADE]',  '휴양룩'
  ];

const Category = () => {
  const { cateNo } = useParams();
  const categoryIndex = parseInt(cateNo) - 1; // cateNo는 1부터 시작하지만 배열은 0부터 시작하므로 인덱스를 맞춰줌
  const categoryName = menuItems[categoryIndex];
  return (
    <Box>
      <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}}>
        <NavigateBeforeIcon/>
        <Typography align='center' sx={{ flexGrow: 1 }}>{categoryName ? categoryName : 'Unknown Category'}</Typography>
      </Box>
      <Divider/>
      <Box>
      <Typography align='center' variant="body2" sx={{marginTop:"10px", color:'gray'}} ></Typography>
      </Box>
    </Box>
  )
}

export default Category