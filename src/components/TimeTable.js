import React, { useState } from 'react';
import { Container, Grid, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';


const TimeTable = () => {
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
        // 예약을 처리하는 로직을 추가
        // 이 예시에서는 선택한 시간과 예약자 정보를 reservationList에 추가
        setReservationList([...reservationList, { time: selectedTime, user: '사용자 이름' }]);
        setOpen(false);
      };
    
  return (
    <div>
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          {/* 타임 테이블 생성 */}
          <Grid item xs={12}>
            {['09:00 ~ 10:00', '10:00 ~ 11:00', '11:00 ~ 12:00', '12:00 ~ 13:00', '13:00 ~ 14:00', 
              '14:00 ~ 15:00', '15:00 ~ 16:00', '16:00 ~ 17:00', '17:00 ~ 18:00', '18:00 ~ 19:00',
              '19:00 ~ 20:00', '20:00 ~ 21: 00', '21:00 ~ 22:00'].map((time) => (
              <Grid item xs={12} key={time}>
                <Button variant="contained" fullWidth onClick={() => handleOpenDialog(time)} style={{ marginTop: '5px', fontWeight:'bold' }}>
                  {time}
                </Button>
              </Grid>
            ))}
          </Grid>
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
  )
}

export default TimeTable
