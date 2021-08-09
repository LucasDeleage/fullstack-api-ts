import dotenv from 'dotenv'
import path from 'path'
import createServer from './server'

const envPath: string = path.join(__dirname, '../../')

dotenv.config({ path: `${envPath}.env` })

const main = async () => {
  const server = createServer()

  server.listen(process.env.SERVER_PORT, () => {
    console.log(`running on ${process.env.SERVER_PORT}`)
  })
}

main()