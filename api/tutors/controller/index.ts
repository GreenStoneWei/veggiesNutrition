import { Request, Response, NextFunction as Next, RequestHandler } from 'express'

export const getTutors: (req: Request, res: Response, next: Next) => any = async (req, res, next) => {
  res.send({ data: 'getTutors success' })
}
