import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Card, CardMedia } from '@mui/material';
import { getAlbumDetails } from '../services/api';

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const data = await getAlbumDetails(id);
        setAlbum(data);
      } catch (err) {
        setError('Failed to load album details. Please try again later.');
      }
    };
    fetchAlbumDetails();
  }, [id]);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!album) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {album.title}
      </Typography>
      <Card>
        <CardMedia component="img" height="300" image={album.cover_big} alt={album.title} />
      </Card>
      <Typography variant="h5" gutterBottom>
        Tracks
      </Typography>
      <List>
        {album.tracks.data.map((track) => (
          <ListItem key={track.id}>
            <ListItemText primary={`${track.title} (${track.duration}s)`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AlbumDetail;
