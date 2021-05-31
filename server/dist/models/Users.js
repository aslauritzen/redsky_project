"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = /** @class */ (function () {
    function Users(firstName, lastName, email, avatar, id) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.updateLatestID();
    }
    Users.prototype.updateLatestID = function () {
        Users._latestID = Math.max(this.id, Users._latestID);
    };
    Users.incrementID = function () {
        return Users._latestID + 1;
    };
    Users.newUser = function (firstName, lastName, email, avatar) {
        return new Users(firstName, lastName, email, avatar, this.incrementID());
    };
    Users._latestID = 1;
    return Users;
}());
exports.default = Users;
