import Users from '../../models/Users';
import React from 'react';
import { SetterOrUpdater } from 'recoil';
import { addUser, updateUser } from '../../util/apiConnection';
import '../../sass/modal.scss';
import UserModalHeader from './UserModalHeader';
import UserModalBody from './UserModalBody';
import UserModalFooter from './UserModalFooter';

function modalBackgroundClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, closeDialog: VoidFunction) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-background')) {
        closeDialog();
    }
}

interface Userproperties {
    user: Users;
    open: boolean;
    handleClose: () => void;
    reload: SetterOrUpdater<number>;
    newUser: boolean;
}

const UserModal: React.FC<Userproperties> = ({ user, open, handleClose, reload, newUser }) => {

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
        touchFirstName(false);
        touchLastName(false);
        touchEmail(false);
        reload(Math.random());
        handleClose();
    }

    const [formData, setFormData] = React.useState({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar });
    const [firstNameValid, validFirstName] = React.useState(!newUser);
    const [lastNameValid, validLastName] = React.useState(!newUser);
    const [emailValid, validEmail] = React.useState(!newUser);
    const [firstNameTouched, touchFirstName] = React.useState(false);
    const [lastNameTouched, touchLastName] = React.useState(false);
    const [emailTouched, touchEmail] = React.useState(false);
    const [opened, markOpened] = React.useState(false);

    if (!open) {
        if (opened) {
            markOpened(false);
        }
        document.body.className = '';
        return null;
    }
    else if (!opened) {
        updateState();
        markOpened(true);
    }
    
    document.body.className = 'no-scroll';

    const properties = {
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
        submitUser: submitUser,
        newUser: newUser,
        closeDialog: closeDialog
    };


    return (
        <div className='modal-background' onClick={(event) => modalBackgroundClick(event, closeDialog)}>
            <div className='modal' >
                <UserModalHeader newUser={newUser} />
                <UserModalBody properties={properties} />
                <UserModalFooter properties={properties} />
            </div>
        </div>
    );

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // I wanted this part to work, but I couldn't get it working using the Modal Component. I'm hoping I can get it to work later //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    //         modalFooter={() => ModalFooter(properties)}
    //         modalBody={() => ModalBody(properties)}
    //         modalTitle={newUser ? 'Add a user' : 'Update user'}
    //     />
    // );
}

export default UserModal;