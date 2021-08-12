//instance de la classe

import { CreateUser } from './createUser'
import { CreateUserController } from './createUserController'
import { UserRepo } from '../../userRepo'
import db from '../../../../prisma/db'

const userRepo = new UserRepo(db)
const createUser = new CreateUser(userRepo)
const createUserController = new CreateUserController(createUser)

export { createUser, createUserController }
