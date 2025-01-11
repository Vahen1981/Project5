import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../pages/ErrorBoundary';

const TopOneCard = (props) => {
  const { numberOne } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/artist/${numberOne.artist.id}`);
  };

  return (
    <ErrorBoundary>
      <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3 }} onClick={handleClick}>
        <CardActionArea>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif' }}>
              Top 1
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="300"
            image={numberOne.artist.picture_big}
            alt={numberOne.artist.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
              {numberOne.title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
              Artista:  {numberOne.artist.name}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
              Album:  {numberOne.album.title}
            </Typography>

            {numberOne.preview && (
              <Box sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
                  Audio demo
                </Typography>
                <audio controls>
                  <source src={numberOne.preview} type="audio/mpeg" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </ErrorBoundary>
  );
};

export default TopOneCard;
