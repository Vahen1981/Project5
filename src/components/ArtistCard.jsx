import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../pages/ErrorBoundary';

const ArtistCard = (props) => {
  const { artist } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/artist/${artist.id}`);
  };

  return (
    <ErrorBoundary>
      <CardActionArea>
        <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3 }} onClick={handleClick}>
          <CardMedia
            component="img"
            height="200"
            image={artist.picture_medium}
            alt={artist.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif' }}>
              {artist.name}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </ErrorBoundary>
  );
};

export default ArtistCard;
