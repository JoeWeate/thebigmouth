import { Box } from "@mui/material"
import cross from "../../assets/images/cross.svg"
import lockIcon from "../../assets/images/lock-icon.svg"
import { Avatar } from "@mui/material"
import {VIDEO_STATE} from "../../utils/constants";



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
            {state === VIDEO_STATE.IN_REVIEW &&
                <Avatar
                    alt="lock-icon"
                    src={lockIcon}
                    sx={{ width: "6rem", height: "6rem", }}
                    variant="rounded"
                />}
            {state === VIDEO_STATE.BLOCKED && <Avatar
                alt="cross-icon"
                src={cross}
                sx={{ width: "6rem", height: "6rem" }}
            />}
        </Box>
    );
}

export default TopCover