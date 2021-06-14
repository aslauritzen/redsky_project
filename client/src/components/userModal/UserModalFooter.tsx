import Button from '../Button';

interface ParentProperties {
    submitUser: VoidFunction,
    closeDialog: VoidFunction,
    newUser: boolean,
    firstNameValid: boolean,
    lastNameValid: boolean,
    emailValid: boolean,
}

interface Properties {
    properties: ParentProperties
};

export default function UserModalFooter({ properties }: Properties) {
    return (
        <div className='modal-footer'>
            <Button onClick={properties.closeDialog} className='cancel-button'>
                Cancel
            </Button>
            <Button disabled={!(properties.firstNameValid && properties.lastNameValid && properties.emailValid)} onClick={properties.submitUser} className='main-button'>
                {properties.newUser ? 'Add' : 'Update'} User
            </Button>
        </div>
    );
}