import { Document } from 'mongoose';

export interface IUserRegister extends Document {
    email: string;
    password: string;
    userName: string;
    firstName: string;
    lastName: string;
}
export interface IUserLogin extends Document {
    email: string;
    password: string;
}
