import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from 'react-router-dom';
import * as React from 'react';

const pages = [
    { name: 'Inicio', path: '/home' },
    { name: 'Playlists', path: '/playlists' },
    { name: 'Géneros', path: '/' },
    { name: 'Top 20', path: '/top' },
    ];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleMenuToggle = (event) => {
    setAnchorElNav((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <MenuItem key={item.name} onClick={() => setAnchorElNav(null)} component={Link} to={item.path}>
        <Typography sx={{ fontFamily: 'Orbitron', textAlign: 'center' }}>{item.name}</Typography>
      </MenuItem>
    ));
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <HeadphonesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MusicSkills
          </Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={handleMenuToggle}
              color="inherit"
            >
              <HeadphonesIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {renderMenuItems(pages)}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <HeadphonesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MusicSkills
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.path}
                key={page.name}
                onClick={() => setAnchorElNav(null)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
