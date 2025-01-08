import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography, CircularProgress, Alert, Box } from '@mui/material';
import GenreCard from '../components/GenreCard.jsx';

const API_URL = 'http://localhost:3000/api/';

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setGenres(data.data);
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
        setError("No se pudieron obtener los géneros");
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    }}
    >
      <Container>
        <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif' }}>
          Géneros musicales
        </Typography>
        {loading && <CircularProgress />}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && (
          <Grid2 container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {genres.map((genre) => (
              <Grid2 xs={12} sm={6} md={4} key={genre.id}>
                <GenreCard genre={genre} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default Home;

