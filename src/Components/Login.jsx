import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Link, Grid } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { username, password, email });
  };

  return (
    <Container
      component="main"
      maxWidth="50%" // Adjusted the width to make it slightly smaller
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/1010/529/desktop-wallpaper-full-train-backgrounds-1920x1080-railway.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container justifyContent="center" spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: '#4285F4', color: 'white' }}
            onClick={() => console.log('Google button clicked')}
            startIcon={<GoogleIcon style={{ color: 'blue' }} />} // Make the Google icon colorful
          >
            Google
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: '#0078D4', color: 'white' }}
            onClick={() => console.log('Microsoft button clicked')}
            startIcon={<MicrosoftIcon style={{ color: 'red' }} />} // Make the Microsoft icon colorful
          >
            Microsoft
          </Button>
        </Grid>
      </Grid>
      <Paper
        elevation={10}
        style={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '250px',
          color: 'ActiveCaption',
          width: '30%', // Adjusted the width to make it slightly smaller
        }}
      >
        <Typography component="h4" variant="h5">
          Login
        </Typography>
        <TextField
          label="Username/Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username || email}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(o) => setPassword(o.target.value)}
        />
        <Button
          variant="contained"
          style={{ fontWeight: 'bold' }}
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
