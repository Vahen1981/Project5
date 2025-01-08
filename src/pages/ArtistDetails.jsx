import { CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ArtistDetails = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/artist/${id}`);
                const data = await response.json();
                setInfo(data);
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
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    {info.name}
                </Typography>
            )}
        </div>
    );
}

export default ArtistDetails