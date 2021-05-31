import Users from '../models/Users';

var userCache : { [id: number]: Users } = {};

export default userCache;