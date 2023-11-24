import cross from "../../assets/images/cross.svg"
import Avatar from '@mui/material/Avatar';

const CrossIcon = () => {
    return (
        <Avatar
            alt="cross-icon"
            src={cross}
            sx={{ width: "6rem", height: "6rem" }}
        />
    )
}

export default CrossIcon