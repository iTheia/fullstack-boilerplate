export const prod = {
    port: parseInt(process.env.PORT) || 8080,
    token: process.env.TOKEN || '123213;13121',
    refresh_token: process.env.REFRESH_TOKEN || 'ASDASD1231AAS;Q441',
    database: process.env.DB_STRING,
};
