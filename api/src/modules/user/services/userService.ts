import { User } from '.prisma/client'
import db from '../../../prisma/db'
import bcrypt from 'bcrypt'

export class UserService {
  constructor() {}

  public create = async (
    userName: string,
    password: string
  ): Promise<User | null> => {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashPass: string = await bcrypt.hash(password, salt)
      const res = await db.user.create({
        data: { userName, password: hashPass },
      })
      return res
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public login = async (userName: string, password: string) => {
    try {
      const user: User | null = await db.user.findFirst({
        where: {
          userName,
        },
      })

      if (user) {
        const validPass = await bcrypt.compare(password, user.password)

        return validPass ? user : { message: 'wrong password' }
      }
      return { message: 'wrong username' }
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
