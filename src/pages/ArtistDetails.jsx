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
                {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}

                {!loading && !error && (

                    <Container sx={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            padding: '30px',
                            borderRadius: '30px',
                            background: 'linear-gradient(to right,rgba(90, 0, 60, 0.34),rgb(90, 0, 60))',
                            border: '3px solid black',
                        }}>
                            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Orbitron, serif', margin: '20px 0 50px 0', color: 'rgb(255, 255, 255)' }}>
                                {info.name}
                            </Typography>

                            <Grid2
                                container
                                spacing={4}
                                sx={{
                                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}
                            >

                                <Grid2
                                xs={12}
                                md={6}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: { xs: 4, md: 0 }, 
                                }}
                                >
                                <img
                                    src={info.picture_big}
                                    alt={info.name}
                                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px', border: '3px solid black'}}
                                />
                                </Grid2>

                                <Grid2 xs={12} md={6}>
                                    <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
    
                                        <Grid2 xs={12} sx={{marginBottom: '20px'}}>
                                            <Card sx={{ border: '3px solid black', borderRadius: '20px', textAlign: 'center', padding: 3, boxShadow: 3, height: '60%' }}>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Oswald', marginBottom: 2 }}>
                                                    Fans
                                                </Typography>
                                                <Typography variant="h6" color="primary">
                                                    {info.nb_fan.toLocaleString()}
                                                </Typography>
                                            </Card>
                                        </Grid2>

                                        <Grid2 xs={12} sx={{marginBottom: '20px'}}>
                                            <Card sx={{ border: '3px solid black', borderRadius: '20px', textAlign: 'center', padding: 3, boxShadow: 3, height: '60%' }}>
                                                <Typography variant="h5" sx={{ fontFamily: 'Oswald', fontWeight: 'bold', marginBottom: 2 }}>
                                                Música
                                                </Typography>
                                                <Link href={info.link} target="_blank" rel="noopener" underline="none">
                                                <Button variant="contained" color="primary" size="large" sx={{fontSize: '10px'}}>
                                                    Escuchar en Deezer
                                                </Button>
                                                </Link>
                                            </Card>
                                        </Grid2>
                                    </Grid2>

                                    <Grid2 xs={12}>
                                        <Card sx={{ border: '3px solid black', borderRadius: '20px', textAlign: 'right', padding: 3, boxShadow: 3, maxWidth: '330px' }}>
                                            <Typography variant="h6" sx={{ fontFamily: 'Oswald', fontWeight: 'bold', marginBottom: 2 }}>
                                            Tracks populares
                                            </Typography>
                                            <ul style={{ paddingLeft: 0, listStyleType: 'none' }}>
                                            {tracks.map((track) => (
                                                <li key={track.id}>
                                                <Typography variant="body1" sx={{ fontFamily: 'Oswald', marginBottom: 1 }}>
                                                    {track.title}
                                                </Typography>
                                                </li>
                                            ))}
                                            </ul>
                                        </Card>
                                    </Grid2>

                                </Grid2>
                            </Grid2>
                        </Box>   
                    </Container>
                )}
            </div>
        </ErrorBoundary>
    );
}

export default ArtistDetails