import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid2, CircularProgress, Typography } from '@mui/material';
import ArtistCard from '../components/ArtistCard';


const GenreDetails = () => {
  const { id } = useParams();
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${id}`);
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
    <div>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Artistas de este Género
      </Typography>

      {loading && <CircularProgress sx={{ display: 'block', margin: 'auto' }} />}
      {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}

      {!loading && !error && (
        <Grid2 container spacing={3} sx={{ justifyContent: 'center' }}>
          {artists.map(artist => (
            <Grid2 xs={12} sm={6} md={4} key={artist.id}>
              <ArtistCard artist={artist} /> {/* Mostrar la tarjeta del artista */}
            </Grid2>
          ))}
        </Grid2>
      )}
    </div>
  );
};

export default GenreDetails;
