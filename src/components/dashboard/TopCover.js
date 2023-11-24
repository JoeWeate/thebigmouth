import { Box } from "@mui/material";
import CrossIcon from "./CrossIcon";
import LockIcon from "./LockIcon";

const TopCover = ({ maxWidth, state }) => {
    return (
        <Box
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(59,59,59,0.9)",
                margin: "0 auto",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: "center",
                overflow: "hidden",
                position: "absolute",
                maxWidth,
                border: "solid white 1px"
            }}
        >
            {state === 'pending' && <LockIcon />}
            {state === 'restricted' && <CrossIcon />}
        </Box>
    );
}

export default TopCover