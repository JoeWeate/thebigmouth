import React, { useState } from 'react';
import {Button, Typography, Collapse, Grid, Box} from '@mui/material';
import Divider from "./Divider";
import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";


const Information = ({ released, rated, regionOfOrigin, originalAudio }) => {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    const handleClick = () => {
        setOpen(!open);
    };

    const disableButton = !rated;

    return (
        <SectionContent >
            <Grid item xs={12}>
            <Divider />
            <Button
                disabled={disableButton}
                variant="text"
                disableRipple
                onClick={handleClick}
                sx={{
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }}

            >
                <Grid container direction="row" mt={4} mb={3.5} justifyContent="center" flexWrap="nowrap" gap="1rem">
                    <Grid item sx={{display: "flex", alignItems: "center"}}>
                        <SectionTitle uppercase title="Information" sx={{ marginRight: '1rem'}}/>
                        <svg
                            fill={isHovered ? '#E8FC02' : 'white'}
                            width="1.2rem"
                            version="0.8"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 330 330"
                            xmlSpace="preserve"
                            style={{
                                transform: `rotate(${open ? '180deg' : '0deg'})`,
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <path
                                id="XMLID_225_"
                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            />
                        </svg>
                    </Grid>
                </Grid>
            </Button>


            <Collapse in={open}>
                <Divider sx={{ marginBottom: '1rem' }} />

                <Box sx={{ mt: "3rem" }}>
                    <Typography variant="h7" sx={{ fontSize: 16, color: 'white' }}>
                        <p >Released</p>
                        <p style={{ color: "#8c8c8c" }}>{released}</p>
                    </Typography>
                </Box>
                <Box sx={{ mt: "1.5rem" }}>
                    <Typography variant="h7" sx={{ fontSize: 16, color: 'white' }}>
                        <p>Rated</p>
                        <p style={{ color: "#8c8c8c" }}>{rated}</p>
                    </Typography>
                </Box>
                <Box sx={{ mt: "1.5rem" }}>
                    <Typography variant="h7" sx={{ fontSize: 16, color: 'white' }}>
                        <p>Region of Origin</p>
                        <p style={{ color: "#8c8c8c" }}>{regionOfOrigin}</p>
                    </Typography>
                </Box>
                <Box sx={{ mt: "1.5rem", mb: "2rem" }}>
                    <Typography variant="h7" sx={{ fontSize: 16, color: 'white' }}>
                        <p>Original Audio</p>
                        <p style={{ color: "#8c8c8c" }}>{originalAudio}</p>
                    </Typography>
                </Box>
            </Collapse>

            <Divider sx={{ marginBottom: '1rem' }} />
            </Grid>
        </SectionContent >
    );
};

export default Information;
