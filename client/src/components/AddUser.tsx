import React from 'react';
import Button from '../components/Button';
import UserModal from './UserModal';
import Users from '../models/Users';
import { ForceReload } from '../util/tableState';
import { useSetRecoilState } from 'recoil';
import '../sass/styles.scss';

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
        <div className='box right-align'>
            <Button className='main-button' onClick={handleClickOpen}>
                Add User
            </Button>
            <UserModal user={Users.emptyUser()} open={open} handleClose={handleClose} reload={reload} newUser={true} />
        </div>
    );
}