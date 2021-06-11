import Users from '../models/Users';
import React from 'react';

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
    submitUser: VoidFunction,
    newUser: boolean,
    closeDialog: VoidFunction
};

export default function ModalBody(props: Properties) {
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

    return (
        <div>
            <h2>
                Fill out the form below to {props.newUser ? 'add a user to' : 'update the user in'} the user cache.
            </h2>
            <form autoComplete='off'>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        autoFocus
                        id='firstName'
                        defaultValue={props.user.firstName}
                        onChange={firstNameChange}
                        onFocus={() => props.touchFirstName(true)}
                        required
                    />
                    <span hidden={!props.firstNameValid && props.firstNameTouched} style={{ color: "red" }}>A first name is required</span>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        id='lastName'
                        defaultValue={props.user.lastName}
                        onChange={lastNameChange}
                        onFocus={() => props.touchLastName(true)}
                        required
                    />
                    <span hidden={!props.lastNameValid && props.lastNameTouched} style={{ color: "red" }}>A last name is required</span>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        defaultValue={props.user.email}
                        onChange={emailChange}
                        onFocus={() => props.touchEmail(true)}
                        required
                    />
                    <span hidden={!props.emailValid && props.emailTouched} style={{ color: "red" }}>An email address is required</span>
                </div>
                <div>
                    <label htmlFor='avatar'>Avatar Image URL</label>
                    <input
                        id='avatar'
                        defaultValue={props.user.avatar}
                        onChange={avatarChange}
                    />
                </div>
            </form>
        </div>
    );
}