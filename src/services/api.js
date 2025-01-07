import axios from 'axios';

const API_BASE = 'https://api.deezer.com';

export const getArtists = async () => {
  const { data } = await axios.get(`${API_BASE}/genre/152/artists`);
  return data.data; // Retorna la lista de artistas
};

export const getArtistDetails = async (id) => {
  const { data } = await axios.get(`${API_BASE}/artist/${id}`);
  return data;
};

export const getAlbumDetails = async (id) => {
  const { data } = await axios.get(`${API_BASE}/album/${id}`);
  return data;
};
