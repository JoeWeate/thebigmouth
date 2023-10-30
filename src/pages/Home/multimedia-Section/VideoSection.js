import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import '../../../assets/styles/helper.css';

export default function VideoSection({ sectionTitle, multimediaData }) {
  return (
    <Grid container sx={{pb:4, display: 'flex', flexDirection: 'column', flexGrow: 1}} >
      <Typography variant='h5' sx={{fontWeight: 'bold', color: 'white', pb:1}}>{sectionTitle}</Typography>
      <Grid container className="noscroll" sx={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {multimediaData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{pr: 2, width: '100%', flex: '0 0 auto'}}>
              <Link to={`/multimedia/${item.ID}`}>
                <Grid container sx={{position: 'relative'}}>
                  <img style={{width: '100%', borderRadius: 20}} src={item.Images} alt={`Image ${item.Name}`} />
                  <Typography variant="h6" sx={{ position: 'absolute', top: '18%', left: '3%', letterSpacing: '1px', textAlign: 'left', color: '#FFFFFF', textTransform: 'uppercase', fontWeight: 'bold'}}>
                    {item.Name}
                  </Typography>
                </Grid>
              </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}


