import { IResponseError } from '../types';

export const errorResponse = (error): IResponseError => {
    if (error instanceof Error) {
        return {
            error: true,
            message: error.message,
        };
    }
    return {
        error: true,
        message: error.message,
    };
};
