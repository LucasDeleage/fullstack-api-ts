import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN } from '../constant'

const authenticateToken = (req: any, res: any, next: any) => {
  const token: string = req?.headers?.cookie?.split('=')[1]

  if (!token) {
    return res.send('no token')
  }
  try {
    const user: string | jwt.JwtPayload = jwt.verify(token, ACCESS_TOKEN)
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    res.clearCookie('token')
    return res.send(error)
  }
}

export default authenticateToken
