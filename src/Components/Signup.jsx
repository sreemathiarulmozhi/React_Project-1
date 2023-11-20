import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Link } from '@mui/material';

const Signup = () => {
  const [yourname, setYourname] = useState('');
  const [username, setUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [Createpassword, setCreatePassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { yourname, phonenumber, username, email, Createpassword, confirmpassword });
  };

  return (
    <Container
      component="main"
      maxWidth="50%"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('https://images7.alphacoders.com/661/661783.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography component="h4" variant="h5" textAlign={'center'} fontWeight={'bold'} fontSize={'30px'}>
        TROUVAILLE WITH US
      </Typography>
      <Paper elevation={10} style={{ padding: '30px', display: 'flex-start', flexDirection: 'column', alignItems: 'center', height: "600px", width: "60vh" }}>
        <Typography component="h4" variant="h5" textAlign={'center'} fontWeight={'bold'} fontSize={'20px'}>
          Sign up!!
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={yourname}
          onChange={(e) => setYourname(e.target.value)}
        />
        <TextField
          label="PhoneNumber"
          variant="outlined"
          margin="normal"
          fullWidth
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Create Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={Createpassword}
          onChange={(o) => setCreatePassword(o.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={confirmpassword}
          onChange={(o) => setConfirmPassword(o.target.value)}
        />
        <Typography>
          <Link color="primary" href="https://mui.com/">
            Already a User? Login!!
          </Link>{' '}
        </Typography>
        <Button variant="contained" style={{ fontWeight: 'bold', marginTop: '20px' }} color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Signup;
