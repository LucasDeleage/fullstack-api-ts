//méthode base de données

import { userTypes } from './userTypes'

export class UserRepo {
  private entities: any

  constructor(entities: any) {
    this.entities = entities
  }

  public userExist = async (userName: string): Promise<Boolean> => {
    const isUser = await this.entities.user.findUnique({ where: { userName } })
    return !!isUser
  }

  public create = async (props: userTypes): Promise<Object> => {
    const { userName, password } = props

    try {
      await this.entities.user.create({
        data: { userName, password },
      })
      return { success: true, message: 'user has been created' }
    } catch (error) {
      console.error(error)
      return { success: false, message: 'user has not been created' }
    }
  }
}
