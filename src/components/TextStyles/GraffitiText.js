import { Box, Typography } from "@mui/material";

const GraffitiText = ({ title }) => {
    let arrayWithWords = title.split(" ");
    return (
        <Typography sx={{
            fontFamily: "Reactive-3zz73",
            fontSize: { lg: "45pt", md: "35pt", xs: "45pt" },
            textAlign: "center",
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: "-1.5rem" }}>

                {arrayWithWords.map((word, index) => (
                    <span
                        key={index}
                        style={{
                            position: "relative",
                            display: "column",
                            lineHeight: 1.3,
                            marginBottom: "-2rem",
                        }}
                    >
                        {word}
                    </span>
                ))}

            </Box>
        </Typography>
    );
}

export default GraffitiText;
