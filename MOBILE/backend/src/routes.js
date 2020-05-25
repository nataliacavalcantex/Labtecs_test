import { Router } from 'express';
import UserController from './app/controllers/UserController'

const routes = new Router();

routes.post('/api/users', UserController.store);
routes.get('/api/oi', UserController.oi); //teste


export default routes;
