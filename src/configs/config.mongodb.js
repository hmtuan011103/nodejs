import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const DEV_APP_PORT = 3052;
const PRO_APP_PORT = 3000;

const DEV_DB_HOST = 'localhost';
const PRO_DB_HOST = 'localhost';

const DEV_DB_PORT = 27017;
const PRO_DB_PORT = 27017;

const DEV_DB_NAME = 'shopDEV';
const PRO_DB_NAME = 'shopPRO';

const dev = {
    app: {
        port: process.env.DEV_APP_PORT || DEV_APP_PORT
    },
    db: {
        host: process.env.DEV_DB_HOST || DEV_DB_HOST,
        port: process.env.DEV_DB_PORT || DEV_DB_PORT,
        name: process.env.DEV_DB_NAME || DEV_DB_NAME
    }
}

const pro = {
    app: {
        port: process.env.PRO_APP_PORT || PRO_APP_PORT,
    },
    db: {
        host: process.env.PRO_DB_HOST || PRO_DB_HOST,
        port: process.env.PRO_DB_PORT || PRO_DB_PORT,
        name: process.env.PRO_DB_NAME || PRO_DB_NAME,
    }
}

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev'

export default config[env]