import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography, CircularProgress, Alert, Box } from '@mui/material';
import ToptrackCard from '../components/ToptrackCard.jsx';
import ArtistCard from '../components/ArtistCard.jsx';
import TopOneCard from '../components/TopOneCard.jsx';

//Url en servidor local
const API_URL = 'http://localhost:3000/api/';

//Url en servidor en render
//const API_URL = 'https://servidor-para-deezer.onrender.com/api/';

const TopTracks = () => {
  const [toptracks, setToptracks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(`${API_URL}/top`);
        const data = await response.json();
        setToptracks(data.tracks.data);
      } catch (error) {
        console.error("Error al obtener los top tracks: ", error);
        setError("No se pudieron obtener los top tracks");
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
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
      <Container sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.71)',
        backdropFilter: 'blur(6px)',
      }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif', marginTop: '50px', marginBottom: '50px', color: 'white'}}>
          Top tracks
        </Typography>
        {loading && <CircularProgress />}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && (
          <Grid2 container spacing={10} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
            <TopOneCard artist={toptracks[0]} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {toptracks.map((toptrack, index) => (
                <ToptrackCard toptrack={toptrack} index={index} key={toptrack.id} />
            ))}
            </Box>
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default TopTracks;

