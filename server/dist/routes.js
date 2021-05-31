"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_routes_1 = __importDefault(require("./api/users/users-routes"));
function default_1(app) {
    app.use('/api', users_routes_1.default);
}
exports.default = default_1;
