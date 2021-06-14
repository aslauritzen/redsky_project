import Users from '../../models/Users';
import { FirstNameField, LastNameField, EmailField, Avatar } from '../formFields/FormFields';

interface ParentProperties {
    user: Users,
    formData: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        avatar: string;
    },
    setFormData: React.Dispatch<React.SetStateAction<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        avatar: string;
    }>>,
    firstNameValid: boolean,
    validFirstName: React.Dispatch<React.SetStateAction<boolean>>,
    firstNameTouched: boolean,
    touchFirstName: React.Dispatch<React.SetStateAction<boolean>>,
    lastNameValid: boolean,
    validLastName: React.Dispatch<React.SetStateAction<boolean>>,
    lastNameTouched: boolean,
    touchLastName: React.Dispatch<React.SetStateAction<boolean>>,
    emailValid: boolean,
    validEmail: React.Dispatch<React.SetStateAction<boolean>>,
    emailTouched: boolean,
    touchEmail: React.Dispatch<React.SetStateAction<boolean>>,
}

interface Properties {
    properties : ParentProperties
};

export default function UserModalBody({properties}: Properties) {
    return (
        <div className='modal-body'>
            <form>
                <FirstNameField properties={properties} />
                <LastNameField properties={properties} />
                <EmailField properties={properties} />
                <Avatar properties={properties} />
            </form>
        </div>
    );
}