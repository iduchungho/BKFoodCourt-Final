/**
 * check if user is logged in with a valid token and specified role
 * @param req
 * @param res
 * @param next
 * @returns next()
 * @returns res.status(401).json({message: "Unauthorized"})
 */
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

export const adminWhiteList = [
    'phong.ngo123@hcmut.edu.vn',
    'admin@BKFood.com',
    'hung.hoduccse@hcmut.edu.vn'
]
export const requireUser = (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.user) {
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
    }
    return next();
}

export const requireEmployee = (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.user) {
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
    }
    if (res.locals.user.role === 'employee' || res.locals.user.role === 'admin') {
        return next();
    }
    return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
}

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.user) {
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
    }
    if (res.locals.user.role === 'admin' || adminWhiteList.includes(res.locals.user.email)) {
        return next();
    }
    return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
}