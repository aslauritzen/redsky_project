import Users from '../../models/Users';

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
}

interface Properties {
    properties : ParentProperties
};

export default function FirstNameField ({properties}: Properties) {

    function firstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        properties.setFormData({ ...properties.formData, firstName: e.target.value });
        properties.validFirstName(!!e.target.value);
    }

    return (
        <div className='form-field'>
            <label htmlFor='firstName'>First Name</label>
            <input
                autoFocus
                id='firstName'
                defaultValue={properties.user.firstName}
                onChange={firstNameChange}
                onFocus={() => properties.touchFirstName(true)}
                required
            />
            <span hidden={!properties.firstNameValid && properties.firstNameTouched} style={{ color: "red" }}>A first name is required</span>
        </div>);
}