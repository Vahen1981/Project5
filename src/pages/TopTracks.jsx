import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography, CircularProgress, Alert, Box } from '@mui/material';
import ToptrackCard from '../components/ToptrackCard.jsx';
import TopOneCard from '../components/TopOneCard.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { API_URL } from '../config.js';


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
          background: 'linear-gradient(to right,rgba(90, 0, 60, 0.34),rgb(90, 0, 60))',
          borderLeft: '3px solid black',
          borderRight: '3px solid black',
          backdropFilter: 'blur(6px)',
          paddingTop: '50px'
        }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif', marginTop: '50px', marginBottom: '50px', color: 'white' }}>
            Top tracks
          </Typography>
          {loading && <CircularProgress />}

          {error && <Alert severity="error">{error}</Alert>}

          {!loading && !error && (
            <Grid2 container spacing={10} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
              <TopOneCard numberOne={toptracks[0]} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {toptracks.map((toptrack, index) => (
                  <ToptrackCard toptrack={toptrack} index={index} key={toptrack.id} />
                ))}
              </Box>
            </Grid2>
          )}
        </Container>
      </Box>
    </ErrorBoundary>
  );
};

export default TopTracks;

