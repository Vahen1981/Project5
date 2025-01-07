import axios from 'axios';

//const API_BASE = 'https://api.deezer.com';
const API_URL = 'http://localhost:3000/api';

export const getArtists = async () => {
  const { data } = await axios.get(`${API_URL}/deezer-artists`);
  return data.data; // Retorna la lista de artistas
};

export const getArtistDetails = async (id) => {
  const { data } = await axios.get(`${API_URL}/artist/${id}`);
  return data;
};

export const getAlbumDetails = async (id) => {
  const { data } = await axios.get(`${API_URL}/album/${id}`);
  return data;
};
