import lockIcon from "../../assets/images/lock-icon.svg"
import { Avatar } from "@mui/material"

const LockIcon = () => {

    return (
        <Avatar
            alt="lock-icon"
            src={lockIcon}
            sx={{ width: "6rem", height: "6rem", }}
            variant="rounded"
        />
    )
}

export default LockIcon