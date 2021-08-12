import { Router } from 'express'
import { userRouter } from './modules/user/userRouter'

const mainRouter: Router = Router()

mainRouter.use('/users', userRouter)

export default mainRouter
