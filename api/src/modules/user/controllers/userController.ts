import { Router, Response, Request } from 'express'
import { UserService } from '../services/userService'

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
    return res.status(200).json(user)
  }

  public routes() {
    this.router.post('/signup', this.create)
    this.router.post('/login', this.login)
  }
}
