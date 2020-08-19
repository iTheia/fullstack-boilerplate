import { Router } from 'express';
import { AuthRoutes } from './routes/Auth';

export const router: Router = Router();

router.use('/auth', AuthRoutes);
