import userCache from '../util/userCache';
import Users from '../models/Users';

export default function(userArray: Array<any>) {
    return new Promise<void>(resolve => {
        for (let member in userCache) delete userCache[member];
    
        userArray.forEach((user: any) => {
            userCache[parseInt(user.id)] = new Users(
                user.first_name,
                user.last_name,
                user.email,
                user.avatar,
                user.id
            );
        });
        resolve();
    });
}