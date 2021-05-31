"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userCache_1 = __importDefault(require("../util/userCache"));
var Users_1 = __importDefault(require("../models/Users"));
function default_1(userArray) {
    return new Promise(function (resolve) {
        for (var member in userCache_1.default)
            delete userCache_1.default[member];
        userArray.forEach(function (user) {
            userCache_1.default[parseInt(user.id)] = new Users_1.default(user.first_name, user.last_name, user.email, user.avatar, user.id);
        });
        resolve();
    });
}
exports.default = default_1;
