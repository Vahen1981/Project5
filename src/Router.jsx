import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Genres from './pages/Genres'
import GenreDetails from './pages/GenreDetails'
import ArtistDetails from './pages/ArtistDetails'
import TopTracks from './pages/TopTracks'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

const Router = createBrowserRouter([
    {
    path: '/',
        element: <Layout />,
        children: [
            { path: "/", element: <Home />},
            { path: "/genres", element: <Genres />},
            { path: "/genre/:id", element: <GenreDetails />},
            { path: "/artist/:id", element: <ArtistDetails />},
            { path: "/top", element: <TopTracks />},
            { path: "/*", element: <NotFound />}
        ]
    }
])


export default Router