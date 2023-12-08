import React, { useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import {ACTION_NAME} from "../../utils/constants";
import UpdateVideoStateButton from "../UpdateVideoStateButton";

const MessagesInputForm = ({ initialData, getUpdatedVideos, setOpenReject }) => {
    const [formError, setFormError] = useState("");
    const theme = useTheme();
    const [data, setData] = useState(initialData || {});

    const handleChange = (event) => {
        setData({
            ...data,
            "Messages": event.target.value,
        });
    };

    const closeDialog = () => {
        setOpenReject(false);
    };

    return (
        <Box
            component="form"
            autoComplete="off"
            sx={{
                width: {
                    maxWidth: "700px",
                },
                height: {
                    maxHeight: "500px",
                },
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem",
                paddingBottom: "3rem",
            }}
        >
            <TextField
                fullWidth
                placeholder="Message"
                label="Message"
                id="message"
                name="message"
                value={data.Messages}
                defaultValue={data.Messages}
                onChange={handleChange}
                margin="normal"
                required
                error={!!formError} // Set error based on formError
                helperText={formError} // Pass formError as string
                InputLabelProps={{
                    style: {
                        ...theme.overrides.MuiOutlinedInput.root,
                    },
                }}
                InputProps={{
                    style: {
                        ...theme.overrides.MuiOutlinedInput.input,
                        backgroundColor: "#5D5D5D",
                    },
                }}
            />
            <UpdateVideoStateButton action={ACTION_NAME.REJECT} disabled={!data.Messages} videoData={data} getUpdatedVideos={getUpdatedVideos} additionalCbs={{success: closeDialog}}/>
        </Box>
    );
};

export default MessagesInputForm;
