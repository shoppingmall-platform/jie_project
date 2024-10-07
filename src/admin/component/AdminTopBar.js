import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar, Box, Toolbar, IconButton, Typography, Container, Avatar, Button, Tooltip} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
const pages = ['상품관리', '고객관리', '주문/배송'];

function AdminTopBar() {
  const navigate = useNavigate();  
  const handleNavigation = (page) => {
    switch (page) {
      case '상품관리':
        navigate('/admin/products');
        break;
      case '고객관리':
        navigate('/admin/users');
        break;
      case '주문/배송':
        navigate('/admin/orders');
        break;
      
      default:
        break;
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/admin"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Admin
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton href="/" sx={{ p: 2 }}>
                <HomeIcon />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://i1.sndcdn.com/artworks-Z5SLEGyINrvdjrkz-CQbgFA-t500x500.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminTopBar;
