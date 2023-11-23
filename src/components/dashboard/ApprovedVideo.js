import { Box } from "@mui/material"
import UserVideo from "../userHub/UserVideo"

const ApprovedVideo = ({ video, withVideoInfo, maxWidth }) => {
    return (
        <Box sx={{ padding: "1rem" }}>
            <UserVideo video={video} withVideoInfo={withVideoInfo} maxWidth={maxWidth} />
        </Box>

    )
}

export default ApprovedVideo