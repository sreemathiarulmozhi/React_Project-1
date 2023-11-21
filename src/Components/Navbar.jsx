import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import TrainIcon from '@mui/icons-material/Train';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

const pages = ['ABOUT US', 'FAQs', 'TERMS & CONDITIONS', 'SIGNUP', 'LOGIN'];
const settings = ['Profile', 'Dashboard', 'Book Tickets', 'Travel History', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

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

  const handlePageClick = (page) => {
    setSelectedPage(page);
    handleCloseNavMenu(); // Close the menu after clicking a page
  };

  const itemData = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_5CUNKY2PBeqHQ2bs2yn43iURfI0urGxvw&usqp=CAU',
      title: '',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2HUsvs6szwZVPiiKa4GN6bZw_OTFVBGR_g&usqp=CAU',
      title: 'about',
    },
    {
      img: 'https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png',
      title: 'us',
    },
  ];
  const itd = [
    {
      img: 'https://png.pngtree.com/thumb_back/fh260/background/20220308/pngtree-word-cloud-terms-and-conditions-contract-layout-design-photo-image_21672322.jpg',
      title: 'term',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/05/70/25/30/360_F_570253041_iiFfz68Gf46Tm6Yolegi2yjrZMXJh9Ke.jpg',
      title: 'an',
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbET0yuWEpnf6u8GucwtC3qMeTDv6dFENCDw&usqp=CAU',
      title: 'cos',
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02tTF7fLdlZMFFodXkYzmMjznAzR6LyUpCw&usqp=CAU',
      title: 'termss',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewGmNObweAIgvuYYCo0zv9SE6tGpbRoefIQ&usqp=CAU',
      title: 'cons',
    },
  ];
  const td = [
    {
      img: 'https://miro.medium.com/v2/resize:fit:1400/0*fjAGp_YGPXNRI6Zo',
      title: 'faq',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PSiALbFgwirRpevX5ZZRHW_tuhzwON7Qpw&usqp=CAU',
      title: 's',
    },
    {
      img: 'https://searchengineland.com/wp-content/seloads/2015/06/question-ask-faq-raise-hand-ss-1920.jpg',
      title: 'sh',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wqcNV5SDsWsE8mgaIfk1AmDyEVUFibOjuCyaub8X35o-8pjHA-hiER2I3cCwdK4rVUw&usqp=CAU',
      title: 'abc',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" sx={{ padding: '20px', background: 'black' }}>
        <Toolbar disableGutters>
        <TrainIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem', color: 'white' }} />
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
          ></Typography>

          {/* Updated button rendering for pages */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'grey',
                  },
                }}
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
              placeholder="Search..."
              sx={{
                borderRadius: '30px',
                border: '3px solid #ccc',
                paddingLeft: '10px',
                paddingRight: '10px',
                marginRight: '10px',
                color: 'white', // Set dark black color
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Main Content */}
      <Box
        sx={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        
        {selectedPage === 'ABOUT US' && (
          <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'row', // Set the direction to row
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <Box
            sx={{
              border: '10px solid grey',
              padding: '30px',
              height: '150vh',
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'left',
              gap: '16px',
            }}
          >
            <Typography variant="body1">
            <h2>Welcome to "Your Train Travel"</h2>
      <p>
        Welcome to "Your Train Travel", your go-to platform for seamless and
        efficient train ticket bookings. We understand that the journey is just
        as important as the destination, and that's why we are dedicated to
        providing you with a hassle-free and enjoyable travel experience.
      </p>

      <p>
        At "Your Train Travel", we strive to simplify the process of booking
        train tickets, making it convenient and accessible for everyone.
        Whether you're a frequent traveler or planning a special trip, our
        user-friendly interface ensures that you can quickly find and book the
        perfect train tickets to your desired destination.
      </p>

      <h3>Why choose "Your Train Travel" for your train ticket bookings?</h3>

      <ol>
        <li>
          <strong>Ease of Use:</strong> Our platform is designed with you in
          mind. With a simple and intuitive interface, you can navigate through
          our site or app effortlessly, finding the best train options for your
          journey.
        </li>
        <li>
          <strong>Wide Range of Choices:</strong> We offer an extensive
          selection of train routes, ensuring that you can find the most
          convenient and cost-effective options. From high-speed trains to
          scenic routes, we've got you covered.
        </li>
        <li>
          <strong>Real-Time Updates:</strong> Stay informed about your journey
          with real-time updates on train schedules, delays, and platform
          changes. We believe in keeping you in the loop every step of the way.
        </li>
        <li>
          <strong>Secure Booking Process:</strong> Your security is our
          priority. Our robust booking system ensures that your personal
          information is protected, providing you with a safe and secure
          transaction experience.
        </li>
        <li>
          <strong>Customer Support:</strong> Have a question or need
          assistance? Our dedicated customer support team is available to help
          you with any queries or concerns. We believe in delivering excellent
          customer service to enhance your overall experience.
        </li>
      </ol>

      <p>
        At "Your Train Travel", we are passionate about making train travel
        accessible and enjoyable. Whether you're commuting for work, embarking
        on an adventure, or visiting loved ones, we're here to make your journey
        memorable. Join us on the tracks of convenience and reliability – book
        your train tickets with "Your Train Travel" today.
      </p>             
            </Typography>
            </Box>
            <Box sx={{ width: '50%', height: '100vh', marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {itemData.map((item, index) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      marginBottom: '20px',
                      height: 'calc(60vh / 2)', // Set the height dynamically
                      width: '110%',
                    }}
                  />
                  {index < itemData.length - 1 && <div style={{ marginBottom: '10px' }} />} {/* Add gap between images */}
                </ImageListItem>
              ))}
            </Box>
        </Container>
        
        )}
        {selectedPage === 'TERMS & CONDITIONS' && (
          <Container
            maxWidth="xl"
            sx={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
            }}
          >
            <Box
              sx={{
                border: '10px solid darkblue',
                padding: '30px',
                marginTop: '20px',
                height: '300vh',
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                gap: '16px',
              }}
            >
              <Typography variant="body1">
              <h2>Terms and Conditions for Train Ticket Booking System App</h2>
              <p>
                  Welcome to the "Your Train Travel" Train Ticket Booking System App. By
                  using our app, you agree to comply with and be bound by the following
                  terms and conditions. Please read these terms carefully before using the
                  app. If you do not agree with any part of these terms, you may not use
                  our services.
              </p>
              <h3>1. User Eligibility:</h3>
              <ul>
                <li>
                    - You must be at least 18 years old or have the legal capacity to
                    enter into contracts to use our app.
                </li>
                <li>
                    - If you are using the app on behalf of a company or organization, you
                    represent that you have the authority to bind them to these terms.
                </li>
                </ul>
              <h3>2. Booking and Payments:</h3>
              <ul>
                <li>
                    - By using our app to book train tickets, you agree to provide
                    accurate and complete information.
                </li>
                <li>
                    - All payments made through the app are subject to our payment
                    policy. Payment information is securely processed, and we do not
                    store any payment details.
                </li>
             </ul>
             <h3>3. Cancellation and Refunds:</h3>
             <ul>
                <li>
                    - Cancellation policies vary based on the specific train service
                    provider. Please review the cancellation policy associated with your
                    booked tickets.
                </li>
                <li>
                    - Refund eligibility is determined by the terms and conditions of the
                    train service provider.
                </li>
             </ul>
             <h3>4. User Account:</h3>
             <ul>
              <li>
                    - You are responsible for maintaining the confidentiality of your
                    account information.
              </li>
              <li>
                    - Notify us immediately of any unauthorized use or breach of security
                    related to your account.
              </li>
             </ul>
             <h3>5. Intellectual Property:</h3>
             <ul>
              <li>
                    - The app and its original content, features, and functionality are
                    owned by "Your Train Travel" and are protected by international
                    copyright, trademark, patent, trade secret, and other intellectual
                    property or proprietary rights laws.
              </li>
             </ul>
             <h3>6. Prohibited Activities:</h3>
             <ul>
               <li>
                    - You agree not to engage in any unauthorized use of the app,
                    including but not limited to, data mining, scraping, or any other
                    activity that disrupts or interferes with the app's functionality.
               </li>
             </ul>
             <h3>7. Termination:</h3>
             <ul>
               <li>
                    - We reserve the right to terminate or suspend your account and access
                    to the app at our discretion, without prior notice, for any reason,
                    including violation of these terms.
               </li>
             </ul>
             <h3>8. Disclaimer:</h3>
             <ul>
               <li>
                    - We strive to provide accurate and up-to-date information, but we do
                    not guarantee the accuracy, completeness, or reliability of any
                    content on the app.
               </li>
             </ul>
             <h3>9. Limitation of Liability:</h3>
              <ul>
               <li>
                    - "Your Train Travel" shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss
                    of profits or revenues.
               </li>
              </ul>
              <h3>10. Changes to Terms:</h3>
              <ul>
               <li>
                    - We reserve the right to modify or replace these terms at any time.
                    Your continued use of the app after any changes constitutes
                    acceptance of the new terms.
               </li>
              </ul>
              <p>
                  By using the "Your Train Travel" Train Ticket Booking System App, you
                  acknowledge that you have read, understood, and agree to be bound by
                  these terms and conditions. If you have any questions or concerns,
                  please contact our customer support team.
              </p>
              </Typography>
            </Box>
            <Box sx={{ width: '50%', height: '60vh', marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {itd.map((i, ind) => (
                <ImageListItem key={i.img}>
                  <img
                    srcSet={`${i.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${i.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={i.title}
                    loading="lazy"
                    style={{
                      marginBottom: '10px',
                      height: 'calc(200vh / 3)', // Set the height dynamically
                      width: '100%',
                    }}
                  />
                  {ind < itd.length - 1 && <div style={{ marginBottom: '10px' }} />} {/* Add gap between images */}
                </ImageListItem>
              ))}
            </Box>
          </Container>
        )}
        {selectedPage === 'FAQs' && (
          <Container
            maxWidth="xl"
            sx={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'left',
            }}
          >
            <Box
              sx={{
                border: '10px solid lightblue',
                padding: '40px',
                marginTop: '20px',
                height: '200vh',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                gap: '16px',
              }}
            >
              <Typography variant="h3">
                Frequently Asked Questions
              </Typography>
              <Typography variant="body1">
                <strong>Q: What is the purpose of this website?</strong><br />
                A: This website is designed to provide information about train routes, facilitate ticket booking, and offer travel-related services.
              </Typography>
              <Typography variant="body1">
                <strong>Q: How can I book tickets?</strong><br />
                A: To book tickets, go to the 'Book Tickets' section and follow the on-screen instructions to select your route, date, and make the payment.
              </Typography>
              <Typography variant="body1">
              <strong>Q: Can I cancel my booked ticket?</strong><br/>
                A: Yes, you can cancel your booked ticket. Visit the "My Bookings" section, find your booking, and follow the cancellation instructions. Please note that cancellation fees may apply.
              </Typography>
              <Typography variant="body1">
                <strong>Q: What payment methods are accepted?</strong><br />
                A: We accept a variety of payment methods, including credit cards, debit cards, and online payment services. Ensure that your preferred payment method is supported before making a booking.
              </Typography>
              <Typography variant="body1">
                <strong>Q: How can I check the status of my train?</strong><br />
                A: To check the status of your train, visit the "Train Status" page and enter your train number. You will get real-time information about the train\'s arrival and departure.
                </Typography>
              <Typography variant="body1">
                <strong>Q: Are there discounts for group bookings?</strong><br />
                A: Yes, we offer discounts for group bookings. Contact our customer support for more information and assistance with group reservations.
              </Typography>
              <Typography variant="body1">
                <strong>Q: What is the baggage policy for train travel?</strong><br />
                A: Each passenger is allowed a certain amount of baggage. Check our "Baggage Policy" page for details on weight limits, dimensions, and any additional fees for excess baggage.
              </Typography>
              <Typography variant="body1">
                <strong>Q: Can I change my travel date after booking?</strong><br />
                 A: Yes, you can change your travel date. Visit the "My Bookings" section, find your booking, and look for the option to modify your travel date. Keep in mind that date change fees may apply.
              </Typography>
              <Typography variant="body1">
                <strong>Q: Do you offer discounts for senior citizens or students?</strong><br />
                A: Yes, we provide discounts for senior citizens and students. During the booking process, you can select the relevant discount option and provide the necessary details.
              </Typography>
              <Typography variant="body1">
                <strong>Q: What happens if my train is delayed or canceled?</strong><br />
                A: In the event of a train delay or cancellation, we will notify you through the contact information provided during booking. You may be eligible for a refund or rescheduling, depending on the circumstances.
              </Typography>
            </Box>
            <Box sx={{ width: '50%', height: '60vh', marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {td.map((it, inde) => (
                <ImageListItem key={it.img}>
                  <img
                    srcSet={`${it.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${it.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={it.title}
                    loading="lazy"
                    style={{
                      marginBottom: '10px',
                      height: 'calc(200vh / 4)', // Set the height dynamically
                      width: '90%',
                    }}
                  />
                  {inde < td.length - 1 && <div style={{ marginBottom: '10px' }} />} {/* Add gap between images */}
                </ImageListItem>
              ))}
            </Box>
          </Container>
        )}

{selectedPage === 'SIGNUP' && (
          <Container
          component="main"
          maxWidth="50%" // Adjusted the width to make it slightly smaller
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            backgroundImage: "url('https://media.istockphoto.com/id/483928800/photo/railroad-track.jpg?s=612x612&w=0&k=20&c=JeRsKeCKxaJ8jTxa75Q0JlJkTBRwGj_X5S1oTrD5GyA=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <Box
              sx={{
                border: '5px solid black',
                padding: '20px',
                marginTop: '20px',
                height: '60vh',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                gap: '16px',
              }}
            >
              <Typography variant="h3">
                <Link to="/signup">Sign Up</Link>
              </Typography>
              <Typography variant="body1">
                <strong>Welcome to our platform! To create an account, click on the 'SIGNUP' button and provide the required information to get started.</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Already have an account? Click on 'LOGIN' to access your account.</strong>
              </Typography>
            </Box>
          </Container>
        )}

        {selectedPage === 'LOGIN' && (
          <Container
          component="main"
          maxWidth="50%" // Adjusted the width to make it slightly smaller
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            backgroundImage: "url('https://img.pikbest.com/background/20220119/light-snow-winter-train-composite-background_6223276.jpg!sw800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <Box
              sx={{
                border: '5px solid black',
                padding: '20px',
                marginTop: '20px',
                height: '60vh',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                gap: '16px',
              }}
            >
              <Typography variant="h3">
                <Link to="/login">Login</Link>
              </Typography>
              <Typography variant="body1">
                <strong>If you already have an account, click on the 'LOGIN' button and enter your credentials to access your account.</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Forgot your password? No worries! Click on the 'Forgot Password' link to reset it.</strong>
              </Typography>
            </Box>
          </Container>
        )}
      </Box>
    </div>
  );
}
export default Navbar;
