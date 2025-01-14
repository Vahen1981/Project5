import { Button, CircularProgress, Grid2, Link, Typography, Card, Container, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary.jsx';
import { API_URL } from '../config.js';


const ArtistDetails = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await fetch(`${API_URL}artist/${id}`);
                const data = await response.json();
                setInfo(data);

                const trackResponse = await fetch(`${API_URL}artist/tracklist/${id}`);
                const trackData = await trackResponse.json();
                setTracks(trackData.data);

            } catch (error) {
                setError("Error al cargar los artistas");
                console.error("Error fetching artists:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArtistDetails();
    }, [id]);

    return (
        <ErrorBoundary>
            <div>
                {loading && <CircularProgress sx={{ display: 'block', margin: 'auto' }} />}
                {error && <Typography color="error" sx={{ textAlign: 'center', marginTop: 2 }}>{error}</Typography>}

                {!loading && !error && (
                    <Container
                        sx={{
                            height: { xs: '100%', md: 'calc(100vh - 65px)' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '65px',
                            padding: 0,
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '40px',
                                background: 'linear-gradient(to right, rgba(90, 0, 60, 0.34), rgb(90, 0, 60))',
                                boxShadow: '0px 8px 10px rgb(0, 0, 0)',
                                width: '100%',
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant="h3"
                                gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontFamily: 'Orbitron, serif',
                                    margin: '20px 0 40px',
                                    color: 'rgb(255, 255, 255)',
                                    width: '100%',
                                }}
                            >
                                {info.name}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    alignItems: { xs: 'center', md: 'stretch' },
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: 'auto',
                                    paddingBottom: '7vh' 
                                }}
                                >
                                {/* Imagen del Artista */}
                                <Box
                                    sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: { xs: 4, md: 0 },
                                    width: { xs: '90%', md: '50%' },
                                    height: 'auto' 
                                    }}
                                >
                                    <img
                                    src={info.picture_big}
                                    alt={info.name}
                                    style={{
                                        width: '90%',
                                        height: 'auto',
                                        borderRadius: '20px',
                                        boxShadow: '0px 8px 10px rgb(0, 0, 0)',
                                    }}
                                    />
                                </Box>

                                {/* Información adicional */}
                                <Box
                                    sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: { xs: '90%', md: '50%' },
                                    height: '100%', 
                                    padding: 2,
                                    }}
                                >
                                    <Card sx={{ 
                                            display: 'flex', 
                                            justifyContent: 'space-around', 
                                            alignItems: 'center',  
                                            borderRadius: '20px', 
                                            padding: 3, 
                                            boxShadow: 10, 
                                            width: '90%',
                                            marginBottom: '10%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.36)',
                                            }}
                                        >
                                        {/* Fans */}
                                        <Box                          
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                }}
                                            >
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Oswald',
                                                    marginRight: '20px',
                                                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                                                }}
                                            >
                                                Fans
                                            </Typography>
                                            <Typography variant="h4" color="white" 
                                                sx={{
                                                    margin: 0, 
                                                    fontFamily: 'Oswald',
                                                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                                                    }}
                                                >
                                                {info.nb_fan.toLocaleString()}
                                            </Typography>
                                            
                                        </Box>

                                        {/* Enlace de Deezer */}

                                        <Box
                                            sx={{
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Link
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener"
                                                underline="none"
                                            >
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="large"
                                                    sx={{ fontSize: { xs: '0.5rem', sm: '0.8rem', md: '0.8rem' } }}
                                                >
                                                    Escuchar
                                                </Button>
                                            </Link>
                                        </Box>

                                    </Card>

                                    {/* Tracks populares */}
                                    <Card
                                        sx={{
                                            borderRadius: 2,
                                            padding: 3,
                                            boxShadow: 10,
                                            width: '90%',
                                            textAlign: 'left',
                                            borderRadius: '20px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.36)',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: 'Oswald',
                                                fontWeight: 'bold',
                                                marginBottom: 2,
                                            }}
                                        >
                                            Tracks populares
                                        </Typography>
                                        <ul style={{ paddingLeft: 0, listStyleType: 'none' }}>
                                            {tracks.map((track) => (
                                                <li key={track.id}>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{ fontFamily: 'Oswald', marginBottom: 1 }}
                                                    >
                                                        {track.title}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>

                                </Box>
                            </Box>
                        </Box>
                    </Container>
                )}
            </div>
        </ErrorBoundary>
    );
}

export default ArtistDetails