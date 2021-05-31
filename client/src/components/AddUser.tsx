import React from 'react';
import { Box, Button } from '@material-ui/core';
import UserModal from './UserModal';
import Users from '../models/Users';
import { ForceReload } from '../util/tableState';
import { useSetRecoilState } from 'recoil';

export default function AddUser() {
    const [open, setOpen] = React.useState(false);
	const reload = useSetRecoilState(ForceReload);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Box m={3} className="right-align">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add User
            </Button>
            <UserModal user={Users.emptyUser()} open={open} handleClose={handleClose} reload={reload} newUser={true} />
        </Box>
    );
}