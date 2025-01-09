import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import GenreDetails from './pages/GenreDetails'
import ArtistDetails from './pages/ArtistDetails'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

const Router = createBrowserRouter([
    {
    path: '/',
        element: <Layout />,
        children: [
            { path: "/", element: <Home />},
            { path: "/genre/:id", element: <GenreDetails />},
            { path: "/artist/:id", element: <ArtistDetails />},
            { path: "/*", element: <NotFound />}
        ]
    }
])


export default Router