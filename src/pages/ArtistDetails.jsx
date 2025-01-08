import { Button, CircularProgress, Grid2, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ArtistDetails = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/artist/${id}`);
                const data = await response.json();
                setInfo(data);

                const trackResponse = await fetch(`http://localhost:3000/api/artist/tracklist/${id}`);
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
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
                        {info.name}
                    </Typography>

                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img src={info.picture_big} alt={info.name} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>

                    <Grid2 container spacing={3} sx={{ justifyContent: 'center' }}>
                        <Grid2 xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Número de fans
                            </Typography>
                            <Typography variant="body1">
                                {info.nb_fan.toLocaleString()}
                            </Typography>
                        </Grid2>

                        <Grid2 xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Enlace de Deezer
                            </Typography>
                            <Link href={info.link} target="_blank" rel="noopener">
                                <Button variant="contained" color="primary">
                                    Escuchar en Deezer
                                </Button>
                            </Link>
                        </Grid2>

                        <Grid2 xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Tracks más populares
                            </Typography>
                            <ul>
                                {tracks.map((track) => (
                                    <li key={track.id}>
                                        <Typography variant="body1">{track.title}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Grid2>
                    </Grid2>
                </div>
            )}
        </div>
    );
}

export default ArtistDetails