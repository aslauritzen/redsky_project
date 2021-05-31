import axios from 'axios';
import Users from '../models/Users';
import {
    SetterOrUpdater
} from 'recoil';
import { toast } from 'react-toastify';
const baseAPIURL = `https://redsky-user-cache-project-api.herokuapp.com/api`;

function refreshUsers (reload: SetterOrUpdater<number>) {
    axios.get(`${baseAPIURL}/users/refresh/`).then(() => {
        toast.success('Users refreshed successfully');
        reload(Math.random());
    }).catch((error) => {
        toast.error('User refresh failed');
        console.error(error);
        reload(Math.random());
    });
}

function addUser (user: any, reload: SetterOrUpdater<number>) {
    axios.post(`${baseAPIURL}/users/new/`, {userData: user}).then(() => {
        toast.success('User added successfully');
        reload(Math.random());
    }).catch((error) => {
        toast.error('User addition failed');
        console.error(error);
        reload(Math.random());
    });
}

function updateUser (user: any, reload: SetterOrUpdater<number>) {
    axios.put(`${baseAPIURL}/users/update/${user.id}/`, {userData: user}).then(() => {
        toast.success('User updated successfully');
        reload(Math.random());
    }).catch((error) => {
        toast.error('User update failed');
        console.error(error);
        reload(Math.random());
    });
}

function deleteUser (user: Users, reload: SetterOrUpdater<number>) {
    axios.delete(`${baseAPIURL}/users/delete/${user.id}/`).then(() => {
        toast.success('User deleted successfully');
        reload(Math.random());
    }).catch((error) => {
        toast.error('User deletion failed');
        console.error(error);
        reload(Math.random());
    });
}

export { refreshUsers, addUser, updateUser, deleteUser };