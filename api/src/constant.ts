import dotenv from 'dotenv'
import path from 'path'

const envPath: string = path.join(__dirname, '../../')

dotenv.config({ path: `${envPath}.env` })

export const SERVER_PORT = process.env.SERVER_PORT
export const NODE_ENV = process.env.NODE_ENV
export const APP_BASE_URL: string = process.env.APP_BASE_URL || '/api/v1/'
export const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || '123'
export const REFRESH_ACCESS_TOKEN: string =
  process.env.REFRESH_ACCESS_TOKEN || '345'
