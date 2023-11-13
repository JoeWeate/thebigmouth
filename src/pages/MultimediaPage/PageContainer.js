import {Grid} from "@mui/material";
import React from "react";

const PageContainer = ({children}) => {

    return (
        <Grid
            container
            sx={{backgroundColor: "#2B2B2B",}}
        >
            {children}
        </Grid>
    );
};

export default PageContainer;
