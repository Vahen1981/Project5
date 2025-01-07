import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/artist/${artist.id}`)}>
      <CardActionArea>
        <CardMedia component="img" height="160" image={artist.picture_medium} alt={artist.name} sx={{ objectFit: 'contain' }}/>
        <CardContent>          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{artist.name}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArtistCard;
