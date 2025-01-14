import { Box, Container, IconButton, Typography } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <Container sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
          <Box sx={{
              width: '100%',
              height: { xs: '50vh', sm: '50vh', md: '50vh' },
              background: 'linear-gradient(to right,rgba(90, 0, 60, 0.34),rgb(90, 0, 60))',
              border: '3px solid black',
              borderRadius: '20px', 
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '20px', sm: '40px' }, 
          }}>
              <Typography variant='h4' sx={{
                  color: 'white',
                  fontFamily: 'Oswald',
                  marginBottom: { xs: '20px', sm: '50px' }, 
                  fontSize: { xs: '20px', sm: '30px', md:'40px' }, 
              }}>
                  Bienvenidos a
              </Typography>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
                  <HeadphonesIcon sx={{
                      fontSize: { xs: '40px', sm: '50px', md: '80px'},
                      color: 'white',
                      marginBottom: { xs: '10px', sm: '0' }, 
                  }} />
                  <Typography variant='h1' sx={{
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: { xs: '40px', sm: '50px', md: '80px'}, 
                  }}>
                      MusicSkills
                  </Typography>
              </Box>
              <Typography variant='h5' sx={{
                  color: 'white',
                  fontFamily: 'Oswald',
                  fontWeight: 'light',
                  marginTop: { xs: '30px', sm: '70px' }, 
                  fontSize: { xs: '15px', sm: '20px', md: '30px' },
              }}>
                  La mayor biblioteca musical de latinoamérica!
              </Typography>
              <Link to="/genres" style={{ textDecoration: 'none' }}>
                  <IconButton sx={{
                      backgroundColor: '#6200ea',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                          backgroundColor: '#3700b3',
                          transform: 'scale(1.1)',
                      },
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: { xs: '20px', sm: '30px' }, 
                  }}>
                      Entrar
                  </IconButton>
              </Link>
          </Box>
      </Container>
    );
  }
  
  export default Home;