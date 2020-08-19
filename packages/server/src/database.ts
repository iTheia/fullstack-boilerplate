import { connect } from 'mongoose';
import { config } from './config';

export const connection = async () => {
    try {
        await connect(config.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
    } catch (error) {
        console.log(error);
    }
};
