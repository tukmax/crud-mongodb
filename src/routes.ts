import { Router } from 'express';
import UserController from './controllers/UserController'


const routes =  Router()
const usercontroller = new UserController()
routes
    //Rota de Usuarios
    .post('/users', usercontroller.create)
    .get('/users', usercontroller.index)
    .get('/users/:id', usercontroller.profile)
    .put('/users/:id', usercontroller.update)
    .delete('/users/:id', usercontroller.delete)

export default routes;