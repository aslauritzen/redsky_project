import Users from "../../models/Users";

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
    lastNameValid: boolean,
    validLastName: React.Dispatch<React.SetStateAction<boolean>>,
    lastNameTouched: boolean,
    touchLastName: React.Dispatch<React.SetStateAction<boolean>>,
}

interface Properties {
    properties : ParentProperties
};

export default function LastNameField ({properties}: Properties) {

    function lastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        properties.setFormData({ ...properties.formData, lastName: e.target.value });
        properties.validLastName(!!e.target.value);
    }

    return (
        <div className='form-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input
                id='lastName'
                defaultValue={properties.user.lastName}
                onChange={lastNameChange}
                onFocus={() => properties.touchLastName(true)}
                required
            />
            <span hidden={properties.lastNameValid || !properties.lastNameTouched} style={{ color: "red" }}>A last name is required</span>
        </div>);
}