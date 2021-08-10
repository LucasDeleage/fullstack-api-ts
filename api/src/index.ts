import createServer from './server'
import { SERVER_PORT } from './constant'

const main = async () => {
  const server = createServer()

  server.listen(SERVER_PORT, () => {
    console.log(`running on ${SERVER_PORT}`)
  })
}
main()
