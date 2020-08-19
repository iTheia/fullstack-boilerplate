import { IConfig } from './types';

export const dev: IConfig = {
    port: parseInt(process.env.DEV_PORT) || 5000,
    token: process.env.TOKEN || '123213;13121',
    refresh_token: process.env.REFRESH_TOKEN || 'ASDASD1231AAS;Q441',
    database: process.env.DEV_DB_STRING || 'mongodb://127.0.0.1:27017/news',
};
