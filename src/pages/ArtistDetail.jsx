import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { getArtistDetails } from '../services/api';

const ArtistDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const data = await getArtistDetails(id);
        setArtist(data);
      } catch (err) {
        setError('Failed to load artist details. Please try again later.');
      }
    };
    fetchArtistDetails();
  }, [id]);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!artist) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {artist.name}
      </Typography>
      <Grid container spacing={3}>
        {artist.albums?.data.map((album) => (
          <Grid item xs={12} sm={6} md={4} key={album.id}>
            <Card onClick={() => navigate(`/album/${album.id}`)}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={album.cover_medium} alt={album.title} />
                <CardContent>
                  <Typography variant="h6">{album.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArtistDetail;
