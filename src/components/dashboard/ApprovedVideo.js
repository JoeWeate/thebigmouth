import { Box } from "@mui/material"
import UserVideo from "../userHub/UserVideo"
import MyButton from "../Button"

const ApprovedVideo = ({ video, withVideoInfo, maxWidth }) => {
    const handleDelete = () => {
    }
    const handleSendToDraft = () => {

    }
    return (
        <Box p="1rem">
            <UserVideo video={video} withVideoInfo={withVideoInfo} maxWidth={maxWidth} />
            <span><MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" /></span>
            <span><MyButton template="yellow" onClick={handleSendToDraft} children="Send to Draft" variant="contained" /></span>
        </Box>

    )
}

export default ApprovedVideo