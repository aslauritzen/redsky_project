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
}

interface Properties {
    properties: ParentProperties
};

export default function EmailField({ properties }: Properties) {

    function avatarChange(e: React.ChangeEvent<HTMLInputElement>) {
        properties.setFormData({ ...properties.formData, avatar: e.target.value });
    }

    return (
        <div className='form-field'>
            <label htmlFor='avatar'>Avatar Image URL</label>
            <input
                id='avatar'
                defaultValue={properties.user.avatar}
                onChange={avatarChange}
            />
        </div>);
}