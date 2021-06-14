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
    emailValid: boolean,
    validEmail: React.Dispatch<React.SetStateAction<boolean>>,
    emailTouched: boolean,
    touchEmail: React.Dispatch<React.SetStateAction<boolean>>,
}

interface Properties {
    properties : ParentProperties
};

export default function EmailField ({properties}: Properties) {

    function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
        properties.setFormData({ ...properties.formData, email: e.target.value });
        properties.validEmail(!!e.target.value && e.target.value.indexOf('@') > 0);
    }

    return (
        <div className='form-field'>
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                defaultValue={properties.user.email}
                onChange={emailChange}
                onFocus={() => properties.touchEmail(true)}
                required
            />
            <span hidden={!properties.emailValid && properties.emailTouched} style={{ color: "red" }}>An email address is required</span>
        </div>);
}