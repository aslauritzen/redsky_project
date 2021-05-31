import {
    selector,
    atom
} from 'recoil';
import axios from 'axios';
import Users from '../models/Users';
const baseAPIURL = `https://redsky-user-cache-project-api.herokuapp.com/api`;

const ForceReload = atom({
	key: 'forcereload',
	default: 0
});

const UserSelector = selector({
    key: 'users',
    get: async ({ get }) => {
        get(ForceReload);
        return axios.get(baseAPIURL + '/users/get/').then((response: any) => {
            return Object.entries(response.data).map((entry: any) => new Users(
                entry[1].firstName,
                entry[1].lastName,
                entry[1].email,
                entry[1].avatar,
                entry[1].id
            ));
        }).catch((error) => {
            console.log(error);
        });
    },
});

export { ForceReload, UserSelector };