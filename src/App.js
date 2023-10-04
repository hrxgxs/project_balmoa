import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
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
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h3" style={{ flexGrow: 1, textAlign:'center', fontWeight:'bold' }}>
          공지사항
        </Typography>
      </Container>
      <TimeTable/>
    </div>
  );
}

export default App;
