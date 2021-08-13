import { LoginUser } from './loginUser'
import { LoginUserController } from './loginUserController'
import { UserRepo } from '../../userRepo'
import db from '../../../../prisma/db'

const userRepo = new UserRepo(db)
const loginUser = new LoginUser(userRepo)
const loginUserController = new LoginUserController(loginUser)

export { loginUser, loginUserController }
