import express from 'express'

const createServer = () => {
  const server: express.Application = express()
  return server
}

export default createServer
