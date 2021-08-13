import { UserRepo } from '../../userRepo'
import { userTypes, response } from '../../userTypes'
import argon2 from 'argon2'
import { sign } from 'jsonwebtoken'
import { ACCESS_TOKEN } from '../../../../constant'

export class LoginUser {
  private userRepo: UserRepo

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  public execute = async (props: userTypes): Promise<response> => {
    const { userName, password } = props

    const isUser: Boolean = await this.userRepo.userExist(userName)

    if (!isUser) {
      return { success: false, message: 'User not found' }
    }

    const isUserEmail: response = await this.userRepo.login(props)
    const { user }: any = isUserEmail

    if (await this.checkCredentials(user, password)) {
      const id: string = user.id
      const jwtToken: string = sign({ id }, ACCESS_TOKEN)

      return {
        success: true,
        message: 'User logged in',
        user: { userInfos: isUserEmail.user, jwtToken },
      }
    }

    return { success: false, message: 'Incorrect password' }
  }

  public checkCredentials = async (
    user: any,
    password: string
  ): Promise<Boolean> => {
    const hashPassword: string = user.password
    try {
      const result: boolean = await argon2.verify(hashPassword, password)

      return result
    } catch (error) {
      return false
    }
  }
}
