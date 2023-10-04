import React from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import Button2 from 'react-bootstrap/Button';
function App() {
  return (
    <Container>
      <Typography variant="h2">Hello, Material-UI</Typography>
      <TextField label="Name" />
      <Button variant="contained" color="primary">
        Hello
      </Button>
      <Button2>
        Click me bootstrap
      </Button2>
    </Container>
  );
}

export default App;
