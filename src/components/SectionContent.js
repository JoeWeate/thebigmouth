import {Grid} from "@mui/material";
import React from "react";

const SectionContent = ({children, sx, component="section"}) => {

    return (
        <Grid
            container
            px={{xs: 4, md: 12}}
            component={component}
            sx={sx}
        >
            {children}
        </Grid>
    );
};

export default SectionContent;
