import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GenreCard = (props) => {

  const { genre } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/genre/${genre.id}`, { state: { genre } });
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="200"
          image={genre.picture_medium} 
          alt={genre.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif' }}>
            {genre.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GenreCard;