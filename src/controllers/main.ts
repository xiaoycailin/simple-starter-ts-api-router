import { NextFunction, Request, Response } from "express";

export const helloWorld = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({
            success: true,
            message: 'Hello World'
        })
    } catch (error) {
        next(next)
    }
}