import { Typography } from "@mui/material";

const JumpingWords = ({ title }) => {
    let arrayWithWords = title.split(" ");
    return (
        <Typography sx={{ fontSize: { lg: "40pt", md: "30pt", xs: "40pt" }, fontWeight: 600 }}>
            {arrayWithWords.map((word, index) => (
                <span
                    key={index}
                    style={{
                        position: "relative",
                        top: index % 2 !== 0 ? "0.9rem" : "-0.9rem",
                        display: "inline-block",

                    }}
                >
                    {word}
                </span>
            ))}
        </Typography>

    );
}

export default JumpingWords;
