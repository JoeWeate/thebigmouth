import { Grid, Typography } from "@mui/material";

const SubtitleComponent = ({ subtitle, subtitleFontSize }) => {
    return (
        <Grid container direction="column" alignItems="center">
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "13pt", sm: "18pt", lg: `${subtitleFontSize}` },
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