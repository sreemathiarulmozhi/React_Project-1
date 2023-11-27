import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {Button, Container, Paper, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
const Booking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [from, setFrom] = useState(''); 
  const [to, setTo] = useState('');     
  const [seats, setSeats] = useState(''); 

  const handleLogin = () => {
    console.log('Logging in with:', { from, to, seats, date });
  };

  return (
    <Container
      component="main"
      maxWidth="50%"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage: "url('https://wallpapercave.com/wp/eoYUm1b.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={10}
        style={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '500px',
          color: 'ActiveCaption',
          width: '30%',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          <strong>Book Your Tickets!!!</strong>
        </Typography>
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <Typography variant="h6" style={{ color:'black', marginBottom: '10px' }}>
            <strong>From:</strong>
          </Typography>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="">Select...</option>
            <option value="Madurai">madurai</option>
            <option value="Salem">Salem</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            <option value="Tirupur">Tirupur</option>
            <option value="Trichy">Trichy</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px', width: '100%' }}>
          <Typography variant="h6" style={{ color:'black', marginBottom: '10px' }}>
            <strong>Destination:</strong>
          </Typography>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
                <option value="">Select...</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Chennai">Chennai</option>
                <option value="Salem">Salem</option>
                <option value="Madurai">Madurai</option>
            <option value="Tirupur">Tirupur</option>
            <option value="Trichy">Trichy</option>
                
              </select>
            </div>
        
            <div style={{ marginBottom: '20px', width: '100%' }}>
          <Typography variant="h6" style={{ color:'black', marginBottom: '10px' }}>
            <strong>Seats Required:</strong>
          </Typography>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
                
              </select>
            </div>
            <div style={{ marginBottom: '20px', width: '100%' }}>
          <Typography variant="h6" style={{ color: 'black', marginBottom: '10px' }}>
            <strong>Date and Time:</strong>
          </Typography>
        <DatePicker 
          showTimeSelect
          minTime={new Date(0, 0, 0, 12, 30)}
          maxTime={new Date(0, 0, 0, 19, 0)}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="MMMM d, yyyy h:mmaa"
          className="custom-datepicker" // Add a custom class
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: 'black', // Customize background color
              color: '#333', // Customize text color
            }}
        />
            </div>
   <Link to="/Payment" >   <Button
          variant="contained"
          style={{ fontWeight: 'bold' }}
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Confirm
        </Button></Link>
      </Paper>
    </Container>
  );
};

export default Booking;