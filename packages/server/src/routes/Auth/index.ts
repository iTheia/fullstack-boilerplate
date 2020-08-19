import { Router } from 'express';
import { LoginController } from '../../controllers/Auth';
import { RegisterController } from '../../controllers/Auth';
import { SendDataMiddleware } from '../../middlewares';

export const AuthRoutes = Router();

AuthRoutes.post('/login', SendDataMiddleware(LoginController));

AuthRoutes.post('/register', SendDataMiddleware(RegisterController));
