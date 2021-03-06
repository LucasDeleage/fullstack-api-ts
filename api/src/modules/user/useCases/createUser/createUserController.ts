//recupère Req et renvoi Res
import { Request, Response } from 'express'
import { CreateUser } from './createUser'

export class CreateUserController {
  private useCase: CreateUser

  constructor(createUser: CreateUser) {
    this.useCase = createUser
  }

  public execute = async (req: Request, res: Response): Promise<Response> => {
    const { userName, password } = req.body

    if (!userName) {
      return res.status(400).json('please send a valid userName')
    }
    if (!password) {
      return res.status(400).json('please send a valid password')
    }

    const createUser = await this.useCase.execute(req.body)

    return createUser.success
      ? res.status(201).json(createUser)
      : res.status(400).json(createUser)
  }
}
