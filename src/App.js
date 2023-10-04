import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [reservationList, setReservationList] = useState([]);

  const handleOpenDialog = (time) => {
    setSelectedTime(time);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleReservation = () => {
    // 예약을 처리하는 로직을 추가합니다.
    // 이 예시에서는 선택한 시간과 예약자 정보를 reservationList에 추가합니다.
    setReservationList([...reservationList, { time: selectedTime, user: '사용자 이름' }]);
    setOpen(false);
  };

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
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          {/* 타임 테이블 생성 */}
          {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map((time) => (
            <Grid item xs={4} key={time}>
              <Button variant="contained" fullWidth onClick={() => handleOpenDialog(time)}>
                {time}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* 예약 다이얼로그 */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>예약 정보 입력</DialogTitle>
        <DialogContent>
          <TextField
            label="사용자 이름"
            fullWidth
            margin="normal"
            variant="outlined"
            // onChange={(e) => setSelectedUser(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleReservation}>
            예약하기
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
