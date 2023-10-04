// src/App.js
import React from 'react';
import { Button, AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My PWA</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" gutterBottom>
          Welcome to My PWA!
        </Typography>
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </Container>
    </div>
  );
}

export default App;
