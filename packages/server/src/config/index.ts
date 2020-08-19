import { IConfig } from './types';
import { dev } from './dev';
import { prod } from './prod';

let cnfg: IConfig = {
    database: '',
    port: 0,
    refresh_token: '',
    token: '',
};

if (process.env.NODE_ENV === 'development') {
    cnfg = dev;
} else if (process.env.NODE_ENV === 'production') {
    cnfg = prod;
}

export const config = cnfg;
