import Button from './Button';

interface Properties {
    closeDialog: VoidFunction,
    firstNameValid: boolean,
    lastNameValid: boolean,
    emailValid: boolean,
    submitUser: VoidFunction,
    newUser: boolean
};

export default function ModalFooter (props: Properties) {
    return (
        <div>
            <Button onClick={props.closeDialog} className='cancel-button'>
                Cancel
            </Button>
            <Button disabled={!(props.firstNameValid && props.lastNameValid && props.emailValid)} onClick={props.submitUser} className='main-button'>
                {props.newUser ? 'Add': 'Update'} User
            </Button>
        </div>
    );
}