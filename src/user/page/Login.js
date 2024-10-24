import { Divider, Box, Button, Checkbox, Container, FormControlLabel,Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AppleIcon from '@mui/icons-material/Apple';
//아이디와 비밀번호를 입력해야 로그인버튼 활성화
//유효성검사 필요
//로그인 성공 시 페이지 이동

const Login = () => {
  //theme
  return (
    <Container maxWidth="xs">
      <Typography align='center' >로그인</Typography>
      <Divider />
      <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          marginTop:'20px'
        }}>
        <Box>
          <TextField
              size='small'
              variant ='standard'
              margin="dense"
              required
              fullWidth
              id="email"
              label="ID"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              size='small'
              variant ='standard'
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control = {<Checkbox value="remember" color='primary'/>}
              label={<span style={{ fontSize: '14px' }}>로그인 상태 유지</span>}
            />
            <Button 
              fullWidth 
              sx={{margin:'10px', backgroundColor:'black', color:'white', marginBottom:'20px'}}>
                Login
            </Button>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button fullWidth> 회원가입 </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth> 아이디 찾기 </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth> 비밀번호 찾기 </Button>
              </Grid>
            </Grid>
            <Box sx={{marginTop:'30px'}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button 
                    fullWidth
                    sx={{color:'black'}}
                    startIcon={<MenuIcon />}
                    > 네이버로 로그인 </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    fullWidth
                    sx={{color:'black'}}
                    startIcon={<MenuIcon />}> 카카오로 로그인 </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    fullWidth
                    sx={{color:'black'}}
                    startIcon={<AppleIcon />}> Apple로 로그인 </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    </Container>

  )
}

export default Login;