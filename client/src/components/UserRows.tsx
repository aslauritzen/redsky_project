import { deleteUser } from '../util/apiConnection';
import Users from '../models/Users';
import {
    useRecoilValue,
    useSetRecoilState
} from 'recoil';
import { ForceReload, UserSelector } from '../util/tableState';
import IconButton from '../components/IconButton';
import Avatar from '../components/Avatar';
import '../sass/table.scss';
import { editUserFunction } from '../util/types';



export default function UserRows(editUser: editUserFunction) {
    const usersData = useRecoilValue(UserSelector);
    const reload = useSetRecoilState(ForceReload);

    return (usersData || []).map((user: Users) => {
        return (
            <tr key={user.id} className='user-row'>
                <td className='center-align'>
                    <IconButton onClick={() => deleteUser(user, reload)} className='delete-button' icon='trash' />
                    <IconButton onClick={() => editUser(user)} className='main-button' icon='edit' />
                </td>
                <td>
                    {!!user.avatar ? <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.avatar} /> : <></>}
                </td>
                <td>
                    {user.firstName} {user.lastName}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
        );
    });
}