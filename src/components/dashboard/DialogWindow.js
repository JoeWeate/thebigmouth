import * as React from 'react';
import { Dialog, DialogContentText, DialogContent, DialogActions } from "@mui/material";
import PageTitleComponent from '../../pages/dummyHomePage/PageTitleComponent';
import MyButton from '../Button';
// import VideoForm from "./pages/VideoUpload/VideoForm";

const DialogWindow = ({ openEdit, handleClose, titleDialog, dialogTextDescription }) => {

    return (
        <React.Fragment>
            <Dialog open={openEdit} onClose={handleClose} >
                <PageTitleComponent title={titleDialog} fontSize="20pt" />
                <DialogContent>
                    <DialogContentText>
                        {dialogTextDescription}
                    </DialogContentText>
                    {/* <VideoForm /> */}
                </DialogContent>
                <DialogActions>
                    <MyButton template="pink" onClick={handleClose} children="Close" variant="contained" />
                    <MyButton template="yellow" onClick={handleClose} children="Submit" variant="outlined" />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DialogWindow;
