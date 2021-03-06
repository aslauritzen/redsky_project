import Button from './Button';

interface Properties {
    closeDialog: VoidFunction,
    firstNameValid: boolean,
    lastNameValid: boolean,
    emailValid: boolean,
    submitUser: VoidFunction,
    newUser: boolean
};

export default function ModalFooter(properties: Properties) {
    return (
        <div>
            <Button onClick={properties.closeDialog} className='cancel-button'>
                Cancel
            </Button>
            <Button disabled={!(properties.firstNameValid && properties.lastNameValid && properties.emailValid)} onClick={properties.submitUser} className='main-button'>
                {properties.newUser ? 'Add' : 'Update'} User
            </Button>
        </div>
    );
}