import * as React from 'react';
import { Dialog, DialogContentText, DialogContent, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import PageTitleComponent from "../../pages/VideoHub/PageTitleComponent"
import IconButton from '@mui/material/IconButton';
import VideoForm from "../../pages/VideoUpload/VideoForm";
import CloseIcon from '@mui/icons-material/Close';


const DialogWindow = ({ videoInfo, openEdit, handleClose, titleDialog, dialogTextDescription, setOpenEdit }) => {
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openEdit}
            >
                <Box sx={{ mt: "2rem" }}>
                    <PageTitleComponent title={titleDialog} titleFontSize="28pt" />
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <DialogContent>
                    <DialogContentText sx={{ pl: "1rem" }}>
                        {dialogTextDescription}
                    </DialogContentText>
                    <VideoForm initialData={videoInfo} setOpenEdit={setOpenEdit} />
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogWindow;
