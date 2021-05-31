import {
    atom,
} from 'recoil';
import Users from '../models/Users';

var userCache : { [id: number]: Users } = {};

export default atom({
    key: 'users',
    default: userCache
});