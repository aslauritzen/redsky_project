import React from 'react';
import {
    useSetRecoilState
} from 'recoil';
// import { makeStyles } from '@material-ui/core/styles';
import Table from './Table';
import UserRows from './UserRows';
import UserHeader from './UserHeader';
import Users from '../models/Users';
import { ForceReload } from '../util/tableState';
import UserModal from './UserModal';
import '../sass/styles.scss';

export default function UserList() {
    // const classes = useStyles();
    const reload = useSetRecoilState(ForceReload);
    // eslint-disable-next-line
    const [open, setOpen] = React.useState(false);
    // eslint-disable-next-line
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
        <div className='box'>
            <Table headBuilder={() => UserHeader()} bodyBuilder={() => UserRows(editUser)} />
            <UserModal user={currentUser} open={open} handleClose={handleClose} reload={reload} newUser={false} />
        </div>
    );
};