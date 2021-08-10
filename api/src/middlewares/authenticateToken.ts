const authenticateToken: Function = (req, res, next) => {
  const header: string = req.headers['authorization']
  const token: string = header && header.split(' ')[1]

  if (token === null) res.sendStatus(401)
}
