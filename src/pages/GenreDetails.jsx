import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Box, Grid2, CircularProgress, Typography } from '@mui/material';
import ArtistCard from '../components/ArtistCard';


const GenreDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const genre = state?.genre;

  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/genre/${id}`);
        const data = await response.json();
        setArtists(data.data);
      } catch (error) {
        setError("Error al cargar los artistas");
        console.error("Error fetching artists:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, [id]); 

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
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif', textAlign: 'center', marginBottom: 2 }}>
          Artistas de {genre.name}
        </Typography>

        {loading && <CircularProgress sx={{ display: 'block', margin: 'auto' }} />}
        
        {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}

        {!loading && !error && (
          <Grid2 container spacing={3} sx={{ justifyContent: 'center' }}>
            {artists.map(artist => (
              <Grid2 xs={12} sm={6} md={4} key={artist.id}>
                <ArtistCard artist={artist} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default GenreDetails;
