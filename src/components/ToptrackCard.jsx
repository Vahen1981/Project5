import React from 'react';
import { Card, Typography, CardActionArea, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../pages/ErrorBoundary';

const ToptrackCard = (props) => {
    const { toptrack, index } = props;

    const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/artist/${toptrack.artist.id}`, { state: { toptrack } });
    };

    return (
        <ErrorBoundary>
            <Card sx={{ borderRadius: '8px', boxShadow: 3 }} onClick={handleClick}>
                <CardActionArea>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2, padding: 2 }}>
                        <Typography variant="h5" sx={{
                            border: '2px solid grey',
                            borderRadius: '10px',
                            fontFamily: 'Oswald, serif',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '40px',
                            height: '40px'
                        }}>
                            {index + 1}
                        </Typography>
                        <Box
                            component="img"
                            src={toptrack.artist.picture_medium}
                            alt={toptrack.artist.name}
                            sx={{ width: 40, height: 40, borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                            <Typography variant="h7" sx={{ fontWeight: 'bold', fontFamily: 'Oswald, serif' }}>
                                {toptrack.title}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Oswald, serif' }}>
                                {toptrack.artist.name}
                            </Typography>
                        </Box>
                    </Box>
                    {toptrack.preview && (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}>
                            <audio controls>
                                <source src={toptrack.preview} type="audio/mpeg" />
                                Tu navegador no soporta el elemento de audio.
                            </audio>
                        </Box>
                    )}
                </CardActionArea>
            </Card>
        </ErrorBoundary>
    );
};

export default ToptrackCard;