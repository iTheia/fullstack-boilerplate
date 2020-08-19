import { IRouteProps, IResponse, IResponseError } from '../../types';
import { config } from '../../config';
import { sign } from 'jsonwebtoken';
import {
	validRegisterUserSchema,
	validLoginUserSchema,
} from '@news/common/dist';
import { IUserRegister, IUserLogin } from './types';
import { hash, genSalt, compare } from 'bcryptjs';
import { User } from '../../models/User';
import { errorResponse } from '../../util';

export const LoginController = async ({
	req,
	res,
}: IRouteProps): Promise<IResponse<'success'> | IResponseError> => {
	try {
		const { email, password }: IUserLogin = req.body;
		await validLoginUserSchema.validate({ email, password });
		const user: IUserLogin = (await User.findOne({ email })) as IUserLogin;
		if (!user) {
			throw new Error('Invalid login');
		}
		const validPassword = await compare(password, user.password);
		if (!validPassword) {
			throw new Error('Invalid login');
		}
		const token = await sign({ _id: user._id }, config.token);
		res.cookie('access-token', token, {
			httpOnly: true,
		});
		return {
			error: false,
			data: true,
		};
	} catch (error) {
		return errorResponse(error);
	}
};

export const RegisterController = async ({
	req,
	res,
}: IRouteProps): Promise<IResponse<'success'> | IResponseError> => {
	try {
		const {
			email,
			password,
			userName,
			firstName,
			lastName,
		}: IUserRegister = req.body;
		await validRegisterUserSchema.validate({
			email,
			firstName,
			userName,
			lastName,
			password,
		});
		const emailExist = await User.findOne({ email });
		if (emailExist) {
			throw new Error('email alredy exists');
		}
		const userNameExist = await User.findOne({ userName });
		if (userNameExist) {
			throw new Error('user name alredy exists');
		}
		const hashPassword = await hash(password, await genSalt(10));

		const user = new User({
			email,
			password: hashPassword,
			firstName,
			userName,
			lastName,
		});
		await user.save();
		const token = await sign({ _id: user._id }, config.token);
		res.cookie('access-token', token, {
			httpOnly: true,
		});
		return {
			error: false,
			data: true,
		};
	} catch (error) {
		return errorResponse(error);
	}
};
