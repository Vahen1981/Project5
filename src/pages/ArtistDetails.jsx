import { Button, CircularProgress, Grid2, Link, Typography, Card, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//Url en servidor local
//const API_URL = 'http://localhost:3000/api/';

//Url en servidor en render
const API_URL = 'https://servidor-para-deezer.onrender.com/api/';

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
        <div>
            {loading && <CircularProgress sx={{ display: 'block', margin: 'auto' }} />}
            {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}

            {!loading && !error && (

                <div style={{ padding: '20px' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Orbitron, serif', textAlign: 'center', marginBottom: 2 }}>
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
                            {/* Imagen */}
                            <Grid2
                            xs={12}
                            md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: { xs: 4, md: 0 }, // Margen solo en pantallas pequeñas
                            }}
                            >
                            <img
                                src={info.picture_big}
                                alt={info.name}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                            </Grid2>

                            <Grid2 xs={12} md={6}>
                                <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
                                    {/* Número de fans */}
                                    <Grid2 xs={12}>
                                        <Card sx={{ textAlign: 'center', padding: 3, boxShadow: 3 }}>
                                            <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Oswald', marginBottom: 2 }}>
                                            Fans
                                            </Typography>
                                            <Typography variant="h4" color="primary">
                                            {info.nb_fan.toLocaleString()}
                                            </Typography>
                                        </Card>
                                    </Grid2>

                                    {/* Enlace de Deezer */}
                                    <Grid2 xs={12}>
                                        <Card sx={{ textAlign: 'center', padding: 3, boxShadow: 3 }}>
                                            <Typography variant="h4" sx={{ fontFamily: 'Oswald', fontWeight: 'bold', marginBottom: 2 }}>
                                            Música
                                            </Typography>
                                            <Link href={info.link} target="_blank" rel="noopener" underline="none">
                                            <Button variant="contained" color="primary" size="large">
                                                Escuchar en Deezer
                                            </Button>
                                            </Link>
                                        </Card>
                                    </Grid2>
                                </Grid2>

                                {/* Tracks más populares */}
                                <Grid2 xs={12}>
                                    <Card sx={{ textAlign: 'right', padding: 3, boxShadow: 3 }}>
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
                       
                </div>
            )}
        </div>
    );
}

export default ArtistDetails