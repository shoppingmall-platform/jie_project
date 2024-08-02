import React from 'react'
import logo from './../jle_logo.jpg';
import { Button , Box, Grid,Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// 메뉴 버튼 (mui Drawer)   user 아이콘 (로그인페이지 연결)   
// 로고        장바구니     검색 
// 
const menuItems = [
    'Best', '[당일발송]', '머슬핏', 'New 5%', 'All', 'Outer', 'Top', 'Shirts', 'Bottom', 'ACC', 'Shoes','[MADE]',  '휴양룩'
  ];
const Header = () => {
  return (
    <Box sx={{flexDirection:'column'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding:'5px'}}>
            <Button
            sx={{color:'black'}}
            startIcon={<MenuIcon />}>
            </Button>
            <Button
            sx={{color:'black'}}
            startIcon={<PersonOutlineOutlinedIcon />}>
            </Button>
            <Box>
                <img src={logo} style={{ width: '80px', height: '40px'}}/>
            </Box>
            <Button
            sx={{color:'black'}}
            startIcon={<ShoppingBagOutlinedIcon />}>
            </Button>
            <Button
            sx={{color:'black'}}
            startIcon={<SearchIcon />}>
            </Button>
        </Box>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
            <Grid container spacing={0.5}>
                {menuItems.map((item, index) => (
                <Grid item xs={3} key={index}> {/* 모바일에서도 4칸씩 배치 */}
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80%',
                        padding: 1,
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        '&:hover': {
                        backgroundColor: 'primary.light',
                        }
                    }}
                    >
                    <Typography
                        variant="body1"
                        sx={{
                        fontSize: '0.575rem', // 모바일에서의 폰트 크기 조정
                        }}
                    >
                        {item}
                    </Typography>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
  )
}

export default Header