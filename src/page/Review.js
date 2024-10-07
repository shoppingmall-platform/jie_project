import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ReviewCard from '../component/ReviewCard';
import {Box , Divider, Typography} from '@mui/material';


const Review = () => {
  return (
    <Box>
      <Box sx={{display:"flex", flexDirection:"row", alignItems: "center"}}>
        <NavigateBeforeIcon/>
        <Typography align='center' sx={{ flexGrow: 1 }}>Review</Typography>
      </Box>
      <Divider/>
      <Box>
      <Typography align='center' variant="body2" sx={{marginTop:"10px", color:'gray'}} >상품 사용후기입니다.</Typography>
      <ReviewCard/>
      </Box>
    </Box>
  )
}

export default Review