import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist/${artist.id}`);
  };

  return (
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
  );
};

export default ArtistCard;
