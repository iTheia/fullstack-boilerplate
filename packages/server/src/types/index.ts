import { Request, Response } from 'express';

export interface IRouteProps {
    req: Request;
    res: Response;
}
export interface IUserInfo {
    _iat: string;
    _id: string;
}
export interface RequestWhitUserInfo extends Request {
    userInfo: IUserInfo;
}

export interface IProtectedRouteProps {
    req: RequestWhitUserInfo;
    res: Response;
}

export interface IResponseList {
    success: true;
}

export interface IResponse<T extends keyof IResponseList> {
    error: false;
    data: IResponseList[T];
}

export interface IResponseError {
    error: true;
    message: string;
}
