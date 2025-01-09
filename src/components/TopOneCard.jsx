import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopOneCard = ({ artist }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist/${artist.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3 }} onClick={handleClick}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif' }}>
          Top 1
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="300"
        image={artist.artist.picture_big}
        alt={artist.artist.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ textAlign: 'left' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
          {artist.title}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
          Artista:  {artist.artist.name}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
          Album:  {artist.album.title}
        </Typography>
                    
        {artist.preview && (
            <Box sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'flex-end' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
                Audio demo
            </Typography>
            <audio controls>
                <source src={artist.preview} type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>
            </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TopOneCard;
