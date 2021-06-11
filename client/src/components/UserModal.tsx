import Users from '../models/Users';
import React from 'react';
import { SetterOrUpdater } from 'recoil';
import { addUser, updateUser } from '../util/apiConnection';
// import Modal from '../components/Modal';
// import ModalBody from './ModalBody';
// import ModalFooter from './ModalFooter';
import Button from './Button';
import '../sass/modal.scss';

interface UserProps {
    user: Users;
    open: boolean;
    handleClose: () => void;
    reload: SetterOrUpdater<number>;
    newUser: boolean;
}

const UserModal: React.FC<UserProps> = ({ user, open, handleClose, reload, newUser }) => {

    function submitUser() {
        if (newUser) addUser(formData, reload);
        else updateUser(formData, reload);
        closeDialog();
    }

    function updateState() {
        setFormData({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar });
    }

    function closeDialog() {
        validFirstName(!newUser);
        validLastName(!newUser);
        validEmail(!newUser);
        touchFirstName(!newUser);
        touchLastName(!newUser);
        touchEmail(!newUser);
        reload(Math.random());
        handleClose();
    }

    function modalBackgroundClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('modal-background')) {
            closeDialog();
        }
    }

    function firstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setFormData({ ...props.formData, firstName: e.target.value });
        props.validFirstName(!!e.target.value);
    }

    function lastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setFormData({ ...props.formData, lastName: e.target.value });
        props.validLastName(!!e.target.value);
    }

    function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setFormData({ ...props.formData, email: e.target.value });
        props.validEmail(!!e.target.value && e.target.value.indexOf('@') > 0);
    }

    function avatarChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setFormData({ ...props.formData, avatar: e.target.value });
    }

    const [formData, setFormData] = React.useState({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar });
    const [firstNameValid, validFirstName] = React.useState(!newUser);
    const [lastNameValid, validLastName] = React.useState(!newUser);
    const [emailValid, validEmail] = React.useState(!newUser);
    const [firstNameTouched, touchFirstName] = React.useState(!newUser);
    const [lastNameTouched, touchLastName] = React.useState(!newUser);
    const [emailTouched, touchEmail] = React.useState(!newUser);
    const [opened, markOpened] = React.useState(false);

    const props = {
        user: user,
        formData: formData,
        setFormData: setFormData,
        firstNameValid: firstNameValid,
        validFirstName: validFirstName,
        firstNameTouched: firstNameTouched,
        touchFirstName: touchFirstName,
        lastNameValid: lastNameValid,
        validLastName: validLastName,
        lastNameTouched: lastNameTouched,
        touchLastName: touchLastName,
        emailValid: emailValid,
        validEmail: validEmail,
        emailTouched: emailTouched,
        touchEmail: touchEmail,
        closeDialog: closeDialog,
        submitUser: submitUser,
        newUser: newUser,
    };

    if (!open) {
        if (opened) {
            markOpened(false);
        }
        return null;
    }
    else if (!opened) {
        updateState();
        markOpened(true);
    }


    return (
        <div className='modal-background' onClick={(event) => modalBackgroundClick(event)}>
            <div className='modal' >
                <div className='modal-header'>
                    <h4 className='modal-title'>
                        {newUser ? 'Add a user' : 'Update user'}
                    </h4>
                    <hr />
                    <h2>
                        Fill out the form below to {props.newUser ? 'add a user to' : 'update the user in'} the user cache.
                    </h2>
                </div>
                <div className='modal-body'>
                    <form>
                        <div className='form-field'>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                autoFocus
                                id='firstName'
                                defaultValue={props.user.firstName}
                                onChange={firstNameChange}
                                onFocus={() => props.touchFirstName(true)}
                                required
                            />
                            <span hidden={props.firstNameValid || !props.firstNameTouched} style={{ color: "red" }}>A first name is required</span>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input
                                id='lastName'
                                defaultValue={props.user.lastName}
                                onChange={(e) => lastNameChange(e)}
                                onFocus={() => props.touchLastName(true)}
                                required
                            />
                            <span hidden={props.lastNameValid || !props.lastNameTouched} style={{ color: "red" }}>A last name is required</span>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type='email'
                                defaultValue={props.user.email}
                                onChange={emailChange}
                                onFocus={() => props.touchEmail(true)}
                                required
                            />
                            <span hidden={props.emailValid || !props.emailTouched} style={{ color: "red" }}>An email address is required</span>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='avatar'>Avatar Image URL</label>
                            <input
                                id='avatar'
                                defaultValue={props.user.avatar}
                                onChange={avatarChange}
                            />
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <Button onClick={props.closeDialog} className='cancel-button'>
                        Cancel
                    </Button>
                    <Button disabled={!(props.firstNameValid && props.lastNameValid && props.emailValid)} onClick={props.submitUser} className='main-button'>
                        {props.newUser ? 'Add' : 'Update'} User
                    </Button>
                </div>
            </div>
        </div>
    );

    // if (open && !opened) {
    //     updateState();
    // }

    // return (
    //     <Modal
    //         openStatuses={{
    //             open: open,
    //             opened: opened,
    //             markOpened: markOpened
    //         }}
    //         modalFooter={() => ModalFooter(props)}
    //         modalBody={() => ModalBody(props)}
    //         modalTitle={newUser ? 'Add a user' : 'Update user'}
    //     />
    // );
}

export default UserModal;