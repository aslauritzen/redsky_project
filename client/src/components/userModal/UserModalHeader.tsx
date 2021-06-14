interface Properties {
    newUser: boolean
}

export default function UserModalHeader({ newUser }: Properties) {
    return (
        <div className='modal-header'>
            <h4 className='modal-title'>
                {newUser ? 'Add a user' : 'Update user'}
            </h4>
            <hr />
            <h2>
                Fill out the form below to {newUser ? 'add a user to' : 'update the user in'} the user cache.
            </h2>
        </div>
    );
}