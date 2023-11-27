import { Grid, Typography } from "@mui/material";

const SubtitleComponent = ({ subtitle, fontSize }) => {
    return (
        <Grid container direction="column" alignItems="center">
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "13pt", sm: "18pt", lg: `${fontSize}` },
                    marginTop: 0,
                    marginBottom: { xs: "2rem", lg: "4rem" },
                }}
            >
                {subtitle}
            </Typography>
        </Grid>
    );
};

export default SubtitleComponent;