import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';
import InputBase from '@mui/material/InputBase';

const pages = ['ABOUT US', 'FAQs', 'SIGNUP', 'LOGIN'];
const settings = ['Profile', 'Dashboard', 'Book Tickets', 'Travel History', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" sx={{ padding: '20px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.20rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

            {/* Updated button rendering for pages */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page === 'SIGNUP' || page === 'LOGIN' ? (
                    <Typography variant="body1">{page}</Typography>
                  ) : (
                    page
                  )}
                </Button>
              ))}
            </Box>
            {/* Search Bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search"
              sx={{
                borderRadius: '30px',
                border: '3px solid #ccc',
                paddingLeft: '10px',
                paddingRight: '10px',
                marginRight: '10px',
                color: '#000000', // Set dark black color
                fontWeight: 'bold', // Set to bold
              }}
            />
            <IconButton sx={{ color: 'white' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 3 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}
      >
         <Container maxWidth="xl" sx={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
        <Box sx={{ border: '10px solid black', padding: '20px', marginTop: '20px',height: "60vh",width: "50%",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "leftr",gap: "16px"}}>
          <Typography variant="body1">
            <h4>
            The popularity of train routes and journeys can vary based on factors such as geography,
            cultural significance, tourist attractions, and economic activities.
            However, there are some iconic and popular train routes globally that are known for their
            scenic beauty and cultural significance.
            The invention of the train is credited to George Stephenson,
            an English engineer often referred to as the "Father of Railways."
            The development of the first steam locomotive and its successful use on a
            public railway marked a significant milestone in the history of transportation.
            Here are key events leading to the invention of the train:

            <h3>Early Steam Engines:</h3>
            Steam engines had been developed and used in various industries,
            such as mining and textile, during the 18th century.
            Engineers and inventors were exploring ways to harness steam power for transportation.
            The invention of the steam locomotive and the subsequent expansion of railway
            networks revolutionized transportation, contributing to the Industrial Revolution
            and shaping the modern world.
            The impact of the train on commerce, industry, and society was profound,
            and railways remain a crucial part of global transportation systems today.
            </h4>
          </Typography>
        </Box>
      </Container>
      </Container>
    </div>
  );
}
export default Navbar;
