//gère la logique
import { UserRepo } from '../../userRepo'
import { userTypes } from '../../userTypes'

export class CreateUser {
  private userRepo: UserRepo

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public execute = async (props: userTypes): Promise<Object> => {
    const { userName } = props

    const isUserExist = await this.userRepo.userExist(userName)

    if (isUserExist) {
      return { success: false, message: 'user already exists' }
    }

    const response = await this.userRepo.create(props)

    return response
  }
}
