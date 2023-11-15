import { Box } from "@mui/material";

const GraffitiText = ({ title }) => {
    let arrayWithWords = title.split(" ");
    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "-1rem" }}>
            {arrayWithWords.map((word, index) => (
                <span
                    key={index}
                    style={{
                        position: "relative",
                        display: "column",
                        fontFamily: "Reactive-3zz73",
                        marginBottom: "-2rem",
                        textAlign: "center"
                    }}
                >
                    {word}
                </span>
            ))}
        </Box>
    );
}

export default GraffitiText;
