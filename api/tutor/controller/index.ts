import { Request, Response, NextFunction } from 'express'

export const getBySlug: (req: Request, res: Response, next: NextFunction) => any = async (req, res, next) => {
  res.send({ data: 'getBySlug success' })
}
