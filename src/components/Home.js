import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Container, Button } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import TimeTable from './TimeTable';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const goPage = useNavigate();
    const goToSequrity = () => {
        goPage('/SequrityPage');
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton color = "inherit" onClick={goToSequrity}>
                        <SecurityIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1, textAlign:'center', fontWeight:'bold' }}>
                    발모아
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
  )
}

export default Home