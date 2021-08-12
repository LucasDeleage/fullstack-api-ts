import { Router, Response, Request } from 'express'
import { UserService } from '../services/userService'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN } from '../../../constant'
import authenticateToken from '../../../middlewares/authenticateToken'

export class UserController {
  public router: Router
  private userService: UserService

  constructor() {
    //Initializing our app router using Express router
    this.router = Router()
    this.userService = new UserService()
    this.routes()
  }

  public create = async (req: Request, res: Response): Promise<Object> => {
    const user = await this.userService.create(
      req.body.userName,
      req.body.password
    )
    return res.status(200).json(user)
  }

  public login = async (req: Request, res: Response): Promise<Object> => {
    const user = await this.userService.login(
      req.body.userName,
      req.body.password
    )

    if (!user.message) {
      const token: string = jwt.sign({ user }, ACCESS_TOKEN, { expiresIn: 300 })
      res.cookie('token', token, {
        httpOnly: true,
      })
      return res.status(200).json({ auth: true, token, user })
    }

    return res.status(403).json({ auth: false, message: user.message })
  }

  public privateRoute = (req: Request | any, res: Response): Object => {
    return res.status(200).json(req.user)
  }

  public routes() {
    this.router.post('/signup', this.create)
    this.router.post('/login', this.login)
    this.router.get('/private', authenticateToken, this.privateRoute)
  }
}
