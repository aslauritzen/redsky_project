import { Request, Response } from 'express';
import userCache from '../../util/userCache';
import initUserCache from '../../util/initUserCache';
import Users from '../../models/Users';
import axios from 'axios';

function refreshUsers (req: Request, res: Response) {
    axios.get('https://reqres.in/api/users?page=1').then(async (response: any) => {
        await initUserCache(response.data.data);

        res.status(200).json(userCache);
    }).catch((error) => {
        console.log(`Error: ${error}`);
        res.status(500).json(userCache);
    });
}

function getUsers (req: Request, res: Response) {
    try {
        res.status(200).json(userCache);
    }
    catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({});
    }
}

function getUser (req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id);
        res.status(200).json(userCache[id]);
    }
    catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json(userCache);
    }
}

function updateUser (req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id);
        const userData: any = req.body.userData;
        console.log(id, userData);
        const user: Users = new Users(userData.firstName, userData.lastName, userData.email, userData.avatar, id);
        userCache[id] = user;
        res.status(200).json(userCache);
    }
    catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json(userCache);
    }
}

function newUser (req: Request, res: Response) {
    try {
        const userData: any = req.body.userData;
        const user: Users = Users.newUser(userData.firstName, userData.lastName, userData.email, userData.avatar);
        userCache[user.id] = user;
        res.status(200).json(userCache);
    }
    catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json(userCache);
    }
}

function deleteUser (req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id);
        delete userCache[id];
        res.status(200).json(userCache);
    }
    catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json(userCache);
    }
}

export { refreshUsers, getUsers, getUser, updateUser, newUser, deleteUser };