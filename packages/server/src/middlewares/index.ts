import { IUserInfo, RequestWhitUserInfo } from '../types';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from '../config';

export const SendDataMiddleware = (fn: Function) => {
    return async (req: Request, res: Response) => {
        try {
            const response = await fn({ req, res });
            if (response.error) {
                return res.status(400).send(response);
            }
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    };
};

export const isLoggedMiddleware = (
    req: RequestWhitUserInfo,
    res: Response,
    next: NextFunction
) => {
    try {
        const rawCookies = req.headers.cookie.split('; ');
        const parsedCookies = {};
        rawCookies.forEach((rawCookie) => {
            const parsedCookie = rawCookie.split('=');
            parsedCookies[parsedCookie[0]] = parsedCookie[1];
        });
        const token = parsedCookies['access-token'];
        if (!token) {
            throw new Error('you must sign up');
        }
        const userInfo: IUserInfo = verify(token, config.token) as IUserInfo;
        req.userInfo = userInfo;
        next();
    } catch (error) {
        if (error instanceof Error) {
            return res.status(403).send({
                error: true,
                message: error.message,
            });
        }
        res.status(400).send({
            error: true,
            message: error.message,
        });
    }
};
