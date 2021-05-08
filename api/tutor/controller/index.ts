import { Request, Response, NextFunction as Next, RequestHandler } from 'express'

export const getBySlug: (req: Request, res: Response, next: Next) => any = async (req, res, next) => {
  res.send({ data: 'getBySlug success' })
}
