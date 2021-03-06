import Users from '../models/Users';
import React from 'react';
import { FirstNameField, LastNameField, EmailField, Avatar } from './formFields/FormFields';

interface Properties {
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
    newUser: boolean,
};

export default function ModalBody(properties: Properties) {
    return (
        <div>
            <h2>
                Fill out the form below to {properties.newUser ? 'add a user to' : 'update the user in'} the user cache.
            </h2>
            <form autoComplete='off'>
                <FirstNameField properties={properties} />
                <LastNameField properties={properties} />
                <EmailField properties={properties} />
                <Avatar properties={properties} />
            </form>
        </div>
    );
}