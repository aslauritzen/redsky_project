import Users from "../models/Users";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import React from "react";
import { SetterOrUpdater } from "recoil";
import { addUser, updateUser } from "../util/apiConnection";

interface UserProps {
    user: Users;
    open: boolean;
    handleClose: () => void;
    reload: SetterOrUpdater<number>;
    newUser: boolean;
}

const UserModal: React.FC<UserProps> = ({user, open, handleClose, reload, newUser}) => {
    const [formData, setFormData] = React.useState({id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar});
    const [firstNameValid, validFirstName] = React.useState(!newUser);
    const [lastNameValid, validLastName] = React.useState(!newUser);
    const [emailValid, validEmail] = React.useState(!newUser);
    const [firstNameTouched, touchFirstName] = React.useState(!newUser);
    const [lastNameTouched, touchLastName] = React.useState(!newUser);
    const [emailTouched, touchEmail] = React.useState(!newUser);

    function firstNameChange (e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, firstName: e.target.value});
        validFirstName(!!e.target.value);
    }

    function lastNameChange (e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, lastName: e.target.value});
        validLastName(!!e.target.value);
    }

    function emailChange (e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, email: e.target.value});
        validEmail(!!e.target.value && e.target.value.indexOf('@') > 0);
    }

    function avatarChange (e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, avatar: e.target.value});
    }

    function submitUser() {
        if (newUser) addUser(formData, reload);
        else updateUser(formData, reload);
        closeDialog();
    }

    function updateState() {
        setFormData({id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar});
    }

    function closeDialog () {
        validFirstName(!newUser);
        validLastName(!newUser);
        validEmail(!newUser);
        touchFirstName(!newUser);
        touchLastName(!newUser);
        touchEmail(!newUser);
        reload(Math.random());
        handleClose();
    }

    return (
        <Dialog open={open} onRendered={updateState} onClose={closeDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{newUser ? 'Add a user': 'Update user'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill out the form below to {newUser ? 'add a user to': 'update the user in'} the user cache.
                </DialogContentText>
                <form autoComplete="off">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="First Name"
                        defaultValue={user.firstName}
                        onChange={firstNameChange}
                        onFocus={() => touchFirstName(true)}
                        error={!firstNameValid && firstNameTouched}
                        helperText="A first name is required"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="lastName"
                        label="Last Name"
                        defaultValue={user.lastName}
                        onChange={lastNameChange}
                        onFocus={() => touchLastName(true)}
                        error={!lastNameValid && lastNameTouched}
                        helperText="A last name is required"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        defaultValue={user.email}
                        onChange={emailChange}
                        onFocus={() => touchEmail(true)}
                        error={!emailValid && emailTouched}
                        helperText="An email address is required"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="avatar"
                        label="Avatar Image URL"
                        defaultValue={user.avatar}
                        onChange={avatarChange}
                        fullWidth
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog} color="primary">
                    Cancel
                </Button>
                <Button disabled={!(firstNameValid && lastNameValid && emailValid)} onClick={submitUser} color="primary">
                    {newUser ? 'Add': 'Update'} User
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UserModal;