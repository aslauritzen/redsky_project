import express from 'express';
const router = express.Router();
import * as controller from './users.controller';

router.get('/users/refresh', controller.refreshUsers);
router.get('/users/get', controller.getUsers);
router.get('/users/:id', controller.getUser);
router.put('/users/update/:id', controller.updateUser);
router.post('/users/new', controller.newUser);
router.delete('/users/delete/:id', controller.deleteUser);

export default router;