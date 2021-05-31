export default class Users {
    static _latestID: number = 1;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  
    constructor (firstName: string, lastName: string, email: string, avatar: string, id: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.updateLatestID();
    }

    updateLatestID() {
        Users._latestID = Math.max(this.id, Users._latestID);
    }

    static incrementID() {
        return Users._latestID + 1;
    }

    static emptyUser() {
        return new Users('', '', '', '', this.incrementID());
    }
}
