import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormHelperText } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a color="inherit" href="https://www.yc.ac.kr/smartsw/web/main/mainPage.do">
        SW
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
const navigate = useNavigate();
const [emailError, setEmailError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!emailRegex.test(email)) 
    setEmailError("올바른 이메일 형식이 아닙니다.")
    else setEmailError("")
    await axios.post("http:/localhost:3000" + {email : email})
                .then((response) => {
                    console.log("email" + response.data.email);
                    console.log("password" + response.data.password)
                })
                .catch((error) => {
                    alert("서버로의 전송을 실패했습니다")
                })
    await axios.get("http:localhost:3000")
                .then((response) => {
                    if(password === response.data.password){
                        navigate('/Home')
                    }
                })
                .catch((error) => {
                    alert("실패 실패 실패")
                })
    console.log({
      email: email,
      password: password,
    });

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error = {emailError !== "" || false}
            />
            <FormHelperText>{emailError}</FormHelperText>
            <Button variant="contained">인증코드 전송</Button>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="인증번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/SequrityPage" variant="body2">
                  관리자이십니까?
                </Link>
              </Grid>
              <Grid item>
                <Link to = "/Home" variant = "body2">
                  테스트용 로그인
                </Link>
              </Grid>
              </Grid>
              
          </Box>
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}