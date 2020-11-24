import { Router } from 'express';
import UserController from './controllers/UserController'

const routes =  Router()

routes
    //Rota de Usuarios
    .post('/users', UserController.create)
    .get('/users', UserController.index)
    .get('/users/:id', UserController.profile)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)

export default routes;