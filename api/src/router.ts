import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/', (_: Request, res: Response) => {
  res.send('test')
})

export default router
