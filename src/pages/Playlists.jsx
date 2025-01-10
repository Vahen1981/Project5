import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography, CircularProgress, Alert, Box } from '@mui/material';
import GenreCard from '../components/GenreCard.jsx';

//Url en servidor local
const API_URL = 'http://localhost:3000/api/';

//Url en servidor en render
//const API_URL = 'https://servidor-para-deezer.onrender.com/api/';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPlaylists(data.data);
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
        setError("No se pudieron obtener los géneros");
      } finally {
        setLoading(false);
      }
    };
    fetchPlaylists();
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
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif' }}>
          Playlists populares
        </Typography>
        {loading && <CircularProgress />}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && (
          <Grid2 container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {playlists.map((playlist) => (
              <Grid2 xs={12} sm={6} md={4} key={playlist.id}>
                <GenreCard playlist={playlist} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default Playlists;