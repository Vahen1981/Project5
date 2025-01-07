import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/artist/${artist.id}`)}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={artist.picture_medium} alt={artist.name} />
        <CardContent>
          <Typography variant="h6">{artist.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArtistCard;
