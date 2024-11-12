import { Box } from '@mui/material';

const BBox = ({ children, width = '40%', height = '100%' }) => (
  <Box
    sx={{
      width: width,
      height: height,
      borderRadius: 1,
      marginTop: 2,
      bgcolor: '#ffffff', // 흰색 배경
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // 부드러운 그림자
      border: '1px solid #e0e0e0', // 부드러운 회색 테두리
    }}
  >
    {children}
  </Box>
);

export default BBox;