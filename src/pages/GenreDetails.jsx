import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Box, Grid2, CircularProgress, Typography } from '@mui/material';
import ArtistCard from '../components/ArtistCard.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { API_URL } from '../config.js';


const GenreDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const genre = state?.genre;

  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenreDetails = async () => {
      try {
        const response = await fetch(`${API_URL}genre/${id}`);
        const data = await response.json();
        setArtists(data.data);
      } catch (error) {
        setError("Error al cargar los artistas");
        console.error("Error fetching artists:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGenreDetails();
  }, [id]);

  return (
    <ErrorBoundary>
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
        <Container sx={{
          backdropFilter: 'blur(6px)',
          background: 'linear-gradient(to right,rgba(90, 0, 60, 0.34),rgb(90, 0, 60))',
          borderLeft: '3px solid black',
          borderRight: '3px solid black',
          paddingTop: '50px'
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif', textAlign: 'center', margin: '70px 0', color: 'rgb(255, 255, 255)' }}>
            Artistas de {genre.name}
          </Typography>

          {loading && <CircularProgress sx={{ display: 'block', margin: 'auto' }} />}

          {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}

          {!loading && !error && (
            <Grid2 container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', paddingBottom: '10vh' }}>
              {artists.map(artist => (
                <Grid2 xs={12} sm={6} md={4} key={artist.id}>
                  <ArtistCard artist={artist} />
                </Grid2>
              ))}
            </Grid2>
          )}
        </Container>
      </Box>
    </ErrorBoundary>
  );
};

export default GenreDetails;
