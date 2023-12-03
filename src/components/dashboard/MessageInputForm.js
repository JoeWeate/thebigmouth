import React, { useState } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import Button from "../../components/Button.js";
import { apiUpdateVideo } from "../../api/videos.js";

const MessagesInputForm = ({ initialData, setUpdateData, setOpenReject }) => {
    const [formError, setFormError] = useState("");
    const theme = useTheme();
    const [data, setData] = useState(initialData || {});

    const handleChange = (event) => {
        setData({
            ...data,
            "Messages": event.target.value,
        });
    };

    const handleSubmit = async () => {
        console.log("Submitting messages:", data);

        const requiredFields = "Messages";
        let isValid = !!data.Messages; // Check if Messages is truthy

        if (!isValid) {
            setFormError("Message is required");
            return;
        }

        try {
            await apiUpdateVideo(data);
            setUpdateData((updateData) => updateData + 1);
            setOpenReject(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
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
            <Button
                template="yellow"
                variant="outlined"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Box>
    );
};

export default MessagesInputForm;
