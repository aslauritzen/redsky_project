import React from 'react';
import {
    useRecoilValue,
    useSetRecoilState
} from 'recoil';
import { deleteUser } from '../util/apiConnection';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Avatar } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Users from '../models/Users';
import { ForceReload, UserSelector } from '../util/tableState';
import UserModal from './UserModal';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}));

export default function UserList () {
    const classes = useStyles();
    const usersData = useRecoilValue(UserSelector);
	const reload = useSetRecoilState(ForceReload);
    const [open, setOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(Users.emptyUser());

    function editUser(user: Users) {
        setCurrentUser(user);
        handleClickOpen();
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Box m={3}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Portrait</TableCell>
                            <TableCell>User Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(usersData || []).map((user: Users) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell component="th" scope="row">
                                        <IconButton onClick={() => deleteUser(user, reload)} edge="start" color="inherit" aria-label="menu">
                                            <Delete />
                                        </IconButton>
                                        <IconButton onClick={() => editUser(user)} edge="start" color="inherit" aria-label="menu">
                                            <Edit />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        {!!user.avatar ? <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.avatar} />: <></>}
                                    </TableCell>
                                    <TableCell>
                                        {user.firstName} {user.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {user.email}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <UserModal user={currentUser} open={open} handleClose={handleClose} reload={reload} newUser={false} />
        </Box>
    );
};