import express from 'express'
import router from './router'
import { APP_BASE_URL } from './constant'

import cors from 'cors'

const createServer = () => {
  const server: express.Application = express()
  server.use(APP_BASE_URL, router)

  server.use(cors({ origin: 'http://localhost:1234' }))

  return server
}

export default createServer
