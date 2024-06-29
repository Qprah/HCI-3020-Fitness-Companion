import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';

function DragDropDialog() {
    const [open, setOpen] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();


        handleClose();
        enqueueSnackbar('Update Success!', { variant: 'success' });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
      
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                upload your video
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{
                '& .MuiDialog-paper': {
                    minWidth: '500px',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}>
                <DialogTitle>Drag to upload</DialogTitle>
                <DialogContent
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    sx={{
                        border: '1px dashed gray',
                        width: '400px', 
                        height: '200px',
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                    }}
                >
                    Here
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{}}>cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DragDropDialog;
