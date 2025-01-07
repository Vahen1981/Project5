import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography, CircularProgress, Alert, Box } from '@mui/material';
import ArtistCard from '../components/ArtistCard.jsx';

const API_URL = 'http://localhost:3000/api/deezer-artists';

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setArtists(data.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
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
      minHeight: '100vh', // Para ocupar toda la altura de la ventana
      textAlign: 'center', // Centrar texto dentro de elementos
    }}
    >
      <Container>
        <Typography variant="h4" gutterBottom>
          Metal Artists
        </Typography>

        {/* Mostrar cargando */}
        {loading && <CircularProgress />}

        {/* Mostrar errores */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* Mostrar artistas */}
        {!loading && !error && (
          <Grid2 container spacing={3}>
            {artists.map((artist) => (
              <Grid2 item xs={12} sm={6} md={4} key={artist.id}>
                <ArtistCard artist={artist} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default Home;

