//méthode base de données

import { userTypes, response } from './userTypes'
import argon2 from 'argon2'

export class UserRepo {
  private entities: any

  constructor(entities: any) {
    this.entities = entities
  }

  public userExist = async (userName: string): Promise<Boolean> => {
    const isUser = await this.entities.user.findUnique({ where: { userName } })
    return !!isUser
  }

  public create = async (props: userTypes): Promise<response> => {
    const { userName, password } = props
    const hashPassword: string = await argon2.hash(password)

    try {
      await this.entities.user.create({
        data: { userName, password: hashPassword },
      })
      return { success: true, message: 'user has been created' }
    } catch (error) {
      console.error(error)
      return { success: false, message: 'user has not been created' }
    }
  }

  public login = async (props: userTypes): Promise<response> => {
    const { userName } = props
    try {
      const user: userTypes = await this.entities.user.findUnique({
        where: { userName },
      })
      return { success: true, user }
    } catch (error) {
      console.log(error)
      return { success: false, message: 'user not found' }
    }
  }
}
