import userRoutes from './api/users/users-routes';
import { Express } from 'express';

export default function (app: Express) {
    app.use('/api', userRoutes);
}