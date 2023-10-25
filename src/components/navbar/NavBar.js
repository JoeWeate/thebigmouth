import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Grid, Button, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/TheBigHouse.png';
import './navbar.css';
import LoginButton from "../Auth/LoginButton"
export default function NavBar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const menuItems = [
    { label: 'Home', path: '/page' },
    { label: 'About Us', path: '/page' },
    { label: 'Theatre', path: '/page' },
    { label: 'Get Involved', path: '/page' },
    { label: 'TBH Means Business', path: '/page' },
    { label: 'The Big Mouth', path: '/' },
  ];

  return (
    <div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.label} onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
              <Typography variant="body1" style={{ color: 'black' }}>
                {item.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid
        container

        className="container"
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
            <img alt="The Big House Logo" src={Logo} style={{ width: 50, marginRight: 10 }} />
          </Link>

<h1><LoginButton/></h1>

        </div>

        <div className={`menu-buttons ${isMobile ? 'mobile-menu' : ''}`}>
          <Button size="large" onClick={() => navigate('/page')} >
            Home
          </Button>
          <Button size="large" onClick={() => navigate('/page')} >
            ABOUT US
          </Button>
          <Button size="large" onClick={() => navigate('/page')} >
            THEATRE
          </Button>
          <Button size="large" onClick={() => navigate('/page')} >
            GET INVOLVED
          </Button>
          <Button size="large" onClick={() => navigate('/page')} >
            TBH MEANS BUSINESS
          </Button>
          <Button size="large" onClick={() => navigate('/')} style={{ color: 'white', marginRight: 20, textDecoration: 'none', position: 'relative' }} className="underline-on-hover">
            THE BIG MOUTH
          </Button>
        </div>

        <div className="poo" style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton style={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>

          <IconButton edge="start" color="white" aria-label="menu" onClick={() => setDrawerOpen(true)} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
}
