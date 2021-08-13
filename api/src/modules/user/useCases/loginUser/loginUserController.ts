import { Request, Response } from 'express'
import { LoginUser } from './loginUser'

export class LoginUserController {
  private loginUser: LoginUser

  constructor(loginUser: LoginUser) {
    this.loginUser = loginUser
  }

  public execute = async (req: Request, res: Response): Promise<Response> => {
    const { userName, password } = req.body

    if (!userName) {
      res.status(403).json('An username is required')
    }
    if (!password) {
      res.status(403).json('An password is required')
    }

    const response = await this.loginUser.execute(req.body)

    return response.success
      ? res.status(200).json(response)
      : res.status(400).json(response)
  }
}
