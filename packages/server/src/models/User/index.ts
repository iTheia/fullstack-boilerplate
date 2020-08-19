import { Schema, model } from 'mongoose';

const Types = Schema.Types;
export const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'email can not be empety'],
        },
        password: {
            type: String,
            required: [true, 'password can not be empety'],
        },
        lastName: {
            type: String,
            required: [true, 'last name can not be empty'],
        },
        firstName: {
            type: String,
            required: [true, 'first name can not be empty'],
        },
        userName: {
            type: String,
            required: [true, 'user name can not be empty'],
        },
        favorites: [{ ref: 'New', type: Types.ObjectId }],
    },
    { timestamps: true }
);

export const User = model('User', userSchema);
