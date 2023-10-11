import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TimeTable from './components/TimeTable';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AddCircleIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign:'center', fontWeight:'bold' }}>
            Balmoa
          </Typography>
          <IconButton color = "inherit">
            <CameraAltIcon/>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h3" style={{ flexGrow: 1, textAlign:'center', fontWeight:'bold', marginTop:'20px' }}>
          공지사항 + 알림사항
        </Typography>
      </Container>
      <TimeTable/>
    </div>
  );
}

export default App;
