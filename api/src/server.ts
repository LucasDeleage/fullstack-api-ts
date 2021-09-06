import express from 'express'
import cors from 'cors'
import mainRouter from './router'
import { APP_BASE_URL } from './constant'

const createServer = () => {
  const server: express.Application = express()

  const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200,
  }
  server.use(cors(corsOptions))
  server.use(express.json())

  server.use(APP_BASE_URL, mainRouter)
  return server
}

export default createServer
