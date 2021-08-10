import db from '../../../prisma/db'

export class UserService {
  constructor() {}

  public create = async (userName: string, password: string) => {
    try {
      const res = await db.user.create({ data: { userName, password } })
      return res
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public login = async (userName: string, password: string) => {
    try {
      const res = await db.user.findFirst({
        where: {
          AND: [
            {
              password,
            },
            {
              userName,
            },
          ],
        },
      })

      return res
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
