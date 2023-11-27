import * as React from 'react';

import { Dialog, DialogTitle, DialogContentText, TextField, Button, DialogContent, DialogActions } from "@mui/material";
import MyButton from '../Button';

const DialogWindow = ({ openEdit, handleClose, titleDialog, dialogTextDescription }) => {


    return (
        <React.Fragment>
            <Dialog open={openEdit} onClose={handleClose} >
                <DialogTitle>{titleDialog}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogTextDescription}
                    </DialogContentText>

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
