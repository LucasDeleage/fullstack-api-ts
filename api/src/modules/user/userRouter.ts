import Router from 'express'
import { createUserController } from './useCases/createUser'
import { loginUserController } from './useCases/loginUser'

const userRouter = Router()

userRouter.post('/', (req, res) => createUserController.execute(req, res))
userRouter.post('/login', (req, res) => loginUserController.execute(req, res))

export { userRouter }
