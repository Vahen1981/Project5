import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ArtistCard from '../components/ArtistCard';
import { getArtists } from '../services/api';

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const data = await getArtists();
        setArtists(data);
      } catch (err) {
        setError('Failed to load artists. Please try again later.');
      }
    };
    fetchArtists();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Metal Artists
      </Typography>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={3}>
          {artists.map((artist) => (
            <Grid item xs={12} sm={6} md={4} key={artist.id}>
              <ArtistCard artist={artist} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
