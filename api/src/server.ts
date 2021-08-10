import express from 'express'
import cors from 'cors'
import { UserController } from './modules/user/controllers/userController'
import { APP_BASE_URL } from './constant'

const createServer = () => {
  const server: express.Application = express()

  const corsOptions = {
    origin: 'http://localhost:1234',
    optionsSuccessStatus: 200,
  }
  server.use(cors(corsOptions))
  server.use(express.json())

  const userRoute = new UserController()

  server.use(APP_BASE_URL, userRoute.router)
  return server
}

export default createServer
