import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const cardStyle = {
  maxWidth: '100%',
  backgroundColor: 'transparent',
  color: "white",
  boxShadow: 'none',
  margin: "14px",
  fontSize:"14px",
};

const imageStyle = {
    maxWidth: '100%',
    height: '273px',
    objectFit: 'cover',
  };

const SeasonComponent = ({ episodes }) => {
  if (!episodes || episodes.length === 0) {
    return <p>No episodes available for this season.</p>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom sx={{color: "white",}}>
          Season 1:
        </Typography>
      </Grid>
      {episodes.map((episode, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div">
                Episode {episode.episode_id?.S}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "white",}}>
              <img
                  src={episode.image?.S}
                  alt={`Episode ${episode.episode_id?.S}`}
                  style={imageStyle} 
                />               
                 <br />
                <strong>Title:</strong> <br/>{episode.title?.S}
                <br />
                <strong>Description:</strong> {episode.description?.S}
              </Typography>
             
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SeasonComponent;
